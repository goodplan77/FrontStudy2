import useInput from '../useInput';
import { useNavigate } from 'react-router-dom';

function BoardUpdate({boardDetail , setBoardDetail , setBoardList , boardList}){
    // 수정하기 완료후 내가 수정한 게시글 상세보기로 이동.
    // 등록기능도 똑같이 등록 완료후 게시글 상세보기 화면으로 이동.
    const navi = useNavigate();

    let [board , setBoard , onInputChange] = useInput(boardDetail);

    const updateBoard = () => {
        // 입력값 검사
        if(!(board.글제목 && board.글내용 && board.작성자)){
            alert('필수입력값입니다.');
            return;
        }

        for (let b of boardList){
            if(b.글번호 === board.글번호){
                b.글제목 = board.글제목;
                b.글내용 = board.글내용;
                b.작성자 = board.작성자;
                b.작성일 = new Date().toLocaleDateString();
            }
        }

        // const mappedList = boardList.map((value) => {
        //     if(value.글번호 == board.글번호){
        //         board.작성일 = '임시';
        //         return board;
        //     }
        //     return value;
        // })

        // setBoardList(mappedList);
        // setBoardDetail(board);
        setBoardList([...boardList]);
        navi('/detail/' + board.글번호);
    }

    return (
        <>
            <h2>게시판 수정</h2>
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
                    <th colSpan={4}><button onClick={updateBoard}>수정</button></th>
                </tr>
            </table>
        </>
    )
}

export default BoardUpdate;