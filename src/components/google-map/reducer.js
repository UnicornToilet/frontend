const initialState = {};

export default (state=initialState, {type,payload}) => {
  switch(type) {
    case 'FETCH':
    console.log('init', payload)
      return payload || initialState;

    case 'ADD':
      return {...state, payload};

    case 'FILTER':
    console.log('filter', payload)
      return payload;

    default:
      return state;
  }
};
