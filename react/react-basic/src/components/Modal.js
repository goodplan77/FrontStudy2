function Modal(props){
    let {board} = props;
    return(
        <div className='modal'>
            <h4>{board.title}</h4>
            <p>{board.postDate}</p>
            <p>{board.content}</p>
            <button>글삭제</button>
        </div>
    )
}
export default Modal;