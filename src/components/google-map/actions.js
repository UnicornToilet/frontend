import superagent from 'superagent';

let mockAPI = 'http://localhost:3000/toilets';

export const getToilets = () => dispatch => {
  superagent.get(mockAPI)
    .then(res => dispatch(initAction(res.body)))
    .catch(console.error);
};

export const addToilet = (data) => dispatch => {
  geoCode(data);
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
  superagent.get('https://maps.googleapis.com/maps/api/geocode/json')
    .set(address: data.locationName)
    .set(key: __GOOLE_KEY__)
    .then(console.log)
    .catch(console.err)
}


// axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
//   params:{
//     address:this.location,
//     key: 'AIzaSyByLJF7mtLoXCiyAiB0M6quGWfVERGhoZU',
//   }
// })
// .then(function(res){
//   var coords = res.data.results[0].geometry.location;