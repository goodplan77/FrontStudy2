import {useState} from 'react';
function Thead({array}){
    return (
        <tr>
            {
                array.map((value) =>{
                    return (
                        <th>{value}</th>
                    )
                })
                
            }
        </tr>
    )
}
function ListItems({array}){

    function deleteList(temp){
    }

    let [temparray , setTemparray] = useState(array);

    return (
        <>
            {
                array.map((value) =>{
                    return (
                        <tr>
                            <td>{value.no}</td>
                            <td>{value.title}</td>
                            <td>{value.genre}</td>
                            <td>{value.date}</td>
                            <td><button onClick={() => deleteList(value)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </>
    )

}
export {Thead};
export {ListItems};