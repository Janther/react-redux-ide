import { createSelector } from 'reselect'
import { GrammarRegistry } from 'first-mate-js'
import css_cson from 'language-css/grammars/css.cson'

export const cssSnip = (state) => state.snip.css_snip.css;

export const registry = new GrammarRegistry();
export const grammar = registry.createGrammar(css_cson);
registry.addGrammar(grammar);

let { line, tags } = grammar.tokenizeLine(".hello {\n  color: #AAA;\n}");
let tokens = registry.decodeTokens(line, tags);
//
for (let i = 0, len = tokens.length; i < len; i++) {
  let { value, scopes } = tokens[i];
  // console.log(tokens[i]);
  console.log("Token text: '" + value + "' with scopes: " + scopes);
}

const getVisibleTodosFilteredByKeyword = createSelector(
  cssSnip,
  (snip) => grammar.filter(
    todo => todo.text.indexOf(keyword) > -1
  )
)
