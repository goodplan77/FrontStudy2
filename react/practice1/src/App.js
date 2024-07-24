// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css'
// import {Thead} from './components/ListItems';
// import {ListItems} from './components/ListItems';

// function App() {
//   let header = 'KH-Movies'
//   let thList = ['글번호','제목','장르','개봉날짜','삭제'];
//   let trList = [
//     {no:1,title:"Movie 1",genre:"Drama",date:'2022-01-01'},
//     {no:2,title:"Movie 2",genre:"Action",date:'2022-02-01'},
//     {no:3,title:"Movie 3",genre:"Comedy",date:'2022-03-01'}
//   ];

//   return (
//     <div className="App">
//       <h1>{header}</h1>
//       <table>
//         <thead>
//           <Thead array={thList}></Thead>
//         </thead>
//         <tbody>
//           <ListItems array={trList}></ListItems>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import List from './components/List';
import Insert from './components/Insert';
import Detail from './components/Detail';
import Update from './components/Update';
import { useState } from 'react';
import { Route, Routes, Link} from 'react-router-dom';

function App() {

  let [list , setList] = useState([{
    bno : 1,
    title: 'Movie 1',
    genre: 'Drama',
    release_date: '2022-01-1'
  },{
    bno : 2,
    title: 'Movie 2',
    genre: 'Action',
    release_date: '2022-02-1'
  },{
    bno : 3,
    title: 'Movie 3',
    genre: 'Comedy',
    release_date: '2022-03-1'
  }]);

  let [movieDetail , setMovieDetail] = useState({});

  let props = {
    list,
    setList,
    movieDetail,
    setMovieDetail
  }

    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<List {...props}/>}/>
          <Route path='/list' element={<List {...props}/>}/>
          <Route path='/insert' element={<Insert {...props}/>}/>
          <Route path='/detail/:boardNo' element={<Detail {...props}/>}/>
          <Route path='/update' element={<Update {...props}/>}/>
        </Routes>
      </div>
    );
  }

  export default App;