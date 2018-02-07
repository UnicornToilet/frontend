let filter = store => next => action => {
  if (action.type === 'FILTER'){
    console.log(store.getState());
  }
}

export default filter;