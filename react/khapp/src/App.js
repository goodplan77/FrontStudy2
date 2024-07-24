import './App.css';
import BoardInsert from './components/BoardInsert';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';
import BoardUpdate from './components/BoardUpdate';

import data from './data';
import { useState , useEffect , createContext } from 'react'
import { Route, Routes, Link} from 'react-router-dom';
import Outer from './components/Outer';
import axios from 'axios';

export let Context = createContext(); // context == state 보관소


function App() {

  // let [layout , setLayout] = useState(0);
  // 0 : list
  // 1 : insert
  // 2 : detail

  // useEffect : 컴포넌트가 랜더링될 때를 감지하여 랜더링된 이후 실행할 코드를
  // 기술하는 함수. 컴포넌트에는 LifeCycle 이라는 개념이 있는데 ,
  // 컴포넌트가 처음 로딩되는 시기를 mount ,
  // state에 의해 컴포넌트가 변경된 내용으로 재 랜더링 될때는 update , 
  // 컴포넌트가 소멸할때는 unmount 라고 부른다.
  
  // useEffect(() => {
  //   랜더링이 완료된 후 실행할 코드.(mount/update)
  //   reactdom에 이벤트부여
  //   서버로 비동기요청을 보내는 부분
  //   return () => {} // 컴포넌트가 소멸할때 실행할 코드(unmount)
  // },[]) // 의존성 목록. 의존성목록에 담겨 있는 데이터가 변경될때마다 함께 update 문 실행
  
  // useEffect(() => {
  //   console.log('게시글 배열' , boardList);
  // },[]);

  // 의존성 목록
  // [] 빈배열 : 최초 1번만 실행
  // 아예 없음 : 계속해서 실행?

  let [boardList , setBoardList] = useState([]);
  /*
    axios
    .get/post('url경로' , {전달할데이터})
    .then((result) => {
      // 요청 성공시 실행할 코드
      })
    .catch((error) => {
      // 에러 발생시 실행할 코드
      })
  */
  useEffect(() => {
    axios.get('/data/data.json',{data:'asdf'})
        .then(result => {
          console.log(result.data);
          setBoardList(result.data);
        })
        .catch(error => {
          console.log(error);
        })
  },[])

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
        <Context.Provider value={{...props}}>
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
        </Context.Provider>
      }

    </div>
  );
}

export default App;
