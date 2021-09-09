import React from 'react';
import './list.css';

const list = ({ toDoList = [] }: { toDoList: string[] }) => {
  return (
    <React.Fragment>
      {toDoList.length &&
        toDoList.map((a, i) => (
          <p key={i} className="note">
            {a}
          </p>
        ))}
    </React.Fragment>
  );
};

export default list;
