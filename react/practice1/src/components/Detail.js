import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Detail({list}){

    let navi = useNavigate();
    
    const {boardNo} = useParams();
    const movieDetail = list.find((value) => value.bno == Number(boardNo));

    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <td>
                        <p>{movieDetail.bno}</p>
                    </td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td>
                        <p>{movieDetail.title}</p>
                    </td>
                </tr>
                <tr>
                    <th>장르</th>
                    <td>
                        <p>{movieDetail.genre}</p>
                    </td>
                </tr>
                <tr>
                    <th>출시일</th>
                    <td>
                        <p>{movieDetail.release_date}</p>
                    </td>
                </tr>
            </table>
            <button onClick = {() => {navi('/update');}}>게시글 수정</button>
            <button onClick = {() => {navi('/list');}}>목록으로</button>
        </div>
    )
}
export default Detail;