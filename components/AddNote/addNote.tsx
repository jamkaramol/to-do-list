import React, { useState } from 'react';
import './addNote.css';
import Button from '@material-ui/core/Button';

const addNote = ({ addToList }: { addToList: (note: string) => void }) => {
  const [note, setNote] = useState('');

  const addNoteHandler = () => {
    addToList(note);
    setNote('');
  };

  return (
    <React.Fragment>
      <div className="box">
        <Button
          variant="contained"
          className="add-note"
          disabled={!note.length}
          onClick={addNoteHandler}
        >
          +
        </Button>
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
