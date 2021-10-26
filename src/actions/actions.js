export const addItem = (element) => ({ type: 'ADD', element });
export const deleteItem = (id) => ({ type: 'DELETE', id });
export const editItem = (id, text) => ({ type: 'EDIT', id, text });
