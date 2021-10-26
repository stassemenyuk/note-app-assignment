import React from 'react';
import NoteCard from '../note-card/NoteCard';
import { useSelector } from 'react-redux';

import './NotesBlock.css';

export default function NotesBlock() {
  const notes = useSelector((state) => state.notes);
  const notesBlocks = notes.map(({ title, text, date, id }) => {
    return <NoteCard key={id} title={title} text={text} date={date} id={id} />;
  });
  return <div className="notes-block">{notesBlocks}</div>;
}
