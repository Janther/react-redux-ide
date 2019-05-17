const IsJapaneseKanaCharacter = charCode =>
  0x3000 <= charCode && charCode <= 0x30ff;

const isCJKUnifiedIdeograph = charCode =>
  0x4e00 <= charCode && charCode <= 0x9fff;

const isFullWidthForm = charCode =>
  (0xff01 <= charCode && charCode <= 0xff5e) ||
  (0xffe0 <= charCode && charCode <= 0xffe6);

const isDoubleWidthCharacter = character => {
  let charCode = character.charCodeAt(0);
  return (
    IsJapaneseKanaCharacter(charCode) ||
    isCJKUnifiedIdeograph(charCode) ||
    isFullWidthForm(charCode)
  );
};

const isHalfWidthCharacter = character => {
  let charCode = character.charCodeAt(0);
  return (
    (0xff65 <= charCode && charCode <= 0xffdc) ||
    (0xffe8 <= charCode && charCode <= 0xffee)
  );
};

const isKoreanCharacter = character => {
  var charCode = character.charCodeAt(0);
  return (
    (0xac00 <= charCode && charCode <= 0xd7a3) ||
    (0x1100 <= charCode && charCode <= 0x11ff) ||
    (0x3130 <= charCode && charCode <= 0x318f) ||
    (0xa960 <= charCode && charCode <= 0xa97f) ||
    (0xd7b0 <= charCode && charCode <= 0xd7ff)
  );
};

export const charLengthInScreen = (character, charSize) => {
  if (isKoreanCharacter(character)) {
    return charSize.koreanCharWidth;
  }
  if (isHalfWidthCharacter(character)) {
    return charSize.halfWidthCharWidth;
  }
  if (isDoubleWidthCharacter(character)) {
    return charSize.doubleWidthCharWidth;
  }
  return charSize.defaultCharWidth;
};

const stringLengthInScreen = (str, charSize) =>
  Math.floor(
    str
      .split("")
      .reduce((length, char) => length + charLengthInScreen(char, charSize), 0)
  );

export default stringLengthInScreen;
