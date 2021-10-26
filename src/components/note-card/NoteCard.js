import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../actions/actions';

import './NoteCard.css';

export default function NoteCard({ title, text, date, id }) {
  const dispatch = useDispatch();
  return (
    <div className="note-card">
      <div className="note__title">
        {title}
        <div className="delete-btn" onClick={() => dispatch(deleteItem(id))}>
          X
        </div>
      </div>
      <div className="note__text">
        {text}
        <div className="note__date">{date}</div>
      </div>
      <div className="note__tools">
        <Link to={`/${id}`}>View more</Link>
      </div>
    </div>
  );
}
