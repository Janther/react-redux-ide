import { createSelector } from 'reselect'

const cursorSelector = state => state.editor.cursor;

// ratioForCharacter: (character) ->
//   if isKoreanCharacter(character)
//     @getKoreanCharWidth() / @getDefaultCharWidth()
//   else if isHalfWidthCharacter(character)
//     @getHalfWidthCharWidth() / @getDefaultCharWidth()
//   else if isDoubleWidthCharacter(character)
//     @getDoubleWidthCharWidth() / @getDefaultCharWidth()
//   else
//     1

// DummyLineNode = document.createElement('div')
// DummyLineNode.className = 'line'
// DummyLineNode.style.position = 'absolute'
// DummyLineNode.style.visibility = 'hidden'
// DummyLineNode.appendChild(document.createElement('span'))
// DummyLineNode.appendChild(document.createElement('span'))
// DummyLineNode.appendChild(document.createElement('span'))
// DummyLineNode.appendChild(document.createElement('span'))
// DummyLineNode.children[0].textContent = 'x'
// DummyLineNode.children[1].textContent = '我'
// DummyLineNode.children[2].textContent = 'ﾊ'
// DummyLineNode.children[3].textContent = '세'

export const cursorX = createSelector(
  cursorSelector,
  cursor => Math.floor(cursor.position * 8.416671752929688)
)

export const cursorY = createSelector(
  cursorSelector,
  cursor => cursor.line * 21
)
