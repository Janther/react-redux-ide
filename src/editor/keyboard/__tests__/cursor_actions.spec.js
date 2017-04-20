import * as actions from '../actions'
import * as constants from '../constants'

describe('actions', () => {
  it('should create an action to add text', () => {
    const text = 'new line'
    const expectedAction = {
      type: constants.EDITOR_TEXT_ADDED,
      payload: {
        text
      }
    }
    expect(actions.addText(text)).toEqual(expectedAction)
  })
})
