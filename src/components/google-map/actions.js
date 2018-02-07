import superagent from 'superagent';

let mockAPI = 'http://localhost:3000/toilets';

export const getToilets = () => dispatch => {
  superagent.get(mockAPI)
    .then(res => dispatch(initAction(res.body)))
    .catch(console.error);
};

export const addToilet = () => dispatch => {
  superagent.post(mockAPI)
    .then(res => dispatch(initAction(res.body)))
    .catch(console.error);
};

export const filterToilets = (preferences) => ({
  type: 'FILTER',
  payload: preferences
});

const initAction = (toilets) => ({
  type: 'INIT',
  payload: toilets,
});
