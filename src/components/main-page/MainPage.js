import React from 'react';
import CreateForm from '../create-note-form/CreateForm';
import NotesBlock from '../notes-block/NotesBlock';

export default function MainPage() {
  return (
    <div>
      <CreateForm />
      <NotesBlock />
    </div>
  );
}
