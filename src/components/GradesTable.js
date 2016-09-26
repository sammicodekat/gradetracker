import React, { Component } from 'react';
import GradesActions from '../actions/GradesActions';
import uuid from 'uuid';

export default class GradesTable extends Component{
  constructor(props){
    super(props);
  }
  _delete(assignment){
    GradesActions.delete(assignment);
  }
  _percent(percent){
    if (percent >= 0.9 )
    {
      return percent ="A";
    }
    else if (percent <= 0.9 && percent >= 0.8  )
    {
      return percent ="B";
    }
    else if (percent <= 0.8 && percent >= 0.7  )
    {
      return percent ="C";
    }
    else if (percent <= 0.7 && percent >= 0.6  )
    {
      return percent ="D";
    }
    else
    {
      return percent ="F";
    }
  }
  render(){
    const {assignments} = this.props;
    let totalscore = 0;
    let sum = 0;
    return (
      <table className='table table-hover'>
      <thead>
      <tr className ="info">
      <th>Assignment</th>
      <th>Total</th>
      <th>Score</th>
      <th>Grade</th>
      <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      {assignments.map(assignment => {
        let {id,name,total,grade} = assignment;
        let percent = grade/total;
        totalscore += parseInt(total);
        sum += parseInt(grade);
        return(
          <tr key={id}>
          <td>{name}</td>
          <td>{total}</td>
          <td>{grade}</td>
          <td>{this._percent(percent)}</td>
          <td>
          <button onClick ={this._delete.bind(this,assignment)} className="btn btn-danger">Delete</button>
          </td>
          </tr>
        )
      })}
      </tbody>
      <tfoot>
      <tr className = "danger">
      <td>Sum :</td>
      <td>{totalscore}</td>
      <td>{sum}</td>
      <td>{this._percent(sum/totalscore)}</td>
      <td></td>
      </tr>
      </tfoot>
      </table>
    )
  }
}
