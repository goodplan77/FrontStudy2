import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function Update({list , setList , movieDetail , setMovieDetail}){
    
    let navi = useNavigate();

    let [movie , setMovie] = useState(movieDetail);

    let updateChange = (e) =>{
        let{name , value} = e.target;
        setMovie({
            ...movie,
            [name] : value
        })
    }

    function updateMovie(){
        if(!(movie.title && movie.genre && movie.release_date)){
            alert('모든 입력값은 필수입니다.');
            return;
        }

        for (let b of list){
            if(b.bno === movie.bno){
                b.title = movie.title;
                b.genre = movie.genre;
                b.release_date = new Date().toLocaleDateString();
            }
        }
        
        setList([...list]);
        navi('/detail/' + movie.bno);
    }

    return (
        <div>
            <h1>Update Movie</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <td>
                        <input type="text" placeholder="Input Moive id" value={movie.bno}
                        name='bno' readOnly></input>
                    </td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td>
                        <input type="text" placeholder="Input Moive title" value={movie.title}
                        name='title'
                        onInput={updateChange}></input>
                    </td>
                </tr>
                <tr>
                    <th>장르</th>
                    <td>
                        <input type="text" placeholder="Input Moive genre" value={movie.genre}
                        name='genre'
                        onInput={updateChange}></input>
                    </td>
                </tr>
                <tr>
                    <th>출시일</th>
                    <td>
                        <input type="date" value = {movie.release_date}
                        name='release_date'
                        onInput={updateChange}></input>
                    </td>
                </tr>
            </table>
            <div>
                <button onClick={updateMovie}>Update Movie</button>
            </div>
        </div>
    )
}
export default Update;