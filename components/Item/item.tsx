import React from 'react';

const Item = ({ itemData, deleteNote }) => {
  return (
    <React.Fragment>
      <div key={itemData.id} className="note">
        <span onClick={() => deleteNote(itemData.id)}>x</span>
        {itemData.content}
      </div>
    </React.Fragment>
  );
};

export default Item;
