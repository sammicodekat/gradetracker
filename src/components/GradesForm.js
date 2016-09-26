import React, {Component} from 'react';
import GradesActions from '../actions/GradesActions'
import uuid from 'uuid';

export default class GradesForm extends Component {
  constructor(props){
    super(props);
    this._submitForm = this._submitForm.bind(this);
  }
  _submitForm(e){
    e.preventDefault();
    const {newAssignment,newPoints,newGrade} = this.refs;
    let assignment ={
      name: newAssignment.value,
      total:newPoints.value,
      grade:newGrade.value,
      id:uuid()
    }
    newAssignment.value='';
    newPoints.value='';
    newGrade.value='';
    GradesActions.create(assignment);
  }

  render(){
    return(
      <form onSubmit = {this._submitForm} className='form-inline'>
      <div className ='form-group'>
      <label htmlFor="newAssignment">Assignment Name:</label>
      <input ref='newAssignment' type="text" className='form-control' id = 'newAssignment' required/>
      </div>
      <div className ='form-group'>
      <label htmlFor="newPoints">Total:</label>
      <input ref='newPoints' type="number" className='form-control' id = 'newPoints' required/>
      </div>
      <div className ='form-group'>
      <label htmlFor="newGrade">Grade:</label>
      <input ref='newGrade' type="number" className='form-control' id = 'newGrade' required/>
      </div>
      <button className="btn btn-primary"> Add Assignment </button>
      </form>
    )
  }
}
