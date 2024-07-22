import './App.css';
import BoardInsert from './components/BoardInsert';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';
import data from './data';
import {useState} from 'react'

function App() {

  let [layout , setLayout] = useState(0);
  // 0 : list
  // 1 : insert
  // 2 : detail

  let [boardList , setBoardList] = useState(data);

  return (
    <div className="App">
      <div className = 'header'>
        <h3 style={{fontWeight : 'bolder'}}>KH C CLASS</h3>
      </div>
      <div className = 'nav'>
        <button>일반게시판</button>
        <button>게시글등록</button>
      </div>
      {
        layout == 0 ? <BoardList boardList={boardList}/> :
        layout == 1 ? <BoardInsert/> : <BoardDetail/>
      }

    </div>
  );
}

export default App;
