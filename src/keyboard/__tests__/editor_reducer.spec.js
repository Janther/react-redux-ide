import reducer from '../reducers/cursor'
import * as constants from '../constants'

describe('cursor reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      line: 0,
      char: 0,
      startOffset: 0,
      endOffset: 0
    });
  });

  it('should handle EDITOR_MOVE_CURSOR up', () => {
    expect(
      reducer({ line: 0, char: 0 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [],
          direction: 'up'
        }
      })
    ).toEqual(
      { line: 0, char: 0 }
    );

    expect(
      reducer({ line: 2, char: 0 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [1, 2, 3],
          direction: 'up'
        }
      })
    ).toEqual(
      { line: 1, char: 0 }
    );
  });

  it('should handle EDITOR_MOVE_CURSOR down', () => {
    expect(
      reducer({ line: 1, char: 0 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [1, 2],
          direction: 'down'
        }
      })
    ).toEqual(
      { line: 1, char: 0 }
    );
  });

  it('should handle EDITOR_MOVE_CURSOR left', () => {
    expect(
      reducer({ line: 0, char: 0 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [1, 2],
          direction: 'left'
        }
      })
    ).toEqual(
      { line: 0, char: 0 }
    );

    expect(
      reducer({ line: 0, char: 2 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [1, 2],
          direction: 'left'
        }
      })
    ).toEqual(
      { line: 0, char: 1 }
    );
  });

  it('should handle EDITOR_MOVE_CURSOR right', () => {
    expect(
      reducer({ line: 0, char: 0 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [1, 2],
          direction: 'right'
        }
      })
    ).toEqual(
      { line: 0, char: 1 }
    );
  });
})
