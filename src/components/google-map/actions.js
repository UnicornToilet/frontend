import superagent from 'superagent';

let mockAPI = 'http://localhost:3000/toilets';

export const getToilets = (prefs) => dispatch => {
  if(prefs === null){
    superagent.get(mockAPI)  // /toilet route
      .then(res => dispatch(fetchToilets(res.body)))
      .catch(console.error);
  }
  
  superagent.post(mockAPI).send(prefs)  // /toilet route
    .then(res => dispatch(fetchToilets(res.body)))
    .catch(console.error);

};

export const addToilet = (data) => dispatch => {
  geoCode(data)
    .then(toilet => superagent.post(mockAPI).send(toilet)) // /addToilet route
    .then(toilets => dispatch(fetchToilets(toilets))) //toilets will be updated toilets - send to reducer to update state
    .catch(console.log)
};

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
}
