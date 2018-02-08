const initialState = {};

export default (state=initialState, {type,payload}) => {
  switch(type) {
    case 'FETCH':
      return payload;

    case 'FILTER':
      return payload;

    default:
      return state;
  }
};
