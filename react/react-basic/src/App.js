import './App.css';
import ListItems from './components/ListItems'
import {useState} from 'react';
import LifeCycle from './01_Lifecycle';
import Modal from './components/Modal'

function App() {
  let b = 1;

  function fn(){
    console.log("zz");
  }

  function changeName(){
    setClassname('KH A CLASS');
    // classname = 'KH A CLASS';
    // console.log(classname);
  }

  // let classname = 'KH C CLASS';
  // let classname = useState('KH C CLASS'); // []
  let [classname , setClassname] = useState('KH C CLASS')

  // let array = ['게시글 제목1','게시글 제목2','게시글 제목3'];
  let [post, setPost] = useState([{
    title : '게시글 제목 1',
    postDate : '12월 25일',
    content : '1번 글내용',
    like : 0
  },{
    title : '게시글 제목 2',
    postDate : '12월 26일',
    content : '2번 글내용',
    like : 0
  },{
    title : '게시글 제목 3',
    postDate : '12월 27일',
    content : '3번 글내용',
    like : 0
  }]);

  let [board , setBoard] = useState({
    title : '',
    content : '',
    postDate : '',
    like : 0
  });
  
  /*
    let [input , setInput] = useState('');
    let [content , setContent] = useState('');
  */

    // ui 상태 관리용 state
    let [modal , setModal] = useState(false);
    let [selectBoard , setSelectBoard] = useState(post[0]);

  function savePost(){
    // if(!input || !content) return; // 빈글자이면 바로 반환하기

    // let newPost = {
    //   title : input ,
    //   content : content ,
    //   postDate : new Date().toLocaleDateString()
    // }

    // // post.push(newPost);
    // setPost([...post , newPost]);
    // // 기존 post 의 rest 전개 + 새로운 객체를 포함한 새로운 배열 추가
    // setInput('');
    // setContent('');

    if(board.title && board.content){
      let newPost = {
        ...board,
        postDate : new Date().toLocaleDateString()
      }
      setPost([...post , newPost]);
    }
  }

  function onInputChange(e){
    const {name,value} = e.target;
    setBoard({...board , [name] : value});
  }

  // 게시글 내용이 포함되도록 수정,
  // 게시글 등록할때도 게시글 내용을 함께 추가 할 수 있도록 수정
  // 1) 게시글 내용 태그 생성
  // 2) 게시글 내용 관리 state 생성
  // 3) 게시글 등록시 글제목 , 내용을 묶어서 객체로 생성

  return (
    <div className = "App">
      {/* 주석 */}
      <br/>
      <h1>{classname}</h1>
      {/* <ul>
          <ListItems array={array}></ListItems>
      </ul> */}
      {
        post.map(function(value,index){
          return (
            <div key={index} className="list">
              <h4 onClick = {() => {
                setModal(!modal);
                setSelectBoard(value);
                }}>{value.title} <span onClick = {(e) => {
                  e.stopPropagation(); // 이벤트 전파 방지
                  // like 값 증가
                  let selectedPost = post[index];
                  selectedPost.like += 1;
                  setPost([...post]);
                }}>❤</span>{value.like}</h4>
              <p>{value.postDate}</p>
              <br/>
            </div>
          )
        })
      }

      <input name='title' value={board.title} onChange={onInputChange}/>

      <br/>

      <textarea name='content' value={board.content} onChange={onInputChange}/>
      
      <br/>

      <button onClick={savePost}>글등록</button>

      {/* <LifeCycle></LifeCycle> */}

      {
        //modal ? <Modal/> : null
        modal && <Modal board = {selectBoard}/>
      }

    </div>
  )
}

export default App;
