const initialState = {};

export default (state=initialState, {type,payload}) => {
  switch(type) {
    case 'INIT':
      console.log('hi', payload);
      return payload;

    case 'FILTER':
      return state;

    default:
      return state;
  }
};
