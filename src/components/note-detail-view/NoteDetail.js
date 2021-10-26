import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { editItem } from '../../actions/actions';

import './NoteDetail.css';

function NoteDetail({ match }) {
  const dispatch = useDispatch();
  const noteId = match.params.id;
  const { title, text, date, id } = useSelector((state) => state.notes[noteId]);
  const [copyText, setCopyText] = useState('');
  const [newText, setNewText] = useState('');
  const [formVisibility, setFormVisibility] = useState(false);

  let classNames = 'new__text';
  if (!formVisibility) classNames += ' hide';

  function changeText(e) {
    e.preventDefault();
    dispatch(editItem(id, newText));
    setNewText('');
    setFormVisibility(false);
  }

  return (
    <div className="note-detail-view">
      <div className="note-detail__content">
        <div className="note-detail__title">{title}</div>
        <div className="note-detail__text">{text}</div>
      </div>
      <div className="note-detail__tools">
        <button onClick={() => setFormVisibility(!formVisibility)}>Edit note</button>
        <CopyToClipboard text={text}>
          <button
            onClick={() => {
              setCopyText('Copied');
              setTimeout(() => setCopyText(''), 2000);
            }}>
            Copy to clipboard
          </button>
        </CopyToClipboard>
        <div className="copy__text">{copyText}</div>
        <button>Share</button>
      </div>
      <div className={classNames}>
        <h3>New Text:</h3>
        <form action="" onSubmit={changeText}>
          <input
            type="text"
            className="new-text__input"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="new-text__submit">Submit</button>
        </form>
      </div>
      <div className="note-detail__date">{date}</div>
    </div>
  );
}

export default withRouter(NoteDetail);
