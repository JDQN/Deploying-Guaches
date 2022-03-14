import addItem from './addItem';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
   addItem
})

export default rootReducers;


/* 
   combineReducers  lo utilizo para crear un reducer que contiene todos los reducers que se crearon en el archivo reducers/index.jsx
   y se exportan en el archivo actions/index.jsx 
*/