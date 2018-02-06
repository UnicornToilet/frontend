const initialState = {};

export default (state=initialState, {type,payload}) => {
  switch(type) {

  case 'INIT':
    return payload;

  default:
    return state;
  }
};
