import superagent from 'superagent';

let mockAPI = 'http://localhost:3000/toilets';

export const getToilets = () => dispatch => {
  superagent.get(mockAPI)
    .then(res => dispatch(initAction(res.body)))
    .catch(console.error);
}

const initAction = (toilets) => ({
  type: 'INIT',
  payload: toilets
})
