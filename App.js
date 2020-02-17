import React, { Component } from 'react';
import Counter from './Counter'


class App extends Component {

    constructor(props) {
        super(props);
        console.log("App-Constructor Invoked")
        this.state = { counter: this.props.counter };
        this.onIncrementCounter = this.onIncrementCounter.bind(this);
        this.onDecrementCounter = this.onDecrementCounter.bind(this);
        this.onResetCounter=this.onResetCounter.bind(this);
      }

onIncrementCounter()
{
this.setState({counter:this.state.counter+1});
}

onDecrementCounter()
{
this.setState({counter:this.state.counter-1});
}

onResetCounter()
{
this.setState({counter:0});
}

shouldComponentUpdate(nextProps, nextState)
{
    console.log("App-shouldComponentUpdate Method Invoked");
   
    console.log("Before Change : ", this.state.counter) 
    console.log("After Change : ", nextState.counter) 
    return true;
}

componentWillMount()
{
    console.log("App-ComponentWillMount Method Invoked")
}

componentDidMount()
{
    console.log("App-ComponentDidMount Method Invoked")
}

    render() {
        console.log("App-Render Method Invoked")
        return ( <React.Fragment>
                    <Counter  counter={this.state.counter}
                              onIncrementCounter={this.onIncrementCounter}
                              onDecrementCounter={this.onDecrementCounter}
                              onResetCounter={this.onResetCounter}
                    />
                 </React.Fragment> 
        );
    }
}

App.defaultProps = {
    counter: 0,
  
  };

export default App;