import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';

import './NoteDetail.css';

function NoteDetail({ match }) {
  const id = match.params.id;
  const { title, text, date } = useSelector((state) => state.notes[id]);
  return (
    <div className="note-detail-view">
      <div className="note-detail__content">
        <div className="note-detail__title">{title}</div>
        <div className="note-detail__text">{text}</div>
        <div className="note-detail__date">{date}</div>
      </div>
      <div className="note-detail__tools">
        <button>Edit note</button>
        <button>Copy to clipboard</button>
        <button>Share</button>
      </div>
    </div>
  );
}

export default withRouter(NoteDetail);
