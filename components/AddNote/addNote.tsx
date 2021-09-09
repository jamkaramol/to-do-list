import React, { useState } from 'react';
import './addNote.css';

const addNote = ({ addToList }: { addToList: (note: string) => void }) => {
  const [note, setNote] = useState('type here');

  const addNoteHandler = () => {
    addToList(note);
    setNote('');
  };

  return (
    <React.Fragment>
      <div className="box">
        <button onClick={addNoteHandler}>Add Note</button>
        <textarea value={note} onChange={e => setNote(e.target.value)} />
      </div>
    </React.Fragment>
  );
};

export default addNote;
