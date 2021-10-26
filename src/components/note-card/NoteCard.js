import React from 'react';

import './NoteCard.css';

export default function NoteCard({ title, text, date }) {
  return (
    <div className="note-card">
      <div className="note__title">{title}</div>
      <div className="note__text">
        {text}
        <div className="note__date">{date}</div>
      </div>
      <div className="note__tools"></div>
    </div>
  );
}
