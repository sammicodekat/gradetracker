import React, { Component } from 'react';
import GradesActions from '../actions/GradesActions'

export default class GradesTable extends Component{
  constructor(props){
    super(props);
  }
  _delete(assignment){
    GradesActions.delete(assignment);
  }
  render(){
    const {assignments} = this.props;
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Total</th>
            <th>Score</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          { assignments.map(assignment => {
             let {id,name,total,grade} = assignment;
               return (
                   <tr key ={id}>
                     <td>{name}</td>
                     <td>{total}</td>
                     <td>{grade}</td>
                     <td>
                       <button onClick ={this._delete.bind(this,assignment)}>Delete</button>
                     </td>
                   </tr>
               )
          })}
          </tbody>
          <tfoot>
          <tr>
            <td>Sum :</td>
            <td>Total</td>
            <td>Total Overall</td>
            <td>TGrade</td>
          </tr>
          </tfoot>
          </table>
    )
  }
}
