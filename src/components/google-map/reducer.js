const initialState = {};

export default (state=initialState, {type,payload}) => {
  switch(type) {
    case 'FETCH':
      return payload;

    case 'ADD':
      return {...state, payload};

    case 'FILTER':
      return payload;

    default:
      return state;
  }
};
