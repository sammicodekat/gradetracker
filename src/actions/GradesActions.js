import AppDispatcher from '../AppDispatcher';
const GradesActions ={
  create(assignment){
    AppDispatcher.dispatch({
      type:"ASSIGNMENT_CREATE",
      payload: {assignment}
    })
  },

  delete(assignment){
    AppDispatcher.dispatch({
      type:"ASSIGNMENT_DELETE",
      payload: {assignment}
    })
  }
}
export default GradesActions;
