import superagent from 'superagent';

let mockAPI = 'http://localhost:3000/toilet';

export const getToilets = (prefs) => dispatch => {
  if(prefs === null){
    superagent.get(mockAPI)
      .then(res => dispatch(fetchToilets(res.body)))
      .catch(err => console.log(err.message));
  }
}
  
//   superagent.post(mockAPI).send(prefs)  // /toilet route
//     .then(res => dispatch(fetchToilets(res.body)))
//     .catch(console.error);
// };

export const addToilet = (data) => dispatch => {
  geoCode(data)
    .then(toilet => {
      toilet = JSON.stringify(toilet);
      return superagent.post('http://localhost:3000/addToilet').set('Content-Type', 'application/json').send(toilet)
    })
    .then(res => dispatch(addToiletAction(res.body))) 
    .catch(console.log)
};

const addToiletAction = (toilet) => ({
  type: 'ADD',
  payload: toilet
})

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
