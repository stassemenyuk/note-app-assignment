import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './NoteDetail.css';

function NoteDetail({ match }) {
  const id = match.params.id;
  const { title, text, date } = useSelector((state) => state.notes[id]);
  const [copyText, setCopyText] = useState('');

  return (
    <div className="note-detail-view">
      <div className="note-detail__content">
        <div className="note-detail__title">{title}</div>
        <div className="note-detail__text">
          {/* <input type="text" value={text} /> */}
          {text}
        </div>
      </div>
      <div className="note-detail__tools">
        <button>Edit note</button>
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
        <div className="note-detail__date">{date}</div>
      </div>
    </div>
  );
}

export default withRouter(NoteDetail);
