import { GrammarRegistry } from "first-mate";
import cssCson from "language-css/grammars/css.cson";

export const grammarRegistry = new GrammarRegistry();
export const cssGrammar = grammarRegistry.createGrammar("CSS", cssCson);

grammarRegistry.addGrammar(cssGrammar);
