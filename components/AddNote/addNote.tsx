import React, { useState } from 'react';
import './addNote.css';

const addNote = ({ addToList }: { addToList: (note: string) => void }) => {
  const [note, setNote] = useState('');

  const addNoteHandler = () => {
    addToList(note);
    setNote('');
  };

  return (
    <React.Fragment>
      <div className="box">
        <button
          className="add-note"
          disabled={!note.length}
          onClick={addNoteHandler}
        >
          +
        </button>
        <textarea
          placeholder="Please type to add"
          className="note-area"
          value={note}
          onChange={e => setNote(e.target.value)}
        />
      </div>
    </React.Fragment>
  );
};

export default addNote;
