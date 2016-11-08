import { GrammarRegistry } from 'first-mate-js'
import cssCson from 'language-css/grammars/css.cson'

export const grammarRegistry = new GrammarRegistry();
export const cssGrammar = grammarRegistry.createGrammar(cssCson);

grammarRegistry.addGrammar(cssGrammar);
