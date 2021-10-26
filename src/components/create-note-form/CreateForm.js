import React from 'react';
import { useState } from 'react';
import { addItem } from '../../actions/actions';
import { useDispatch } from 'react-redux';

import './CreateForm.css';

export default function CreateForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  function addNewNote(e) {
    e.preventDefault();
    if (title === '' || text === '') return;
    const Month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let date = `${new Date().getDate()} ${
      Month[new Date().getUTCMonth()]
    } ${new Date().getUTCFullYear()}`;
    dispatch(addItem({ title, text, date }));
    setTitle('');
    setText('');
  }

  return (
    <form action="" className="form" onSubmit={addNewNote}>
      <h2>Create new note</h2>
      <div className="form__title">
        <input
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
      </div>
      <div className="form__note">
        <input
          className="form-input"
          onChange={(e) => setText(e.target.value)}
          placeholder="Note"
          type="text"
          value={text}
        />
      </div>
      <div className="form__submit">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}
