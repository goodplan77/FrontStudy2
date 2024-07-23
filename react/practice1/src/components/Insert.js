// import { useState } from 'react';
// import {Table,Button} from 'reactstrap';

// function Insert(props){
//     let {list , setList} = props;
    
//     let [movie , setMovie] = useState({
//         bno : '',
//         title: '',
//         genre: '',
//         release_date: ''
//     })

//     function addMovie(){
//         if(movie.bno && movie.title && movie.genre && movie.release_date){
//             for(let i = 0 ; i<list.length ; i++){
//                 if(list[i].bno == movie.bno){
//                     alert('이미 등록된 id입니다');
//                     setMovie({
//                         ...movie,
//                         bno : ''
//                     })
//                     return;
//                 }
//             }
//             let newMovie = {
//                 ...movie
//             }
//             setList([...list , newMovie]);
//             setMovie({
//                 bno : '',
//                 title: '',
//                 genre: '',
//                 release_date: ''
//             })
//         }

//         else {
//             alert('모든 입력값을 채워주세요');
//         }

//     }

//     function onInputChange(e){
//         const {name,value} = e.target;
//         setMovie({...movie , [name] : value});
//       }

//     return(
//         <div className = 'outer'>
//             <h2>Create Movie</h2>
//             <Table>
//                 <tr>
//                     <th>ID</th>
//                     <td><input type="text" name="bno" value={movie.bno} placeholder="Input Movie ID" required onChange={onInputChange}></input></td>
//                 </tr>
//                 <tr>
//                     <th>제목</th>
//                     <td><input type="text" name="title" value={movie.title} placeholder="Input Movie title" required onChange={onInputChange}></input></td>
//                 </tr>
//                 <tr>
//                     <th>장르</th>
//                     <td><input type="text" name="genre" value={movie.genre} placeholder="Input Movie genre" required onChange={onInputChange}></input></td>
//                 </tr>
//                 <tr>
//                     <th>출시일</th>
//                     <td><input type="date" name="release_date" value={movie.release_date} onChange={onInputChange}></input></td>
//                 </tr>
//                 <tr>
//                     <td colSpan={2}><Button onClick = {addMovie}>Add Movie</Button></td>
//                 </tr>
//             </Table>
//         </div>
        
//     )
// }
// export default Insert;
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function Insert({list , setList}){

    let navi = useNavigate();

    let [movie , setMovie] = useState({
        bno : 0,
        title : '',
        genre : '',
        release_date : ''
    })

    function inputChange(e){
        let{name , value} = e.target;
        setMovie({
            ...movie,
            [name] : value
        })
    }

    function insertMovie(){
        if(!(movie.bno && movie.title && movie.genre && movie.release_date)){
            alert('모든 입력값은 필수입니다.');
            return;
        }

        let valid = list.find((value) => Number(value.bno) == movie.bno); // {} or null
        if(valid){
            alert('이미 사용중인 아이디 입니다.');
            return;
        }

        setList([...list , movie]);
        navi('/detail/' + movie.bno);
    }

    return (
        <div>
            <h1>Create Movie</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <td>
                        <input type="text" placeholder="Input Moive id" value={movie.bno}
                        name='bno'
                        onInput={inputChange}></input>
                    </td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td>
                        <input type="text" placeholder="Input Moive title" value={movie.title}
                        name='title'
                        onInput={inputChange}></input>
                    </td>
                </tr>
                <tr>
                    <th>장르</th>
                    <td>
                        <input type="text" placeholder="Input Moive genre" value={movie.genre}
                        name='genre'
                        onInput={inputChange}></input>
                    </td>
                </tr>
                <tr>
                    <th>출시일</th>
                    <td>
                        <input type="date" value = {movie.release_date}
                        name='release_date'
                        onInput={inputChange}></input>
                    </td>
                </tr>
            </table>
            <div>
                <button onClick={insertMovie}>Add Movie</button>
            </div>
        </div>
    )
}
export default Insert;