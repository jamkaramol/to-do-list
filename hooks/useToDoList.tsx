import React, { useState } from 'react';

type toDoHook = {
  toDoList: string[];
  addToList: (text: string) => void;
};

const useToDoList = (): toDoHook => {
  const [toDoList, setList] = useState([' Example note']);

  const addToList = item => {
    if (item) {
      toDoList.push(item);
      console.log(toDoList);
      setList([...toDoList]);
    }
  };

  return { toDoList, addToList };
};

export default useToDoList;
