const initialState = {};

export default (state=initialState, {type,payload}) => {
  switch(type) {
    case 'INIT':
      return payload;

    case 'FILTER':
      return state;

    default:
      return state;
  }
};
