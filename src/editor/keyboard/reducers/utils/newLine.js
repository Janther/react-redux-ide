const newLine = (value = "") => ({
  value: value,
  syntax: false,
  node: {},
  initialRuleStack: null,
  finalRuleStack: null,
  initialScopes: [],
  finalScopes: []
});

export default newLine;
