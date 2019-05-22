const charsInLine = (lines, index) => lines[index].value.length;

export const moveUp = (state, action) => {
  if (state.lineIndex === 0) {
    state.charIndex = 0;
  } else {
    const previousLineLength = charsInLine(action.lines, state.lineIndex - 1);
    state.lineIndex--;
    state.charIndex = Math.min(previousLineLength, state.charIndex);
  }

  return state;
};

export const moveDown = (state, action) => {
  const actionLines = action.lines;

  if (state.lineIndex === actionLines.length - 1) {
    state.charIndex = charsInLine(actionLines, actionLines.length - 1);
  } else {
    const nextLineLength = charsInLine(actionLines, state.lineIndex + 1);
    state.lineIndex++;
    state.charIndex = Math.min(nextLineLength, state.charIndex);
  }

  return state;
};

export const moveLeft = (state, action) => {
  if (state.charIndex > 0) {
    state.charIndex--;
  } else if (state.lineIndex > 0) {
    const previousLineLength = charsInLine(action.lines, state.lineIndex - 1);
    state.lineIndex--;
    state.charIndex = previousLineLength;
  }

  return state;
};

export const moveRight = (state, action) => {
  const actionLines = action.lines;
  const currentLineLength = charsInLine(actionLines, state.lineIndex);

  if (state.charIndex < currentLineLength) {
    state.charIndex++;
  } else if (state.lineIndex < actionLines.length - 1) {
    state.lineIndex++;
    state.charIndex = 0;
  }

  return state;
};
