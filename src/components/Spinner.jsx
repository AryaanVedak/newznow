import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
        <img className='spin' src={loading} alt="loading" />
    )
  }
}

export default Spinner