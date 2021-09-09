import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import List from './components/List/list';
import './style.css';
import AddNote from './components/AddNote/addNote';
import useToDoList from './hooks/useToDoList';

function App() {
  const { addToList, toDoList } = useToDoList();
  return (
    <div>
      <h2> To list project</h2>
      <AddNote addToList={addToList} />
      <List toDoList={toDoList} />
    </div>
  );
}

render(<App />, document.getElementById('root'));
