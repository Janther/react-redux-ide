import { cssGrammar, grammarRegistry } from "../../utils/grammars";
import buildBranch from "./buildBranch";
import newLine from "../../keyboard/reducers/utils/newLine";

const tokenizeLines = (result, inputLine, index, lines) => {
  // if (inputLine.syntax) {
  //   result.push({
  //     ...inputLine
  //   });
  //   return result;
  // }

  let { finalRuleStack: ruleStack, finalScopes: scopes } =
    index === 0 ? newLine() : result[index - 1];
  let initialRuleStack = ruleStack === null ? null : [...ruleStack];
  let finalRuleStack = ruleStack === null ? null : [...ruleStack];
  let initialScopes = [...scopes];
  let finalScopes = [...scopes];
  let tags;
  let line = inputLine.value;
  ({ line, tags, ruleStack: finalRuleStack } = cssGrammar.tokenizeLine(
    line,
    finalRuleStack,
    index === 0,
    false, // compatibilityMode
    index === lines.length - 1
  ));

  let rootBranch = [];
  grammarRegistry
    .decodeTokens(line, tags, finalScopes)
    .forEach(token => (rootBranch = buildBranch(rootBranch, token)));

  result.push({
    ...inputLine,
    syntax: true,
    node: rootBranch[0],
    initialRuleStack,
    finalRuleStack,
    initialScopes,
    finalScopes
  });
  return result;
};

export default tokenizeLines;
