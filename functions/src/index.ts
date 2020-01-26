//import request = require("request");

//import * as functions from 'firebase-functions';
//import * as request from "request-promise-native";

const ftch = require("node-fetch");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.batch1 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [[-16.534, 145.784],
            [-24.56, 153.198],
            [-14.74, 124.065],
            [-13.561, 123.416],
            [-30.142, 140.006],
            [-29.423, 152.812],
            [-26.692, 139.708],
            [-16.763, 141.048],
            [-27.95, 121.431],
            [-23.721, 150.373],
            [-18.986, 143.091],
            [-13.148, 142.557],
            [-19.332, 122.999],
            [-15.443, 133.778],
            [-24.173, 142.797],
            [-25.599, 125.103],
            [-22.977, 114.816],
            [-29.653, 117.866],
            [-20.339, 144.98],
            [-30.365, 133.187],
            [-32.82, 132.066],
            [-37.679, 141.515],
            [-25.868, 134.292],
            [-20.399, 144.218],
            [-25.872, 121.389],
            [-33.809, 127.64],
            [-24.055, 114.084]];

            //console.log(locations);
            // Database stuff - reference to database
            var db = admin.database();
            var ref = db.ref("/");

            // Attach an asynchronous callback to read the data at our posts reference
            locations.forEach(async (location) => {
                let lat = location[0];
                let lng = location[1];

                //"https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE"
                const baseUrl = 'https://api.climacell.co/v3/weather/realtime';
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=MXLgd79Id1cMWNMyRxdP0M842qfwpGf3";
                //var options = {
                //    uri: baseUrl + queryString,
                //};
                //API KEY: RKirrS8unzFgPtQWVChPhMzdnjhTpJmE
                ftch(baseUrl + queryString).then((resp : any) => resp.json())
                .then(function(data : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(location[0] + "," + location[1] + "," + data.fire_index.value);
                }).catch(function(error : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(error.toString());
                });
                //const result = await request.get(options).json();
            });
            

            /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });*/

            //End Database stuff
          })()
          return res.send('Updated.');
    });    
  });

  exports.batch2 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
            [-22.669, 134.213],
            [-28.896, 151.544],
            [-32.679, 153.265],
            [-12.473, 132.949],
            [-36.334, 153.139],
            [-35.525, 117.466],
            [-23.209, 152.62],
            [-13.866, 122.649],
            [-28.849, 142.897],
            [-29.408, 125.658],
            [-31.739, 145.807],
            [-24.554, 149.486],
            [-15.373, 146.77],
            [-11.776, 133.14],
            [-30.073, 143.499],
            [-19.159, 152.744],
            [-36.575, 147.171],
            [-33.283, 139.346],
            [-19.886, 143.957],
            [-12.66, 148.839],
            [-30.933, 136.531],
            [-20.817, 129.016],
            [-23.524, 114.911],
            [-14.248, 149.118],
            [-36.989, 115.418],
            [-16.331, 142.676],
            [-20.817, 125.294],
            [-27.75, 128.596],
            [-33.197, 122.455],
            [-31.944, 150.807],
            [-37.426, 142.278],
            [-26.163, 152.139],
            [-29.597, 150.916],
            [-24.558, 127.128],
            [-13.637, 149.988],
            [-15.534, 143.02],
            [-33.412, 141.838],
            [-12.712, 145.411],
            [-28.697, 126.506],
            [-11.322, 148.709],
            [-37.348, 150.051],
            [-20.593, 145.805],
            [-11.864, 145.362],
            [-23.857, 125.645],
            [-28.169, 117.782],
            [-32.435, 147.174],
            [-30.598, 121.234],
            [-33.851, 123.987],
            [-22.342, 144.346]];

            //console.log(locations);
            // Database stuff - reference to database
            var db = admin.database();
            var ref = db.ref("/");

            // Attach an asynchronous callback to read the data at our posts reference
            locations.forEach(async (location) => {
                let lat = location[0];
                let lng = location[1];

                //"https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE"
                const baseUrl = 'https://api.climacell.co/v3/weather/realtime';
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=MXLgd79Id1cMWNMyRxdP0M842qfwpGf3";
                //var options = {
                //    uri: baseUrl + queryString,
                //};
                //API KEY: RKirrS8unzFgPtQWVChPhMzdnjhTpJmE
                ftch(baseUrl + queryString).then((resp : any) => resp.json())
                .then(function(data : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(location[0] + "," + location[1] + "," + data.fire_index.value);
                }).catch(function(error : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(error.toString());
                });
                //const result = await request.get(options).json();
            });
            

            /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });*/

            //End Database stuff
          })()
          return res.send('Updated.');
    });    
  });

  exports.batch3 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
            [-31.192, 147.943],
            [-21.996, 133.621],
            [-16.048, 140.186],
            [-25.547, 130.783],
            [-26.387, 139.467],
            [-13.969, 151.491],
            [-31.674, 121.432],
            [-27.096, 149.204],
            [-21.415, 121.491],
            [-24.379, 128.507],
            [-30.78, 131.906],
            [-33.576, 134.276],
            [-18.689, 133.22],
            [-36.704, 144.518],
            [-28.155, 152.503],
            [-15.356, 142.211],
            [-16.087, 123.712],
            [-25.45, 130.658],
            [-13.705, 133.613],
            [-32.53, 143.59],
            [-28.958, 148.479],
            [-20.833, 128.1],
            [-27.937, 123.308],
            [-21.782, 133.906],
            [-17.917, 134.359],
            [-27.999, 120.153],
            [-13.097, 134.538],
            [-32.517, 128.178],
            [-31.488, 150.807],
            [-15.351, 127.531],
            [-18.19, 143.647],
            [-27.46, 134.042],
            [-36.81, 118.595],
            [-31.06, 136.319],
            [-34.782, 142.891],
            [-32.742, 115.814],
            [-33.866, 148.763],
            [-30.39, 120.801],
            [-33.961, 150.366],
            [-36.107, 149.576],
            [-29.051, 125.013],
            [-23.128, 151.252],
            [-18.723, 137.784],
            [-26.469, 121.477],
            [-24.748, 135.441],
            [-24.362, 141.856],
            [-13.469, 122.718],
            [-16.353, 123.729]];

            //console.log(locations);
            // Database stuff - reference to database
            var db = admin.database();
            var ref = db.ref("/");

            // Attach an asynchronous callback to read the data at our posts reference
            locations.forEach(async (location) => {
                let lat = location[0];
                let lng = location[1];

                //"https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE"
                const baseUrl = 'https://api.climacell.co/v3/weather/realtime';
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=MXLgd79Id1cMWNMyRxdP0M842qfwpGf3";
                //var options = {
                //    uri: baseUrl + queryString,
                //};
                //API KEY: RKirrS8unzFgPtQWVChPhMzdnjhTpJmE
                ftch(baseUrl + queryString).then((resp : any) => resp.json())
                .then(function(data : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(location[0] + "," + location[1] + "," + data.fire_index.value);
                }).catch(function(error : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(error.toString());
                });
                //const result = await request.get(options).json();
            });
            

            /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });*/

            //End Database stuff
          })()
          return res.send('Updated.');
    });    
  });

  exports.batch4 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
            [-31.425, 136.058],
            [-36.528, 145.693],
            [-20.924, 130.304],
            [-30.586, 137.403],
            [-12.681, 128.977],
            [-26.513, 144.311],
            [-12.977, 134.69],
            [-28.085, 153.075],
            [-20.677, 142.361],
            [-30.44, 142.629],
            [-13.632, 130.909],
            [-24.965, 147.03],
            [-20.477, 145.914],
            [-32.429, 146.773],
            [-33.302, 133.485],
            [-14.227, 144.408],
            [-20.862, 130.574],
            [-15.674, 148.215],
            [-17.487, 146.988],
            [-16.437, 133.96],
            [-36.296, 141.185],
            [-22.331, 134.714],
            [-14.958, 146.306],
            [-22.105, 144.522],
            [-25.912, 142.208],
            [-21.652, 148.907],
            [-22.69, 133.431],
            [-17.106, 151.332],
            [-16.873, 142.053],
            [-35.164, 119.593],
            [-29.592, 120.469],
            [-25.086, 139.394],
            [-20.381, 151.291],
            [-24.126, 141.961],
            [-20.825, 135.883],
            [-34.208, 122.499],
            [-17.89, 142.141],
            [-16.272, 139.713],
            [-26.033, 140.573],
            [-20.769, 136.929],
            [-18.997, 141.643],
            [-25.124, 121.623],
            [-15.738, 132.503],
            [-23.672, 130.653],
            [-33.498, 138.606],
            [-20.461, 129.504],
            [-34.876, 145.133],
            [-12.616, 125.055],
            [-35.396, 137.252]];

            //console.log(locations);
            // Database stuff - reference to database
            var db = admin.database();
            var ref = db.ref("/");

            // Attach an asynchronous callback to read the data at our posts reference
            locations.forEach(async (location) => {
                let lat = location[0];
                let lng = location[1];

                //"https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE"
                const baseUrl = 'https://api.climacell.co/v3/weather/realtime';
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=MXLgd79Id1cMWNMyRxdP0M842qfwpGf3";
                //var options = {
                //    uri: baseUrl + queryString,
                //};
                //API KEY: RKirrS8unzFgPtQWVChPhMzdnjhTpJmE
                ftch(baseUrl + queryString).then((resp : any) => resp.json())
                .then(function(data : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(location[0] + "," + location[1] + "," + data.fire_index.value);
                }).catch(function(error : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(error.toString());
                });
                //const result = await request.get(options).json();
            });
            

            /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });*/

            //End Database stuff
          })()
          return res.send('Updated.');
    });    
  });

  exports.batch5 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
            [-22.321, 115.329],
            [-33.179, 144.631],
            [-24.614, 138.584],
            [-27.193, 117.822],
            [-26.966, 138.511],
            [-27.207, 114.115],
            [-15.752, 143.64],
            [-33.012, 136.065],
            [-28.818, 151.788],
            [-21.989, 149.479],
            [-26.583, 121.945],
            [-20.748, 152.385],
            [-12.98, 149.579],
            [-13.476, 133.402],
            [-14.356, 143.317],
            [-33.73, 145.335],
            [-16.732, 127.403],
            [-25.626, 125.733],
            [-35.557, 141.667],
            [-28.624, 133.291],
            [-16.972, 135.134],
            [-28.797, 143.835],
            [-22.698, 126.815],
            [-36.493, 151.686],
            [-18.814, 139.825],
            [-32.666, 123.571],
            [-24.743, 134.217],
            [-15.379, 147.071],
            [-20.106, 115.981],
            [-23.665, 124.889],
            [-30.584, 123.837],
            [-12.81, 142.969],
            [-20.408, 124.334],
            [-18.566, 146.925],
            [-27.502, 141.284],
            [-33.338, 145.369],
            [-35.075, 148.377],
            [-18.781, 122.108],
            [-17.491, 126.993],
            [-32.643, 134.547],
            [-22.362, 121.592],
            [-20.662, 152.187],
            [-23.689, 143.48],
            [-24.65, 139.99],
            [-11.796, 125.963],
            [-30.79, 127.904],
            [-34.855, 137.676],
            [-34.837, 136.221]];

            //console.log(locations);
            // Database stuff - reference to database
            var db = admin.database();
            var ref = db.ref("/");

            // Attach an asynchronous callback to read the data at our posts reference
            locations.forEach(async (location) => {
                let lat = location[0];
                let lng = location[1];

                //"https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE"
                const baseUrl = 'https://api.climacell.co/v3/weather/realtime';
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=MXLgd79Id1cMWNMyRxdP0M842qfwpGf3";
                //var options = {
                //    uri: baseUrl + queryString,
                //};
                //API KEY: RKirrS8unzFgPtQWVChPhMzdnjhTpJmE
                ftch(baseUrl + queryString).then((resp : any) => resp.json())
                .then(function(data : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(location[0] + "," + location[1] + "," + data.fire_index.value);
                }).catch(function(error : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(error.toString());
                });
                //const result = await request.get(options).json();
            });
            

            /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });*/

            //End Database stuff
          })()
          return res.send('Updated.');
    });    
  });

  exports.batch6 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
            [-31.563, 144.425],
            [-22.25, 138.077],
            [-28.08, 150.837],
            [-22.098, 119.298],
            [-31.638, 124.833],
            [-19.681, 136.89],
            [-27.995, 115.808],
            [-18.329, 122.063],
            [-11.587, 150.616],
            [-15.533, 121.986],
            [-35.332, 135.726],
            [-31.254, 144.716],
            [-21.563, 122.909],
            [-20.993, 118.53],
            [-27.244, 147.184],
            [-11.426, 142.353],
            [-29.165, 146.282],
            [-21.05, 151.622],
            [-22.665, 136.133],
            [-27.466, 137.772],
            [-30.099, 142.732],
            [-26.788, 150.648],
            [-23.615, 125.999],
            [-24.334, 127.442],
            [-28.235, 150.921],
            [-30.957, 153.138],
            [-13.344, 123.793],
            [-36.393, 140.051],
            [-23.988, 121.952],
            [-25.569, 152.732],
            [-19.214, 148.6],
            [-17.635, 124.881],
            [-18.081, 133.478],
            [-25.737, 148.482],
            [-29.751, 116.985],
            [-29.486, 142.669],
            [-28.966, 141.954],
            [-12.495, 135.011],
            [-23.556, 148.874],
            [-25.978, 138.694],
            [-19.285, 134.339],
            [-19.779, 119.437],
            [-28.169, 129.288],
            [-23.045, 150.808],
            [-33.976, 135.405],
            [-33.945, 129.855],
            [-21.769, 137.456],
            [-32.713, 120.047],
            [-28.481, 150.177]];

            //console.log(locations);
            // Database stuff - reference to database
            var db = admin.database();
            var ref = db.ref("/");

            // Attach an asynchronous callback to read the data at our posts reference
            locations.forEach(async (location) => {
                let lat = location[0];
                let lng = location[1];

                //"https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE"
                const baseUrl = 'https://api.climacell.co/v3/weather/realtime';
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=MXLgd79Id1cMWNMyRxdP0M842qfwpGf3";
                //var options = {
                //    uri: baseUrl + queryString,
                //};
                //API KEY: RKirrS8unzFgPtQWVChPhMzdnjhTpJmE
                ftch(baseUrl + queryString).then((resp : any) => resp.json())
                .then(function(data : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(location[0] + "," + location[1] + "," + data.fire_index.value);
                }).catch(function(error : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(error.toString());
                });
                //const result = await request.get(options).json();
            });
            

            /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });*/

            //End Database stuff
          })()
          return res.send('Updated.');
    });    
  });

  exports.batch7 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
            [-27.214, 130.103],
            [-28.588, 149.652],
            [-22.305, 133.862],
            [-15.402, 139.939],
            [-14.267, 122.509],
            [-32.734, 143.791],
            [-31.144, 134.043],
            [-16.946, 124.279],
            [-27.438, 114.965],
            [-14.448, 132.998],
            [-24.921, 138.191],
            [-31.695, 121.069],
            [-26.592, 134.794],
            [-28.733, 135.611],
            [-25.225, 151.191],
            [-24.046, 123.709],
            [-22.846, 140.089],
            [-37.041, 119.274],
            [-26.236, 132.232],
            [-38.207, 147.891],
            [-27.246, 116.707],
            [-23.422, 131.937],
            [-33.633, 138.643],
            [-18.569, 152.369],
            [-32.707, 126.447],
            [-29.338, 117.973],
            [-30.152, 138.248],
            [-18.188, 129.56],
            [-19.329, 135.18],
            [-30.797, 116.405],
            [-26.12, 142.296],
            [-22.981, 115.736],
            [-27.058, 136.055],
            [-21.403, 118.908],
            [-14.068, 144.01],
            [-19.945, 122.132],
            [-31.199, 122.165],
            [-20.804, 123.58],
            [-28.924, 144.187],
            [-22.735, 135.785],
            [-21.236, 130.652],
            [-20.026, 153.472],
            [-17.738, 152.21],
            [-26.59, 137.357],
            [-30.628, 125.226]];

            //console.log(locations);
            // Database stuff - reference to database
            var db = admin.database();
            var ref = db.ref("/");

            // Attach an asynchronous callback to read the data at our posts reference
            locations.forEach(async (location) => {
                let lat = location[0];
                let lng = location[1];

                //"https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE"
                const baseUrl = 'https://api.climacell.co/v3/weather/realtime';
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=MXLgd79Id1cMWNMyRxdP0M842qfwpGf3";
                //var options = {
                //    uri: baseUrl + queryString,
                //};
                //API KEY: RKirrS8unzFgPtQWVChPhMzdnjhTpJmE
                ftch(baseUrl + queryString).then((resp : any) => resp.json())
                .then(function(data : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(location[0] + "," + location[1] + "," + data.fire_index.value);
                }).catch(function(error : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(error.toString());
                });
                //const result = await request.get(options).json();
            });
            

            /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });*/

            //End Database stuff
          })()
          return res.send('Updated.');
    });    
  });

  exports.batch8 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
            [-27.599, 121.34],
            [-34.548, 147.773],
            [-15.69, 132.745],
            [-25.318, 128.324],
            [-21.223, 121.948],
            [-29.027, 152.826],
            [-19.06, 144.454],
            [-21.483, 125.906],
            [-26.952, 130.138],
            [-34.986, 146.677],
            [-29.655, 128.615],
            [-23.214, 152.715],
            [-30.894, 139.628],
            [-30.191, 143.21],
            [-30.408, 131.063],
            [-19.272, 153.249],
            [-33.333, 134.924],
            [-28.697, 115.386],
            [-25.979, 132.229],
            [-37.063, 152.471],
            [-15.995, 134.614],
            [-13.489, 146.225],
            [-27.471, 122.799],
            [-16.96, 125.578],
            [-26.862, 123.526],
            [-36.163, 146.496],
            [-38.442, 148.134],
            [-31.88, 126.153],
            [-20.662, 124.216],
            [-13.298, 147.703],
            [-37.388, 137.241],
            [-20.456, 127.897],
            [-11.73, 152.242],
            [-27.545, 120.597],
            [-18.705, 139.227],
            [-25.575, 116.188],
            [-16.529, 121.688],
            [-17.3, 137.818],
            [-25.703, 131.281],
            [-30.435, 115.065],
            [-23.161, 134.546],
            [-26.439, 114.024],
            [-11.338, 143.24],
            [-32.301, 125.207],
            [-26.627, 147.704],
            [-34.132, 122.995],
            [-23.027, 144.856],
            [-26.554, 124.56],
            [-26.654, 125.268],
            [-24.147, 121.843],
            [-18.283, 137.867],
            [-34.447, 152.079],
            [-23.265, 135.511],
            [-35.85, 115.093],
            [-25.759, 150.806],
            [-20.555, 147.295],
            [-37.576, 143.207],
            [-19.899, 119.263],
            [-30.768, 127.185],
            [-28.594, 132.218],
            [-23.869, 150.65]];

            //console.log(locations);
            // Database stuff - reference to database
            var db = admin.database();
            var ref = db.ref("/");

            // Attach an asynchronous callback to read the data at our posts reference
            locations.forEach(async (location) => {
                let lat = location[0];
                let lng = location[1];

                //"https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE"
                const baseUrl = 'https://api.climacell.co/v3/weather/realtime';
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=MXLgd79Id1cMWNMyRxdP0M842qfwpGf3";
                //var options = {
                //    uri: baseUrl + queryString,
                //};
                //API KEY: RKirrS8unzFgPtQWVChPhMzdnjhTpJmE
                ftch(baseUrl + queryString).then((resp : any) => resp.json())
                .then(function(data : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(location[0] + "," + location[1] + "," + data.fire_index.value);
                }).catch(function(error : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(error.toString());
                });
                //const result = await request.get(options).json();
            });
            

            /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });*/

            //End Database stuff
          })()
          return res.send('Updated.');
    });    
  });

  exports.batch9 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
            [-25.386, 121.709],
            [-28.506, 122.191],
            [-30.66, 118.681],
            [-21.922, 127.273],
            [-22.073, 149.118],
            [-18.096, 146.949],
            [-15.512, 127.409],
            [-29.812, 123.772],
            [-27.883, 150.623],
            [-12.494, 124.417],
            [-18.203, 140.938],
            [-18.822, 134.114],
            [-12.388, 143.21],
            [-16.282, 122.635],
            [-17.735, 129.63],
            [-37.606, 143.879],
            [-38.766, 140.269],
            [-33.65, 137.528],
            [-32.514, 133.478],
            [-29.904, 143.218],
            [-25.701, 116.346],
            [-20.691, 123.366],
            [-12.301, 136.384],
            [-23.937, 149.963],
            [-30.902, 126.67],
            [-13.192, 143.613],
            [-38.168, 152.505],
            [-15.204, 132.48],
            [-36.835, 137.14],
            [-29.198, 142.281],
            [-23.7, 144.492],
            [-29.6, 119.565],
            [-32.656, 119.682],
            [-30.68, 132.378],
            [-24.407, 152.197],
            [-14.718, 125.594],
            [-26.505, 129.853],
            [-36.081, 117.004],
            [-12.815, 121.744],
            [-34.429, 152.325],
            [-28.769, 124.689],
            [-32.15, 121.259],
            [-14.536, 122.948],
            [-35.798, 119.246],
            [-26.787, 143.1],
            [-21.375, 145.335],
            [-35.322, 116.312],
            [-29.996, 117.6],
            [-20.069, 125.4],
            [-21.399, 138.231],
            [-22.271, 124.214],
            [-12.731, 123.987],
            [-30.217, 124.158],
            [-11.993, 129.66],
            [-35.067, 149.909],
            [-19.415, 142.874],
            [-15.176, 153.033],
            [-12.051, 129.94],
            [-31.457, 122.039],
            [-33.518, 152.868],
            [-32.67, 138.793],
            [-27.149, 127.961],
            [-22.767, 126.191],
            [-20.413, 146.325],
            [-25.611, 127.456],
            [-18.422, 126.445],
            [-21.062, 148.418],
            [-21.685, 113.938],
            [-28.207, 126.669]];

            //console.log(locations);
            // Database stuff - reference to database
            var db = admin.database();
            var ref = db.ref("/");

            // Attach an asynchronous callback to read the data at our posts reference
            locations.forEach(async (location) => {
                let lat = location[0];
                let lng = location[1];

                //"https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE"
                const baseUrl = 'https://api.climacell.co/v3/weather/realtime';
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=MXLgd79Id1cMWNMyRxdP0M842qfwpGf3";
                //var options = {
                //    uri: baseUrl + queryString,
                //};
                //API KEY: RKirrS8unzFgPtQWVChPhMzdnjhTpJmE
                ftch(baseUrl + queryString).then((resp : any) => resp.json())
                .then(function(data : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(location[0] + "," + location[1] + "," + data.fire_index.value);
                }).catch(function(error : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(error.toString());
                });
                //const result = await request.get(options).json();
            });
            

            /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });*/

            //End Database stuff
          })()
          return res.send('Updated.');
    });    
  });

  exports.batch10 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
            [-20.473, 140.024],
            [-21.239, 140.923],
            [-12.269, 149.528],
            [-22.939, 125.572],
            [-33.509, 130.348],
            [-23.524, 121.675],
            [-27.781, 146.129],
            [-38.068, 116.289],
            [-31.13, 132.567],
            [-26.112, 136.832],
            [-17.504, 149.509],
            [-26.471, 142.825],
            [-20.027, 141.424],
            [-37.301, 136.311],
            [-22.804, 120.238],
            [-15.488, 138.603],
            [-17.532, 131.205],
            [-24.043, 133.581],
            [-22.679, 150.481],
            [-21.055, 138.038],
            [-13.775, 130.237],
            [-29.594, 123.487],
            [-25.742, 116.181],
            [-21.306, 118.465],
            [-25.832, 143.511],
            [-29.779, 118.218],
            [-25.856, 143.033],
            [-14.416, 149.088],
            [-22.84, 118.731],
            [-32.802, 115.677],
            [-37.071, 149.077],
            [-17.253, 127.347],
            [-13.43, 129.372],
            [-22.783, 120.654],
            [-28.629, 145.913],
            [-21.205, 144.399],
            [-37.003, 138.009],
            [-25.611, 139.393],
            [-16.988, 144.579],
            [-25.666, 147.966],
            [-20.449, 136.382],
            [-24.236, 114.974],
            [-24.56, 117.889],
            [-19.834, 148.998],
            [-26.104, 129.833],
            [-26.4, 134.904],
            [-25.768, 118.984],
            [-19.676, 144.287],
            [-12.962, 128.133],
            [-31.927, 137.741],
            [-28.64, 140.469],
            [-14.088, 125.724]];

            //console.log(locations);
            // Database stuff - reference to database
            var db = admin.database();
            var ref = db.ref("/");

            // Attach an asynchronous callback to read the data at our posts reference
            locations.forEach(async (location) => {
                let lat = location[0];
                let lng = location[1];

                //"https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE"
                const baseUrl = 'https://api.climacell.co/v3/weather/realtime';
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=MXLgd79Id1cMWNMyRxdP0M842qfwpGf3";
                //var options = {
                //    uri: baseUrl + queryString,
                //};
                //API KEY: RKirrS8unzFgPtQWVChPhMzdnjhTpJmE
                ftch(baseUrl + queryString).then((resp : any) => resp.json())
                .then(function(data : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(location[0] + "," + location[1] + "," + data.fire_index.value);
                }).catch(function(error : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(error.toString());
                });
                //const result = await request.get(options).json();
            });
            

            /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });*/

            //End Database stuff
          })()
          return res.send('Updated.');
    });    
  });

  exports.batch11 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
            [-29.937, 117.844],
            [-32.156, 118.475],
            [-20.848, 143.377],
            [-21.213, 126.28],
            [-14.072, 133.965],
            [-25.716, 130.784],
            [-30.71, 126.998],
            [-19.857, 140.819],
            [-30.246, 143.643],
            [-20.35, 116.291],
            [-29.519, 114.42],
            [-32.957, 114.037],
            [-26.513, 136.044],
            [-24.743, 127.593],
            [-12.108, 124.951],
            [-27.221, 144.297],
            [-14.264, 153.648],
            [-31.303, 122.484],
            [-36.539, 138.887],
            [-26.094, 127.666],
            [-31.149, 119.097],
            [-34.82, 151.837],
            [-15.866, 133.178],
            [-34.221, 151.159],
            [-14.587, 126.609],
            [-23.339, 147.597],
            [-36.23, 151.824],
            [-30.837, 117.523],
            [-18.013, 143.732],
            [-34.157, 151.485],
            [-33.517, 138.125],
            [-21.71, 118.393],
            [-12.739, 123.012],
            [-16.961, 129.173],
            [-25.554, 141.852],
            [-38.0, 116.698],
            [-27.932, 136.017],
            [-13.825, 130.384],
            [-30.12, 148.227],
            [-31.186, 122.284]];

            //console.log(locations);
            // Database stuff - reference to database
            var db = admin.database();
            var ref = db.ref("/");

            // Attach an asynchronous callback to read the data at our posts reference
            locations.forEach(async (location) => {
                let lat = location[0];
                let lng = location[1];

                //"https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE"
                const baseUrl = 'https://api.climacell.co/v3/weather/realtime';
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=MXLgd79Id1cMWNMyRxdP0M842qfwpGf3";
                //var options = {
                //    uri: baseUrl + queryString,
                //};
                //API KEY: RKirrS8unzFgPtQWVChPhMzdnjhTpJmE
                ftch(baseUrl + queryString).then((resp : any) => resp.json())
                .then(function(data : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(location[0] + "," + location[1] + "," + data.fire_index.value);
                }).catch(function(error : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(error.toString());
                });
                //const result = await request.get(options).json();
            });
            

            /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });*/

            //End Database stuff
          })()
          return res.send('Updated.');
    });    
  });

  exports.batch11 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
            [-37.937, 115.33],
            [-19.512, 143.709],
            [-23.418, 147.33],
            [-12.832, 145.743],
            [-23.377, 139.678],
            [-15.6, 123.165],
            [-28.234, 150.562],
            [-28.281, 115.19],
            [-30.388, 113.751],
            [-30.059, 142.647],
            [-26.18, 126.015],
            [-24.85, 116.971],
            [-38.231, 148.756],
            [-21.969, 118.887],
            [-35.006, 152.432],
            [-21.123, 119.413],
            [-34.083, 131.969],
            [-25.245, 147.822],
            [-23.059, 143.92],
            [-32.844, 142.041],
            [-17.469, 141.438],
            [-32.117, 126.962],
            [-13.238, 125.768],
            [-28.446, 114.21],
            [-20.388, 141.4],
            [-20.868, 144.654],
            [-27.901, 124.369],
            [-15.587, 137.256],
            [-23.924, 117.922],
            [-20.66, 130.745],
            [-24.708, 122.929],
            [-13.374, 126.571],
            [-22.814, 132.961],
            [-32.544, 124.407],
            [-26.539, 138.511],
            [-18.028, 148.37],
            [-32.702, 119.801],
            [-31.897, 115.106],
            [-15.944, 146.812],
            [-12.048, 146.631],
            [-12.813, 143.901],
            [-29.554, 119.909],
            [-20.643, 118.145],
            [-33.346, 148.96],
            [-29.686, 135.177],
            [-38.448, 140.469],
            [-14.237, 135.696],
            [-37.982, 142.24],
            [-26.608, 123.708],
            [-16.089, 134.339],
            [-29.848, 118.082],
            [-13.766, 142.884]];

            //console.log(locations);
            // Database stuff - reference to database
            var db = admin.database();
            var ref = db.ref("/");

            // Attach an asynchronous callback to read the data at our posts reference
            locations.forEach(async (location) => {
                let lat = location[0];
                let lng = location[1];

                //"https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE"
                const baseUrl = 'https://api.climacell.co/v3/weather/realtime';
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=MXLgd79Id1cMWNMyRxdP0M842qfwpGf3";
                //var options = {
                //    uri: baseUrl + queryString,
                //};
                //API KEY: RKirrS8unzFgPtQWVChPhMzdnjhTpJmE
                ftch(baseUrl + queryString).then((resp : any) => resp.json())
                .then(function(data : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(location[0] + "," + location[1] + "," + data.fire_index.value);
                }).catch(function(error : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(error.toString());
                });
                //const result = await request.get(options).json();
            });
            

            /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });*/

            //End Database stuff
          })()
          return res.send('Updated.');
    });    
  });

  exports.batch12 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
            [-14.365, 153.159],
            [-38.688, 117.546],
            [-21.348, 134.158],
            [-33.82, 141.282],
            [-28.234, 147.417],
            [-20.199, 149.381],
            [-15.013, 122.353],
            [-23.587, 137.336],
            [-30.206, 135.896],
            [-25.524, 129.574],
            [-11.841, 130.778],
            [-19.651, 148.3],
            [-26.905, 128.045],
            [-19.847, 126.509],
            [-19.848, 122.41],
            [-22.598, 144.653],
            [-34.418, 116.197],
            [-22.734, 114.999],
            [-26.222, 134.122],
            [-35.789, 151.895],
            [-11.578, 127.124],
            [-31.61, 121.831],
            [-12.525, 124.376],
            [-29.344, 142.293],
            [-27.815, 149.156],
            [-25.191, 134.127],
            [-27.078, 128.63],
            [-37.189, 144.708],
            [-19.961, 141.481],
            [-12.268, 142.621],
            [-34.876, 142.067],
            [-27.348, 143.712],
            [-35.507, 118.7],
            [-29.28, 128.127],
            [-25.596, 126.43],
            [-35.599, 137.583],
            [-29.676, 150.591],
            [-31.166, 144.067],
            [-25.669, 139.867],
            [-27.645, 140.544],
            [-17.476, 152.618]];

            //console.log(locations);
            // Database stuff - reference to database
            var db = admin.database();
            var ref = db.ref("/");

            // Attach an asynchronous callback to read the data at our posts reference
            locations.forEach(async (location) => {
                let lat = location[0];
                let lng = location[1];

                //"https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE"
                const baseUrl = 'https://api.climacell.co/v3/weather/realtime';
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=MXLgd79Id1cMWNMyRxdP0M842qfwpGf3";
                //var options = {
                //    uri: baseUrl + queryString,
                //};
                //API KEY: RKirrS8unzFgPtQWVChPhMzdnjhTpJmE
                ftch(baseUrl + queryString).then((resp : any) => resp.json())
                .then(function(data : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(location[0] + "," + location[1] + "," + data.fire_index.value);
                }).catch(function(error : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(error.toString());
                });
                //const result = await request.get(options).json();
            });
            

            /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });*/

            //End Database stuff
          })()
          return res.send('Updated.');
    });    
  });

  exports.batch13 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
            [-15.765, 122.404],
            [-28.039, 130.197],
            [-22.897, 135.399],
            [-26.499, 120.935],
            [-23.567, 116.116],
            [-36.792, 149.595],
            [-33.74, 140.459],
            [-12.226, 133.821],
            [-28.12, 146.035],
            [-24.85, 151.567],
            [-29.618, 141.784],
            [-32.253, 153.39],
            [-17.95, 139.869],
            [-21.91, 146.355],
            [-31.409, 127.332],
            [-20.656, 132.482],
            [-32.791, 132.498],
            [-16.88, 150.934],
            [-32.007, 124.791],
            [-21.141, 131.502],
            [-30.794, 120.972],
            [-38.454, 150.374],
            [-17.721, 137.998],
            [-37.518, 147.504],
            [-20.487, 152.198],
            [-11.835, 132.804],
            [-21.89, 128.823],
            [-34.237, 150.896],
            [-22.031, 140.203],
            [-24.095, 129.905],
            [-23.379, 153.461],
            [-31.305, 153.013],
            [-26.286, 131.58],
            [-11.549, 134.973],
            [-34.792, 137.924],
            [-18.064, 127.727],
            [-25.745, 129.025],
            [-32.573, 145.793],
            [-22.675, 153.161],
            [-23.975, 152.165],
            [-25.486, 118.32],
            [-16.757, 126.926],
            [-36.403, 148.679],
            [-32.707, 140.821],
            [-16.903, 130.662],
            [-17.296, 124.103],
            [-18.099, 150.248],
            [-12.332, 141.863],
            [-28.506, 139.559],
            [-18.301, 125.741],
            [-23.876, 130.264],
            [-12.474, 135.104],
            [-32.682, 149.768],
            [-18.542, 135.841],
            [-31.395, 115.284],
            [-12.625, 131.028],
            [-21.595, 118.988],
            [-19.126, 127.735],
            [-22.027, 136.524],
            [-15.918, 122.225]];

            //console.log(locations);
            // Database stuff - reference to database
            var db = admin.database();
            var ref = db.ref("/");

            // Attach an asynchronous callback to read the data at our posts reference
            locations.forEach(async (location) => {
                let lat = location[0];
                let lng = location[1];

                //"https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE"
                const baseUrl = 'https://api.climacell.co/v3/weather/realtime';
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=MXLgd79Id1cMWNMyRxdP0M842qfwpGf3";
                //var options = {
                //    uri: baseUrl + queryString,
                //};
                //API KEY: RKirrS8unzFgPtQWVChPhMzdnjhTpJmE
                ftch(baseUrl + queryString).then((resp : any) => resp.json())
                .then(function(data : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(location[0] + "," + location[1] + "," + data.fire_index.value);
                }).catch(function(error : any) {
                    let name = location[0].toString().replace('.', '') + location[1].toString().replace('.', '');
                    var locRef = ref.child(name);
                    locRef.set(error.toString());
                });
                //const result = await request.get(options).json();
            });
            

            /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });*/

            //End Database stuff
          })()
          return res.send('Updated.');
    });    
  });