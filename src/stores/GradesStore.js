import AppDispatcher from '../AppDispatcher';
import {EventEmitter} from 'events';
import Storage from '../Storage';

let _assignments = Storage.read('assignments') || [];

class GradesStore extends EventEmitter{
  constructor(){
    super();
    AppDispatcher.register(action => {
     switch(action.type){
       case 'ASSIGNMENT_CREATE':
       let {assignment} =action.payload;
       _assignments.push(assignment);
       this.emit('CHANGE');
       break;
       case 'ASSIGNMENT_DELETE':
       let ind = action.payload.assignment.id;
       _assignments = _assignments.filter(p => p.id !== ind );
       this.emit('CHANGE');
       break;
     }

    });
    this.on('CHANGE',() => {
      Storage.write('assignments',_assignments);
    })
  }
  startListening(cb){
    this.on('CHANGE',cb);
  }
  stopListening(cb){
    this.removeListener("CHANGE",cb);
  }
  getAll(){
    return _assignments;
  }
}

export default new GradesStore();
