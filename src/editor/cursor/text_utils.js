const IsJapaneseKanaCharacter = function(charCode) {
  return 0x3000 <= charCode && charCode <= 0x30ff;
};

const isCJKUnifiedIdeograph = function(charCode) {
  return 0x4e00 <= charCode && charCode <= 0x9fff;
};

const isFullWidthForm = function(charCode) {
  return (
    (0xff01 <= charCode && charCode <= 0xff5e) ||
    (0xffe0 <= charCode && charCode <= 0xffe6)
  );
};

export const isDoubleWidthCharacter = function(character) {
  var charCode;
  charCode = character.charCodeAt(0);
  return (
    IsJapaneseKanaCharacter(charCode) ||
    isCJKUnifiedIdeograph(charCode) ||
    isFullWidthForm(charCode)
  );
};

export const isHalfWidthCharacter = function(character) {
  var charCode;
  charCode = character.charCodeAt(0);
  return (
    (0xff65 <= charCode && charCode <= 0xffdc) ||
    (0xffe8 <= charCode && charCode <= 0xffee)
  );
};

export const isKoreanCharacter = function(character) {
  var charCode;
  charCode = character.charCodeAt(0);
  return (
    (0xac00 <= charCode && charCode <= 0xd7a3) ||
    (0x1100 <= charCode && charCode <= 0x11ff) ||
    (0x3130 <= charCode && charCode <= 0x318f) ||
    (0xa960 <= charCode && charCode <= 0xa97f) ||
    (0xd7b0 <= charCode && charCode <= 0xd7ff)
  );
};
