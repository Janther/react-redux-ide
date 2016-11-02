import { createSelector } from 'reselect'
import { GrammarRegistry } from 'first-mate-js'
import css_cson from 'language-css/grammars/css.cson'

export const cssSnip = (state) => state.snip.css_snip.css;

export const registry = new GrammarRegistry();
export const grammar = registry.createGrammar(css_cson);
registry.addGrammar(grammar);

const getVisibleTodosFilteredByKeyword = createSelector(
  cssSnip,
  (snip) => grammar.filter(
    todo => todo.text.indexOf(keyword) > -1
  )
)
