import React from 'react';
import './list.css';
import Item from '../Item/item';

type List = {
  toDoList: Object[];
  deleteNote: (id: string) => void;
};

const list = ({ toDoList, deleteNote }: List) => {
  return (
    <React.Fragment>
      <div className="list-view">
        {toDoList.length > 0 &&
          toDoList.map(l => <Item itemData={l} deleteNote={deleteNote} />)}
      </div>
    </React.Fragment>
  );
};

export default list;
