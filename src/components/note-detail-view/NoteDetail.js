import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';

function NoteDetail({ match }) {
  const id = match.params.id;
  const { title, text, date } = useSelector((state) => state.notes[id]);
  return (
    <div>
      {title}
      {text}
      {date}
    </div>
  );
}

export default withRouter(NoteDetail);
