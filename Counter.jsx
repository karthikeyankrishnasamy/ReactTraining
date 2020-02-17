import React,{Component} from 'react'

class OddCounter extends Component{

    componentWillUnmount()
    {
        console.log("OddCounter-componentWillUnmount Method Invoked")
    }

    render()
    {
        console.log("OddCounter-Render Method Invoked")
        return(<h1>I'm Odd Number....</h1>)
    }
}


class EvenCounter extends Component{

    componentWillUnmount()
    {
        console.log("EvenCounter-componentWillUnmount Method Invoked")
    }
    render()
    {
        console.log("EvenCounter-Render Method Invoked")
        return(<h1>I'm Even Number....</h1>)
    }
}

class Counter extends Component
{
constructor(props) {
  super(props);
  console.log("Counter-Constructor Invoked")
  
}
componentWillMount()
{
    console.log("Counter-ComponentWillMount Method Invoked")
}

componentDidMount()
{
    console.log("Counter-ComponentDidMount Method Invoked")
}

componentWillReceiveProps(nextProps)
{
    console.log("Counter-ComponentWillReceiveProps Method Invoked")
}
render()
{
     console.log("Counter-Render Method Invoked")
    return(

        <React.Fragment>
        <h1>Welcome to ReactJS Training</h1>
        <div className='r-counter'>Counter: {this.props.counter}</div>
        <button className='r-button' onClick={this.props.onIncrementCounter}>+</button>
        <button className='r-button' onClick={this.props.onDecrementCounter}>-</button>
        <button className='r-button' onClick={this.props.onResetCounter}>Reset</button>
        {this.props.counter % 2 === 0 ? <EvenCounter/> : <OddCounter/>}
        </React.Fragment>
    );

}

}

Counter.defaultProps = {
  counter: 0,

};

export default Counter;