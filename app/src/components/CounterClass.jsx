import React, {setState} from "react";


class CounterClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count: 0
        }
        this.Decrement = this.Decrement.bind(this);
        this.Increment = this.Increment.bind(this);
        
    }

    Increment(){
        this.setState({count: this.state.count+1})        
        }
    Decrement(){
        this.setState({count: this.state.count-1})  
      }


    render(){
        return(
                <div>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.Decrement}>Decrement</button>
                    <button onClick={this.Increment}>Increment</button>
                </div>
        )
    }
    
}

export default CounterClass;