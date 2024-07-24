import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Counter/>
      <TodoList/>
    </div>
  );
}

export default App;
