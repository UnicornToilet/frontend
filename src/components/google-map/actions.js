import superagent from 'superagent';

let mockAPI = 'http://localhost:3000/toilets';

export const getToilets = () => dispatch => {
  superagent.get(mockAPI)
    .then(res => dispatch(initAction(res.body)))
    .catch(console.error);
};

export const addToilet = (data) => dispatch => {
  geoCode(data)
    .then(console.log);
};

export const filterToilets = (preferences) => ({
  type: 'FILTER',
  payload: preferences
});

const initAction = (toilets) => ({
  type: 'INIT',
  payload: toilets,
});

const geoCode = (data) => {
  return superagent.get('https://maps.googleapis.com/maps/api/geocode/json')
    .query({address: data.locationName})
    .query({key: __GOOGLE_KEY__})
    .then(res => {
      let coords = (res.body.results[0].geometry.location);
      data.location = coords;
      return data;
    })
    .catch(console.log);
}
