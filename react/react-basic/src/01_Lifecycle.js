import { Component } from "react";

class LifeCycle extends Component{

    componentDidMount(){
        console.log("마운트 함수 호출");
        this.setState({temp : true});
    }

    shouldComponentUpdate(props,state){
        console.log('shouldComponentUpdate 함수 호출');
        return state.temp;
    }

    constructor(props){
        super(props);
        this.state = {};
        console.log('생성자 함수 호출');
    }

    render(){
        console.log('render 함수 호출');
        return (
            <h2>[render] 함수 호출</h2>
        )
    }
}
export default LifeCycle;