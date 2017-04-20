import reducer from '../reducers/cursor'
import * as constants from '../constants'

describe('cursor reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      lineIndex: 0,
      charIndex: 0,
      startOffset: 0,
      endOffset: 0
    });
  });

  it('should handle EDITOR_MOVE_CURSOR up', () => {
    expect(
      reducer({ lineIndex: 0, charIndex: 0 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [],
          direction: 'up'
        }
      })
    ).toEqual(
      { lineIndex: 0, charIndex: 0 }
    );

    expect(
      reducer({ lineIndex: 2, charIndex: 0 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [1, 2, 3],
          direction: 'up'
        }
      })
    ).toEqual(
      { lineIndex: 1, charIndex: 0 }
    );
  });

  it('should handle EDITOR_MOVE_CURSOR down', () => {
    expect(
      reducer({ lineIndex: 1, charIndex: 0 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [1, 2],
          direction: 'down'
        }
      })
    ).toEqual(
      { lineIndex: 1, charIndex: 0 }
    );
  });

  it('should handle EDITOR_MOVE_CURSOR left', () => {
    expect(
      reducer({ lineIndex: 0, charIndex: 0 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [1, 2],
          direction: 'left'
        }
      })
    ).toEqual(
      { lineIndex: 0, charIndex: 0 }
    );

    expect(
      reducer({ lineIndex: 0, charIndex: 2 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [1, 2],
          direction: 'left'
        }
      })
    ).toEqual(
      { lineIndex: 0, charIndex: 1 }
    );
  });

  it('should handle EDITOR_MOVE_CURSOR right', () => {
    expect(
      reducer({ lineIndex: 0, charIndex: 0 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [1, 2],
          direction: 'right'
        }
      })
    ).toEqual(
      { lineIndex: 0, charIndex: 1 }
    );
  });
})
