import reducer from "../reducers/cursor";
import * as constants from "../constants";

describe("cursor reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it("should handle EDITOR_MOVE_CURSOR up", () => {
    expect(
      reducer(
        {
          anchor: {
            charIndex: 0,
            lineIndex: 0
          },
          caret: {
            charIndex: 0,
            lineIndex: 0
          },
          ltr: true
        },
        {
          type: constants.EDITOR_MOVE_UP_CURSOR,
          payload: {
            lines: []
          }
        }
      )
    ).toMatchSnapshot();

    expect(
      reducer(
        {
          anchor: {
            charIndex: 0,
            lineIndex: 0
          },
          caret: {
            charIndex: 0,
            lineIndex: 0
          },
          ltr: true
        },
        {
          type: constants.EDITOR_MOVE_UP_CURSOR,
          payload: {
            lines: [
              {
                value: "1"
              }
            ]
          }
        }
      )
    ).toMatchSnapshot();

    expect(
      reducer(
        {
          anchor: {
            charIndex: 1,
            lineIndex: 0
          },
          caret: {
            charIndex: 1,
            lineIndex: 0
          },
          ltr: true
        },
        {
          type: constants.EDITOR_MOVE_UP_CURSOR,
          payload: {
            lines: [
              {
                value: "1"
              }
            ]
          }
        }
      )
    ).toMatchSnapshot();

    expect(
      reducer(
        {
          anchor: {
            charIndex: 0,
            lineIndex: 2
          },
          caret: {
            charIndex: 0,
            lineIndex: 2
          },
          ltr: true
        },
        {
          type: constants.EDITOR_MOVE_UP_CURSOR,
          payload: {
            lines: [
              {
                value: "1"
              },
              {
                value: "2"
              },
              {
                value: "3"
              }
            ]
          }
        }
      )
    ).toMatchSnapshot();

    expect(
      reducer(
        {
          anchor: {
            charIndex: 1,
            lineIndex: 2
          },
          caret: {
            charIndex: 1,
            lineIndex: 2
          },
          ltr: true
        },
        {
          type: constants.EDITOR_MOVE_UP_CURSOR,
          payload: {
            lines: [
              {
                value: "1"
              },
              {
                value: "2"
              },
              {
                value: "3"
              }
            ]
          }
        }
      )
    ).toMatchSnapshot();
  });

  it("should handle EDITOR_MOVE_CURSOR down", () => {
    expect(
      reducer(
        {
          anchor: {
            charIndex: 0,
            lineIndex: 1
          },
          caret: {
            charIndex: 0,
            lineIndex: 1
          },
          ltr: true
        },
        {
          type: constants.EDITOR_MOVE_DOWN_CURSOR,
          payload: {
            lines: [
              {
                value: "1"
              },
              {
                value: "2"
              }
            ]
          }
        }
      )
    ).toMatchSnapshot();

    expect(
      reducer(
        {
          anchor: {
            charIndex: 0,
            lineIndex: 0
          },
          caret: {
            charIndex: 0,
            lineIndex: 0
          },
          ltr: true
        },
        {
          type: constants.EDITOR_MOVE_DOWN_CURSOR,
          payload: {
            lines: [
              {
                value: "1"
              },
              {
                value: "2"
              }
            ]
          }
        }
      )
    ).toMatchSnapshot();
  });

  it("should handle EDITOR_MOVE_CURSOR left", () => {
    expect(
      reducer(
        {
          anchor: {
            charIndex: 0,
            lineIndex: 0
          },
          caret: {
            charIndex: 0,
            lineIndex: 0
          },
          ltr: true
        },
        {
          type: constants.EDITOR_MOVE_CURSOR,
          payload: {
            lines: [
              {
                value: "1"
              },
              {
                value: "2"
              }
            ]
          }
        }
      )
    ).toMatchSnapshot();

    expect(
      reducer(
        {
          anchor: {
            charIndex: 2,
            lineIndex: 0
          },
          caret: {
            charIndex: 2,
            lineIndex: 0
          },
          ltr: true
        },
        {
          type: constants.EDITOR_MOVE_CURSOR,
          payload: {
            lines: [
              {
                value: "1"
              },
              {
                value: "2"
              }
            ]
          }
        }
      )
    ).toMatchSnapshot();
  });

  it("should handle EDITOR_MOVE_CURSOR right", () => {
    expect(
      reducer(
        {
          anchor: {
            charIndex: 0,
            lineIndex: 0
          },
          caret: {
            charIndex: 0,
            lineIndex: 0
          },
          ltr: true
        },
        {
          type: constants.EDITOR_MOVE_CURSOR,
          payload: {
            lines: [
              {
                value: "1"
              },
              {
                value: "2"
              }
            ]
          }
        }
      )
    ).toMatchSnapshot();
  });
});
