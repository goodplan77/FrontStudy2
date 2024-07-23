import './App.css';
import BoardInsert from './components/BoardInsert';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';
import BoardUpdate from './components/BoardUpdate';

import data from './data';
import {useState} from 'react'
import { Route, Routes, Link} from 'react-router-dom';
import Outer from './components/Outer';

function App() {

  // let [layout , setLayout] = useState(0);
  // 0 : list
  // 1 : insert
  // 2 : detail

  let [boardList , setBoardList] = useState(data);
  let [boardDetail , setBoardDetail] = useState({});

  let props = {
    boardList,
    setBoardList,
    boardDetail,
    setBoardDetail
  }

  return (
    <div className="App">
      <div className = 'header'>
        <h3 style={{fontWeight : 'bolder'}}>KH C CLASS</h3>
      </div>
      <div className = 'nav'>
        <Link to="/list">일반게시판</Link>
        <Link to="/insert">게시글등록</Link>
      </div>
      {
        // layout == 0 ? <BoardList boardList={boardList} setLayout={setLayout} setBoardDetail={setBoardDetail}/> :
        // layout == 1 ? <BoardInsert boardList={boardList} setBoardList={setBoardList}/> : 
        // <BoardDetail boardDetail={boardDetail}/>

        // /list 로 요청이 들어오는 경우
        <Routes>
          <Route path='/' element={<BoardList {...props}/>}/>
          {/* <Route path='/board'></Route> */}
          <Route path='/' element={<Outer/>}>
            <Route path='list' element={<BoardList {...props}/>}/>
            <Route path='insert' element={<BoardInsert {...props}/>}/>
            <Route path='detail/:boardNo' element={<BoardDetail {...props}/>}/>
            <Route path='update' element={<BoardUpdate {...props}/>}/>
          </Route>
          
          <Route path='*' element={
            <div>
              <h1 style = {{color:'red'}}>존재하지 않는 페이지 입니다.</h1>
              <Link to ="/">메인으로</Link>
            </div>
          } ></Route>
        </Routes>
      }

    </div>
  );
}

export default App;
