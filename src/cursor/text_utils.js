const IsJapaneseKanaCharacter = function(charCode) {
  return (0x3000 <= charCode && charCode <= 0x30FF);
};

const isCJKUnifiedIdeograph = function(charCode) {
  return (0x4E00 <= charCode && charCode <= 0x9FFF);
};

const isFullWidthForm = function(charCode) {
  return (0xFF01 <= charCode && charCode <= 0xFF5E) || (0xFFE0 <= charCode && charCode <= 0xFFE6);
};

export const isDoubleWidthCharacter = function(character) {
  var charCode;
  charCode = character.charCodeAt(0);
  return IsJapaneseKanaCharacter(charCode) || isCJKUnifiedIdeograph(charCode) || isFullWidthForm(charCode);
};

export const isHalfWidthCharacter = function(character) {
  var charCode;
  charCode = character.charCodeAt(0);
  return (0xFF65 <= charCode && charCode <= 0xFFDC) || (0xFFE8 <= charCode && charCode <= 0xFFEE);
};

export const isKoreanCharacter = function(character) {
  var charCode;
  charCode = character.charCodeAt(0);
  return (0xAC00 <= charCode && charCode <= 0xD7A3) || (0x1100 <= charCode && charCode <= 0x11FF) || (0x3130 <= charCode && charCode <= 0x318F) || (0xA960 <= charCode && charCode <= 0xA97F) || (0xD7B0 <= charCode && charCode <= 0xD7FF);
};
