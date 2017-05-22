import reducer from '../reducers/cursor'
import * as constants from '../constants'

describe('cursor reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toMatchSnapshot();
  });

  it('should handle EDITOR_MOVE_CURSOR up', () => {
    expect(
      reducer({ lineIndex: 0, charIndex: 0 }, {
        type: constants.EDITOR_MOVE_UP_CURSOR,
        payload: {
          lines: []
        }
      })
    ).toMatchSnapshot();

    expect(
      reducer({ lineIndex: 0, charIndex: 0 }, {
        type: constants.EDITOR_MOVE_UP_CURSOR,
        payload: {
          lines: [{
            value: '1'
          }]
        }
      })
    ).toMatchSnapshot();

    expect(
      reducer({ lineIndex: 0, charIndex: 1 }, {
        type: constants.EDITOR_MOVE_UP_CURSOR,
        payload: {
          lines: [{
            value: '1'
          }]
        }
      })
    ).toMatchSnapshot();

    expect(
      reducer({ lineIndex: 2, charIndex: 0 }, {
        type: constants.EDITOR_MOVE_UP_CURSOR,
        payload: {
          lines: [{
            value: '1'
          }, {
            value: '2',
          }, {
            value: '3'
          }]
        }
      })
    ).toMatchSnapshot();

    expect(
      reducer({ lineIndex: 2, charIndex: 1 }, {
        type: constants.EDITOR_MOVE_UP_CURSOR,
        payload: {
          lines: [{
            value: '1'
          }, {
            value: '2',
          }, {
            value: '3'
          }]
        }
      })
    ).toMatchSnapshot();
  });

  it('should handle EDITOR_MOVE_CURSOR down', () => {
    expect(
      reducer({ lineIndex: 1, charIndex: 0 }, {
        type: constants.EDITOR_MOVE_DOWN_CURSOR,
        payload: {
          lines: [{
            value: '1'
          }, {
            value: '2',
          }]
        }
      })
    ).toMatchSnapshot();

    expect(
      reducer({ lineIndex: 0, charIndex: 0 }, {
        type: constants.EDITOR_MOVE_DOWN_CURSOR,
        payload: {
          lines: [{
            value: '1'
          }, {
            value: '2',
          }]
        }
      })
    ).toMatchSnapshot();
  });

  it('should handle EDITOR_MOVE_CURSOR left', () => {
    expect(
      reducer({ lineIndex: 0, charIndex: 0 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [{
            value: '1'
          }, {
            value: '2',
          }]
        }
      })
    ).toMatchSnapshot();

    expect(
      reducer({ lineIndex: 0, charIndex: 2 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [{
            value: '1'
          }, {
            value: '2',
          }]
        }
      })
    ).toMatchSnapshot();
  });

  it('should handle EDITOR_MOVE_CURSOR right', () => {
    expect(
      reducer({ lineIndex: 0, charIndex: 0 }, {
        type: constants.EDITOR_MOVE_CURSOR,
        payload: {
          lines: [{
            value: '1'
          }, {
            value: '2',
          }]
        }
      })
    ).toMatchSnapshot();
  });
})
