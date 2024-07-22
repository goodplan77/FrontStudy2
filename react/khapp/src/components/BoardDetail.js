function BoardDetail(){
    return (
        <div className="outer">
            <h2>게시판 상세보기</h2>
            <table className="detail-table">
                <tr>
                    <th colSpan={4}>글제목1</th>
                </tr>
                <tr>
                    <th>작성자</th>
                    <td>admin</td>
                    <th>작성일</th>
                    <td>2024.07.22</td>
                </tr>
                <tr>
                    <th>글내용</th>
                    <td colSpan={3} style={{height:"200px"}}>글내용1</td>
                </tr>
            </table>
            <div className="btn-area">
                <button>수정</button>
            </div>
        </div>
    )
}

export default BoardDetail;