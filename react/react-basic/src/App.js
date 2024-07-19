import './App.css';
import ListItems from './components/ListItems'
import {useState} from 'react';
import LifeCycle from './01_Lifecycle';

function App() {
  let b = 1;

  function fn(){
    console.log("zz");
  }

  function changeName(){
    setClassname('KH A CLASS');
    //classname = 'KH A CLASS';
    //console.log(classname);
  }

  //let classname = 'KH C CLASS';
  // let classname = useState('KH C CLASS'); // []
  let [classname , setClassname] = useState('KH C CLASS')

  let array = ['게시글 제목1','게시글 제목2','게시글 제목3'];

  return (
    <div className = "app" style={{backgroundColor:'black',color:'white'}}>
      {/* 주석 */}
      <br/>
      <h1>{classname}</h1>
      <ul>
          <ListItems array={array}></ListItems>
      </ul>
      <button onClick={changeName}>버튼</button>

      <LifeCycle></LifeCycle>
    </div>
  )
}

export default App;
