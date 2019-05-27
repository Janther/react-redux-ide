import { createSelector } from "reselect";
import { GrammarRegistry } from "first-mate";
import buildBranch from "./buildBranch";

const grammarRegistry = new GrammarRegistry();
const linesSelector = editor => editor.keyboard.lines;
const editorsSelector = editor => editor.editors.editors;
const grammarsSelector = editor => editor.editors.grammars;
const selectedEditorIdSelector = editor => editor.editors.selectedEditor;

const selectedEditorSelector = createSelector(
  editorsSelector,
  selectedEditorIdSelector,
  (editors, selectedEditorId) =>
    editors.find(editor => editor.name === selectedEditorId)
);

const selectedGrammarSelector = createSelector(
  grammarsSelector,
  selectedEditorSelector,
  (grammars, selectedEditor) => {
    const grammarFinder = grammar => grammar.name === selectedEditor.grammar;
    let grammarClass = grammarRegistry.grammars.find(grammarFinder);
    if (!grammarClass) {
      const { name, rules } = grammars.find(grammarFinder);
      grammarClass = grammarRegistry.createGrammar(name, rules);
      grammarRegistry.addGrammar(grammarClass);
    }
    return grammarClass;
  }
);

const tokenizedLinesSelector = createSelector(
  linesSelector,
  selectedGrammarSelector,
  (lines, selectedGrammar) => lines.reduce(tokenizeLines(selectedGrammar), [])
);

const tokenizeLines = grammar => (result, inputLine, index, lines) => {
  let { finalRuleStack: ruleStack, finalScopes: scopes } =
    index === 0
      ? {
          finalRuleStack: null,
          finalScopes: []
        }
      : result[index - 1];
  const initialRuleStack = ruleStack === null ? null : [...ruleStack];
  let finalRuleStack = ruleStack === null ? null : [...ruleStack];
  const initialScopes = [...scopes];
  let finalScopes = [...scopes];
  let tags;
  let line = inputLine.value;
  ({ line, tags, ruleStack: finalRuleStack } = grammar.tokenizeLine(
    line,
    finalRuleStack,
    index === 0,
    false, // compatibilityMode
    index === lines.length - 1
  ));

  const rootBranch = grammarRegistry
    .decodeTokens(line, tags, finalScopes)
    .reduce(buildBranch, []);

  result.push({
    value: inputLine.value,
    syntax: true,
    node: rootBranch[0],
    initialRuleStack,
    finalRuleStack,
    initialScopes,
    finalScopes
  });
  return result;
};

export default tokenizedLinesSelector;
