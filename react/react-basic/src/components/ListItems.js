function ListItems({array}){
    console.log(array);
    return (
        // <> : React.Fragment
        <>
            { // 값만 들어가야함
                array.map((value) =>{
                    return (
                        <li>{value}</li>
                    )
                })
            }
        </>
    )
}
// export ListItems;
export default ListItems;