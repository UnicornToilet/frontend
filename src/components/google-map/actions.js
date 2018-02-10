import superagent from 'superagent';

export const getToilets = () => dispatch => {
  superagent.get(__API_URL__ + '/toilet')
    .then(res => dispatch(fetchToilets(res.body)))
    .catch(err => console.log(err.message));
};

export const filterToilets = (prefs) => dispatch => {
  superagent.post(__API_URL__ + '/toilet').set('Content-Type', 'application/json').send(prefs)
    .then(res => {
      console.log('poop', res.body);
      dispatch(filterToiletAction(res.body));
    })
    .catch(console.error);
};

export const addToilet = (data) => dispatch => {
  geoCode(data)
    .then(toilet => {
      toilet = JSON.stringify(toilet);
      return superagent.post(__API_URL__ +'/addToilet').set('Content-Type', 'application/json').send(toilet)
    })
    .then(res => dispatch(addToiletAction(res.body)))
    .catch(console.log);
};

const addToiletAction = (toilet) => ({
  type: 'ADD',
  payload: toilet,
});

const filterToiletAction = (toilet) => ({
  type: 'FILTER',
  payload: toilet,
});


const fetchToilets = (toilets) => ({
  type: 'FETCH',
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
};
