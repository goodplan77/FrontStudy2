import {Table,Button} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
function List(props){
    
    const navi = useNavigate();
    let {list , setList} = props;

    function deleteMovie(bno){
        // let index = 0;
        // for(let i = 0 ; i <list.length ; i++){
        //     if(list[i].bno == bno){
        //         index = i;
        //         break;
        //     }
        // }
        // list.splice(index,1);
        // // setList(list); // 얕은복사
        // setList([...list]);
        // // console.log(list);

        let filteredArr = list.filter((value) =>
            value.bno !== bno
        )

        setList(filteredArr);
    }

    return <div id='movie-area'>
        <h1>KH1-Movies</h1>
        <Button onClick = {() => {navi('/insert');}}>게시글 추가</Button>
        <Table>
            <thead>
                <tr>
                    <th>글번호</th>
                    <th>제목</th>
                    <th>장르</th>
                    <th>개봉날짜</th>
                    <th>상세보기</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map( (value , index) => (
                        <tr key = {index} onClick = {() =>{
                            navi('/detail/' + value.bno);
                        }}>
                            <td>{value.bno}</td>
                            <td>{value.title}</td>
                            <td>{value.genre}</td>
                            <td>{value.release_date}</td>
                            <td>
                                <Button onClick = {(e) => {
                                    e.stopPropagation();
                                    deleteMovie(value.bno);
                                    }}>Delete</Button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </div>
}
export default List;