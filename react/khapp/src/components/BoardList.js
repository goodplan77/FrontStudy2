function BoardList(props){
    let {boardList} = props;
    return (
        <div className="outer">
            <h2>일반게시판</h2>
            <table className = 'list-table'>
                <thead>
                    <tr>
                        <th style = {{width:"10%"}}>번호</th>
                        <th style = {{width:"40%"}}>제목</th>
                        <th style = {{width:"20%"}}>작성자</th>
                        <th style = {{width:"20%"}}>작성일</th>
                        <th style = {{width:"10%"}}>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boardList.map((value) => (
                            <tr key={value.글번호}>
                                <td>{value.글번호}</td>
                                <td>{value.글제목}</td>
                                <td>{value.작성자}</td>
                                <td>{value.작성일}</td>
                                <td><button>삭제</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BoardList;