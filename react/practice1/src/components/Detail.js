import {Link, useParams} from 'react-router-dom';
function Detail({list}){
    
    const {boardNo} = useParams();
    const detail = list.find((value) => value.bno == Number(boardNo));

    return (
        <div>
            <table>
                <tr>ID</tr>
                <th>{detail.bno}</th>
                <tr>제목</tr>
                <th>{detail.title}</th>
                <tr>장르</tr>
                <th>{detail.genre}</th>
                <tr>출시일</tr>
                <th>{detail.release_date}</th>
            </table>
            <div className="btn-area">
                <Link to = '/update'>수정</Link>
            </div>
            <div className="btn-area">
                <Link to = '/list'>목록으로</Link>
            </div>
        </div>
    )
}
export default Detail;