const initialState = {};

export default (state=initialState, {type,payload}) => {
  switch(type) {
    case 'INIT':
      return payload;

    case 'FETCH':
      console.log(payload);
      return state;

    default:
      return state;
  }
}