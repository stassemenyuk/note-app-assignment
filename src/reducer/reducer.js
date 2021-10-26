const reducer = (state = 0, action) => {
  let temp = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'ADD':
      action.element.id = temp.notesCounter;
      temp.notes = [...temp.notes, action.element];
      temp.notesCounter = temp.notes.length;
      return temp;
    case 'DELETE':
      temp.notes = [...temp.notes.slice(0, action.id), ...temp.notes.slice(action.id + 1)];
      temp.notes.forEach((item) => {
        if (item.id > action.id) {
          item.id--;
        }
      });
      temp.notesCounter = temp.notes.length;
      return temp;
    case 'EDIT':
      temp.notes[action.id].text = action.text;
      return temp;
    default:
      return state;
  }
};

export default reducer;
