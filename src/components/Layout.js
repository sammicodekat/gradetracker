import React,{Component} from 'react';
import GradesForm from './GradesForm';
import GradesContainer from './GradesContainer';
import '../stores/GradesStore';


export default class Layout extends Component {
  render(){
    return (
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <h1 className="page-header">Grades Tracker</h1>
      </div>
      </div>
      <div className="row">
      <GradesForm />
      </div>
      <div className="row">
      <GradesContainer />
      </div>
      </div>
    )
  }
}
