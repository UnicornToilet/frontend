
let defaultState = false;

export default (state=defaultState,action) => {

  let {type,payload} = action;

  switch(type) {

  case 'SET_AUTH_TOKEN':
    return true;

  case 'DELETE_AUTH_TOKEN':
    return false;

  default:
    return state;
  }

};
