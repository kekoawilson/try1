import { createStore, applyMiddleware } from 'redux';
import reducer from '../src/ducks/reducer';
import promiseMiddleware from 'redux-promise-middleware';
// 43K
export default createStore( reducer, applyMiddleware( promiseMiddleware() ) )