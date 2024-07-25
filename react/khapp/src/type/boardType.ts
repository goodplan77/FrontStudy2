export interface Board {
    글번호 : number,
    글제목 : string,
    글내용 : string,
    작성자 : string,
    작성일 : string
}
export type SetBoardList = (list:Board[]) => void;
export type SetBoardDetail = (b:Board) => void;

export interface Props{
    boardList : Board[],
    setBoardList : SetBoardList,
    boardDetail : Board,
    setBoardDetail : SetBoardDetail
}