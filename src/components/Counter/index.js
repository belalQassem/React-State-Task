import React, { Component } from 'react'
import './style.css'
export default class Counter extends Component {

    state = {
        count :0,
        step: parseInt(this.props.step)
    }

    increment = () => {
        this.setState(prevState => ({count : prevState.count + this.state.step}));
        
    }

    decrement = () => {
        if(this.state.count > 0){
            this.setState(prevState => ({count : prevState.count -  this.state.step}));
        }
    }

  render() {
    return (
      <div className='counter'>
        <p>{this.state.count}</p>
        <button className='decrement red' onClick={this.increment}>+</button>
        <button className='increment green' onClick={this.decrement}>-</button>
      </div>
    )
  }
}