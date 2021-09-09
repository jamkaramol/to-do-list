import React from 'react';
import './item.css';

const Item = ({ itemData, deleteNote }) => {
  return (
    <React.Fragment>
      <div key={itemData.id} className="note">
        <div className="content">{itemData.content}</div>
        <div className="actions">
          <div className="delete-note" onClick={() => deleteNote(itemData.id)}>
            x
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Item;
