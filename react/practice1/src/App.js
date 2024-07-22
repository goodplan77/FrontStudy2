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
import { useState } from 'react';

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

    return (
      <div className="App">
        <List list={list} setList={setList} ></List>
        <Insert list={list} setList={setList}></Insert>
      </div>
    );
  }

  export default App;