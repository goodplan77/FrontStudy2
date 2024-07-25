import { Props } from '../type/boardType';
import useInput from '../useInput';
import { useNavigate } from 'react-router-dom';

function BoardInsert(props:Props){
    let {boardList , setBoardList} = props

    const navi = useNavigate();

    let [board , setBoard , onInputChange] = useInput({
        글번호 : '',
        글제목 : '',
        글내용 : '',
        작성자 : '',
        작성일 : ''
    });

    function boardInsert(){
        // 입력값 검사
        if(!(board.글제목 && board.글내용 && board.작성자)){
            alert('필수입력값입니다.');
            return;
        }

        let newBoard = {
            ...board,
            글번호 : Math.max(...boardList.map(value => value.글번호)) + 1,
            작성일 : new Date().toLocaleDateString()
        }
        setBoardList([...boardList , newBoard]);
        // setBoard({
        //     글번호 : '',
        //     글제목 : '',
        //     글내용 : '',
        //     작성자 : '',
        //     작성일 : ''
        // })
        navi('/detail/' + newBoard.글번호);
    }

    return (
        <>
            <h2>게시판 등록</h2>
            <table className="enroll-table">
                <tr>
                    <th>제목</th>
                    <td colSpan={3}>
                        <input type="text" name="글제목" value={board.글제목} onInput={onInputChange}></input>
                    </td>
                </tr>
                <tr>
                    <th>작성자</th>
                    <td colSpan={3}>
                        <input type="text" name="작성자" value={board.작성자} onInput={onInputChange}></input>
                    </td>
                </tr>
                <tr>
                    <th>글내용</th>
                    <td colSpan={3} style ={{height:'200px'}}>
                        <textarea name="글내용" value={board.글내용} onInput={onInputChange}></textarea>
                    </td>
                </tr>
                <tr>
                    <th colSpan={4}><button onClick={() => {
                                boardInsert();
                                }}>등록</button></th>
                </tr>
            </table>
        </>
    )
}

export default BoardInsert;