import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type ToDoItem = {
  content: string;
  id: string;
};

type toDoHook = {
  toDoList: ToDoItem[];
  addToList: (text: string) => void;
  deleteNote: (id: string) => void;
};

const exampleList = [
  { content: 'Example abc', id: uuidv4() },
  { content: 'Example test5', id: uuidv4() },
  { content: 'Example note', id: uuidv4() },
  { content: 'Example test', id: uuidv4() },
  { content: 'Example --0--0--0-', id: uuidv4() }
];

const useToDoList = (): toDoHook => {
  const [toDoList, setList] = useState(exampleList);

  const addToList = item => {
    if (item) {
      const itemToPush = { content: item, id: uuidv4() };
      toDoList.push(itemToPush);
      setList([...toDoList]);
    }
  };

  const deleteNote = deleteId => {
    const index = toDoList.findIndex(({ id }) => id === deleteId);
    console.log(index);
    if (index > -1) {
      toDoList.splice(index, 1);
      setList([...toDoList]);
    }
  };

  return { toDoList, addToList, deleteNote };
};

export default useToDoList;
