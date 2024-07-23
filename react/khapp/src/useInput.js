import {useState} from 'react'
function useInput(init){
    let [obj , setObj] = useState(init);

    let onInputChange = (e) => {
        let {name , value} = e.target;
        setObj({
            ...obj,
            [name] : value
        })
    }

    return [obj , setObj , onInputChange];
}
export default useInput;