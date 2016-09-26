import React, { Component } from 'react';
import GradesTable from './GradesTable';
import GradesStore from '../stores/GradesStore';

export default class GradesContainer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      assignments: GradesStore.getAll()
    }
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount() {
    GradesStore.startListening(this._onChange)
  }

  componentWillUnmount(){
    GradesStore.stopListening(this._onChange)
  }

  _onChange(){
    this.setState({
      assignments: GradesStore.getAll()
    })
  }

  render(){
    const {assignments} = this.state;
    return(
      <GradesTable assignments = {assignments} />
    )
  }
}
