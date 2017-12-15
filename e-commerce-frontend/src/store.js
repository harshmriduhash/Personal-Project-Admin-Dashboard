import logger from 'redux-logger';
import rootReducer from  './reducers';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

let middleware = [

  logger,
  thunkMiddleware

]

export default(initialState) => {

    return createStore(
      
      rootReducer,
      applyMiddleware(...middleware)

    );
};
