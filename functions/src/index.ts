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

  exports.batch14 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
                [-17.722, 123.413],
                [-25.97, 128.327],
                [-27.153, 132.094],
                [-31.346, 149.236],
                [-14.661, 132.011],
                [-19.234, 124.149],
                [-28.017, 138.547],
                [-36.246, 115.628],
                [-20.28, 127.372],
                [-24.2, 116.495],
                [-32.258, 136.067],
                [-19.095, 147.243],
                [-34.627, 117.029],
                [-36.347, 113.704],
                [-22.015, 125.733],
                [-34.62, 141.28],
                [-22.634, 116.949],
                [-11.97, 147.328],
                [-38.662, 143.559],
                [-31.312, 129.045],
                [-23.406, 138.183],
                [-24.934, 136.639],
                [-23.848, 135.615],
                [-29.948, 140.936],
                [-24.949, 144.966],
                [-34.782, 150.898],
                [-26.977, 133.325],
                [-19.543, 131.968],
                [-19.547, 137.974],
                [-38.574, 146.425],
                [-18.965, 150.113],
                [-13.145, 153.196],
                [-19.872, 134.45],
                [-28.881, 123.326],
                [-33.619, 147.445],
                [-14.612, 131.182],
                [-27.622, 152.158],
                [-26.43, 119.771],
                [-29.27, 132.683],
                [-37.159, 135.595],
                [-32.819, 131.33],
                [-18.759, 135.075],
                [-26.071, 151.539],
                [-32.585, 144.744],
                [-29.279, 133.887],
                [-17.612, 143.191],
                [-22.246, 131.94],
                [-33.738, 114.012],
                [-34.995, 144.278],
                [-13.625, 145.504],
                [-38.268, 144.944],
                [-26.753, 153.422],
                [-23.494, 123.804],
                [-34.51, 140.03],
                [-16.469, 127.927],
                [-33.024, 127.867],
                [-18.838, 131.318],
                [-16.848, 139.551],
                [-25.942, 120.427],
                [-38.135, 144.4]];

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
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=WhC5T3hrpV09jJwoTpQoyStyWEOoMeVL";
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

  exports.batch15 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
                [-28.88, 119.156],
                [-28.405, 125.544],
                [-11.895, 123.6],
                [-14.844, 127.376],
                [-14.627, 134.618],
                [-32.369, 151.951],
                [-35.662, 146.516],
                [-30.939, 134.818],
                [-16.56, 144.041],
                [-25.125, 143.093],
                [-27.234, 125.162],
                [-31.34, 125.358],
                [-33.6, 115.031],
                [-32.568, 137.555],
                [-14.158, 124.589],
                [-19.969, 117.558],
                [-11.482, 146.061],
                [-32.347, 130.587],
                [-34.932, 149.07],
                [-11.766, 122.075],
                [-21.13, 140.306],
                [-30.205, 146.922],
                [-28.197, 145.235],
                [-27.814, 132.33],
                [-11.357, 144.259],
                [-16.947, 128.529],
                [-23.06, 151.764],
                [-16.214, 141.495],
                [-36.621, 147.829],
                [-37.329, 113.85],
                [-13.377, 128.702],
                [-11.359, 122.719],
                [-23.897, 126.618],
                [-36.284, 150.099],
                [-19.46, 139.843],
                [-18.189, 150.855],
                [-28.884, 153.661],
                [-30.777, 152.626],
                [-18.606, 132.356],
                [-16.15, 151.414],
                [-22.718, 147.381],
                [-16.961, 149.716],
                [-26.898, 129.309],
                [-21.814, 147.326],
                [-23.425, 118.829],
                [-31.922, 123.353],
                [-15.216, 149.876],
                [-24.118, 132.238],
                [-17.693, 136.387],
                [-22.787, 124.908],
                [-13.431, 148.49],
                [-27.876, 151.454],
                [-24.594, 123.795],
                [-32.527, 142.691],
                [-28.855, 119.883],
                [-16.307, 130.337],
                [-33.55, 135.963],
                [-21.617, 128.214],
                [-22.717, 127.848],
                [-25.876, 149.256]];

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
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=WhC5T3hrpV09jJwoTpQoyStyWEOoMeVL";
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

  exports.batch16 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
                [-27.119, 142.102],
                [-33.755, 125.894],
                [-17.55, 133.494],
                [-38.585, 151.399],
                [-18.857, 151.172],
                [-20.396, 114.774],
                [-19.104, 125.759],
                [-37.805, 118.311],
                [-30.895, 141.428],
                [-25.432, 117.134],
                [-21.537, 123.784],
                [-35.444, 139.91],
                [-27.983, 134.066],
                [-29.606, 126.37],
                [-27.947, 135.318],
                [-37.661, 148.36],
                [-22.329, 139.169],
                [-30.219, 153.411],
                [-11.347, 153.144],
                [-22.702, 149.121],
                [-20.409, 119.813],
                [-31.913, 139.239],
                [-32.728, 129.97],
                [-23.995, 147.468],
                [-28.297, 142.847],
                [-15.207, 137.817],
                [-28.016, 124.976],
                [-23.114, 138.738],
                [-23.419, 123.163],
                [-14.148, 131.786],
                [-14.851, 135.892],
                [-33.001, 136.816],
                [-29.015, 130.501],
                [-22.019, 143.724],
                [-30.171, 120.104],
                [-17.854, 137.034],
                [-31.544, 136.859],
                [-34.085, 149.721],
                [-14.266, 145.896],
                [-18.936, 129.119],
                [-20.21, 121.403],
                [-32.412, 136.738],
                [-34.31, 139.129],
                [-31.787, 143.543],
                [-33.614, 143.292],
                [-14.612, 151.61],
                [-15.626, 128.224],
                [-33.661, 127.111],
                [-29.128, 117.453],
                [-21.824, 135.258],
                [-17.459, 145.813],
                [-20.481, 137.852],
                [-26.955, 131.186],
                [-20.134, 150.584],
                [-16.918, 149.216],
                [-20.889, 150.163],
                [-30.667, 128.906],
                [-17.891, 132.196],
                [-31.747, 134.544],
                [-30.094, 134.372]];

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
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=WhC5T3hrpV09jJwoTpQoyStyWEOoMeVL";
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

  exports.batch17 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
                [-18.803, 130.575],
                [-27.699, 126.909],
                [-13.369, 135.684],
                [-24.247, 143.952],
                [-12.23, 151.97],
                [-15.547, 141.608],
                [-17.724, 135.777],
                [-27.363, 135.475],
                [-35.833, 139.294],
                [-27.981, 122.302],
                [-33.063, 142.59],
                [-38.589, 141.714],
                [-27.248, 124.574],
                [-21.305, 119.924],
                [-38.195, 137.922],
                [-23.238, 145.933],
                [-18.649, 146.06],
                [-28.755, 123.978],
                [-38.534, 138.734],
                [-20.996, 116.836],
                [-11.564, 148.149],
                [-33.596, 142.423],
                [-15.65, 124.536],
                [-21.163, 136.387],
                [-16.508, 138.605],
                [-22.056, 117.019],
                [-24.898, 115.571],
                [-36.477, 137.932],
                [-21.954, 126.669],
                [-28.499, 131.505],
                [-18.26, 130.986],
                [-27.748, 119.302],
                [-29.885, 145.125],
                [-22.905, 117.831],
                [-22.726, 148.365],
                [-22.162, 142.359],
                [-13.671, 153.352],
                [-25.163, 132.308],
                [-25.071, 140.621],
                [-31.133, 114.477],
                [-38.502, 114.5],
                [-14.118, 150.804],
                [-22.018, 145.312],
                [-15.992, 137.83],
                [-26.668, 135.518],
                [-28.457, 136.861],
                [-33.575, 121.631],
                [-30.921, 147.004],
                [-16.314, 137.263],
                [-19.546, 145.901],
                [-17.598, 139.08],
                [-29.519, 121.002],
                [-21.638, 132.923],
                [-30.645, 150.222],
                [-16.02, 131.335],
                [-17.593, 130.639],
                [-29.415, 138.762],
                [-27.897, 116.978],
                [-33.23, 140.764],
                [-24.229, 144.978]];

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
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=WhC5T3hrpV09jJwoTpQoyStyWEOoMeVL";
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

  exports.batch18 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
                [-23.805, 120.565],
                [-23.981, 133.077],
                [-32.224, 149.163],
                [-32.93, 116.644],
                [-27.133, 125.826],
                [-25.279, 144.379],
                [-15.245, 129.273],
                [-14.248, 141.457],
                [-27.19, 151.247],
                [-32.711, 120.783],
                [-25.765, 114.282],
                [-20.238, 133.674],
                [-33.656, 132.938],
                [-16.95, 131.723],
                [-23.72, 151.33],
                [-36.934, 139.627],
                [-37.69, 119.063],
                [-31.694, 142.57],
                [-17.277, 134.287],
                [-13.949, 128.406],
                [-25.385, 133.436],
                [-32.955, 146.673],
                [-23.045, 130.179],
                [-34.123, 133.519],
                [-20.276, 135.036],
                [-21.906, 147.875],
                [-25.132, 128.877],
                [-29.63, 129.748],
                [-21.664, 152.11],
                [-35.267, 114.21],
                [-29.42, 151.644],
                [-21.253, 132.011],
                [-13.629, 121.581],
                [-18.927, 140.917],
                [-25.962, 150.047],
                [-23.49, 146.667],
                [-29.723, 121.651],
                [-20.257, 143.236],
                [-20.145, 120.486],
                [-16.866, 136.677],
                [-19.539, 123.645],
                [-37.713, 139.779],
                [-14.204, 148.443],
                [-16.765, 134.493],
                [-33.711, 124.611],
                [-35.011, 140.499],
                [-14.693, 136.603],
                [-34.277, 119.435],
                [-36.391, 114.207],
                [-18.491, 121.53],
                [-20.638, 122.621],
                [-15.838, 149.809],
                [-27.402, 120.069],
                [-23.139, 131.003],
                [-29.131, 139.942],
                [-23.522, 140.484],
                [-33.743, 114.519],
                [-32.842, 148.845],
                [-36.943, 150.959],
                [-13.159, 132.407]];

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
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=WhC5T3hrpV09jJwoTpQoyStyWEOoMeVL";
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

  exports.batch19 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
                [-22.881, 128.428],
                [-19.312, 130.357],
                [-17.549, 122.296],
                [-27.02, 152.742],
                [-25.045, 142.249],
                [-11.755, 132.292],
                [-34.105, 126.601],
                [-21.341, 117.401],
                [-12.206, 150.703],
                [-21.746, 116.181],
                [-15.151, 151.573],
                [-20.12, 125.943],
                [-36.671, 142.54],
                [-18.429, 138.718],
                [-24.46, 134.838],
                [-14.638, 121.311],
                [-24.92, 124.731],
                [-24.261, 119.482],
                [-37.309, 138.621],
                [-28.126, 134.732],
                [-17.129, 122.803],
                [-13.625, 124.918],
                [-22.141, 129.519],
                [-34.213, 117.899],
                [-11.384, 121.41],
                [-20.755, 113.986],
                [-12.103, 126.87],
                [-23.539, 142.31],
                [-27.053, 146.633],
                [-21.598, 142.698],
                [-15.265, 131.496],
                [-19.979, 130.58],
                [-26.15, 118.466],
                [-17.359, 138.5],
                [-31.56, 150.027],
                [-24.053, 122.976],
                [-14.963, 143.23],
                [-33.814, 118.885],
                [-21.156, 141.784],
                [-13.531, 136.343],
                [-24.747, 133.441],
                [-13.142, 151.902],
                [-38.439, 147.165],
                [-18.208, 153.328],
                [-14.498, 142.307],
                [-37.359, 117.594],
                [-38.161, 136.859],
                [-25.789, 145.449],
                [-15.849, 144.91],
                [-18.611, 148.994],
                [-26.468, 115.808],
                [-21.309, 146.254],
                [-24.991, 125.75],
                [-14.306, 129.704],
                [-16.35, 124.285],
                [-31.291, 132.011],
                [-15.43, 125.454],
                [-19.521, 131.277],
                [-25.241, 118.957],
                [-16.491, 125.014]];

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
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=WhC5T3hrpV09jJwoTpQoyStyWEOoMeVL";
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

  exports.batch20 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
                [-33.836, 116.537],
                [-21.745, 134.749],
                [-24.951, 152.283],
                [-25.329, 120.682],
                [-28.959, 141.121],
                [-32.366, 121.946],
                [-13.864, 152.741],
                [-30.987, 140.877],
                [-19.927, 149.991],
                [-25.572, 137.285],
                [-31.581, 140.186],
                [-24.852, 136.048],
                [-24.82, 126.463],
                [-19.258, 127.111],
                [-26.574, 151.196],
                [-33.602, 151.855],
                [-29.772, 130.459],
                [-20.991, 135.254],
                [-35.824, 145.361],
                [-37.467, 146.354],
                [-15.729, 149.051],
                [-28.294, 127.768],
                [-21.817, 150.646],
                [-29.289, 124.338],
                [-14.128, 146.702],
                [-14.669, 147.322],
                [-29.908, 132.514],
                [-26.421, 131.063],
                [-12.178, 128.744],
                [-24.026, 129.375],
                [-20.72, 121.811],
                [-22.128, 120.231],
                [-22.208, 114.112],
                [-29.625, 113.762],
                [-20.904, 152.889],
                [-16.331, 152.633],
                [-27.864, 136.841],
                [-14.398, 149.746],
                [-38.65, 153.306],
                [-11.37, 125.24],
                [-16.822, 133.007],
                [-31.731, 141.029],
                [-23.618, 136.646],
                [-29.892, 122.206],
                [-16.043, 135.447],
                [-22.33, 117.532],
                [-26.439, 152.718],
                [-19.496, 115.303],
                [-19.072, 129.674],
                [-19.511, 113.888],
                [-11.868, 127.751],
                [-32.743, 118.178],
                [-19.721, 152.251],
                [-27.189, 121.99],
                [-29.216, 145.072],
                [-28.851, 138.67],
                [-26.304, 114.841],
                [-24.326, 120.292],
                [-32.643, 128.781],
                [-15.592, 126.584]];

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
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=WhC5T3hrpV09jJwoTpQoyStyWEOoMeVL";
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

  exports.batch21 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
                [-19.305, 145.129],
                [-30.159, 126.522],
                [-31.671, 146.341],
                [-31.337, 126.033],
                [-31.717, 124.039],
                [-37.168, 116.418],
                [-36.307, 141.752],
                [-11.514, 151.239],
                [-13.58, 150.836],
                [-35.51, 144.379],
                [-18.009, 149.269],
                [-32.848, 124.997],
                [-19.039, 136.454],
                [-36.006, 152.537],
                [-37.142, 140.374],
                [-15.58, 130.67],
                [-27.422, 118.392],
                [-15.692, 145.619],
                [-25.852, 135.728],
                [-33.513, 153.399],
                [-24.425, 136.727],
                [-25.999, 132.748],
                [-32.81, 118.856],
                [-19.761, 114.716],
                [-13.118, 147.028],
                [-16.984, 151.936],
                [-17.051, 123.479],
                [-24.308, 141.043],
                [-26.818, 146.039],
                [-28.2, 120.658],
                [-32.31, 152.468],
                [-26.195, 126.825],
                [-23.649, 145.179],
                [-35.381, 115.708],
                [-22.766, 142.228],
                [-34.089, 146.326],
                [-29.641, 127.004],
                [-21.496, 139.69],
                [-30.889, 137.982],
                [-21.476, 149.473],
                [-23.249, 116.862],
                [-29.668, 115.674],
                [-19.913, 129.997],
                [-20.766, 133.236],
                [-32.064, 132.718],
                [-28.543, 137.64],
                [-16.415, 150.073],
                [-20.25, 147.949],
                [-14.857, 145.276],
                [-28.243, 141.978],
                [-28.347, 119.3],
                [-30.752, 145.532],
                [-29.321, 122.491],
                [-33.121, 126.983],
                [-31.306, 116.95],
                [-24.735, 114.438],
                [-34.14, 136.7],
                [-19.887, 118.233],
                [-34.65, 115.608],
                [-18.604, 123.898]];

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
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=WhC5T3hrpV09jJwoTpQoyStyWEOoMeVL";
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

  exports.batch22 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
                [-34.801, 113.692],
                [-13.032, 141.485],
                [-30.089, 148.753],
                [-18.072, 128.301],
                [-22.43, 123.43],
                [-23.997, 139.733],
                [-38.204, 145.861],
                [-34.157, 152.911],
                [-13.811, 142.336],
                [-32.812, 135.419],
                [-32.212, 114.108],
                [-25.071, 149.792],
                [-32.736, 148.084],
                [-15.947, 153.29],
                [-16.438, 128.48],
                [-21.777, 152.831],
                [-13.168, 144.64],
                [-30.222, 139.112],
                [-35.611, 136.33],
                [-12.892, 127.194],
                [-30.758, 118.054],
                [-25.699, 141.195],
                [-35.776, 142.278],
                [-16.786, 140.508],
                [-13.056, 151.272],
                [-15.634, 144.348],
                [-12.266, 151.293],
                [-37.515, 145.801],
                [-26.87, 118.769],
                [-16.069, 151.942],
                [-38.304, 151.944],
                [-19.426, 146.549],
                [-33.36, 150.077],
                [-32.901, 115.123],
                [-31.777, 145.221],
                [-38.644, 118.36],
                [-37.612, 151.277],
                [-29.931, 152.315],
                [-20.908, 149.101],
                [-21.59, 124.744],
                [-22.533, 122.654],
                [-25.131, 143.834],
                [-29.194, 116.827],
                [-36.452, 114.999],
                [-29.638, 147.545],
                [-16.467, 144.741],
                [-35.653, 153.487],
                [-26.771, 144.878],
                [-29.682, 146.911],
                [-31.277, 148.621],
                [-12.461, 122.502],
                [-12.609, 131.922],
                [-11.889, 131.546],
                [-26.64, 117.738],
                [-12.431, 150.097],
                [-31.055, 142.86],
                [-25.386, 123.402],
                [-30.374, 149.706],
                [-22.117, 141.498],
                [-35.689, 150.104]];

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
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=WhC5T3hrpV09jJwoTpQoyStyWEOoMeVL";
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

  exports.batch23 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
                [-32.124, 148.184],
                [-38.351, 119.339],
                [-27.547, 145.344],
                [-21.23, 147.062],
                [-11.493, 135.514],
                [-26.388, 143.713],
                [-17.013, 146.36],
                [-27.884, 144.239],
                [-27.818, 139.609],
                [-19.471, 135.929],
                [-19.767, 139.079],
                [-19.349, 132.754],
                [-20.133, 132.91],
                [-28.886, 150.881],
                [-28.557, 136.358],
                [-15.826, 136.608],
                [-27.683, 130.962],
                [-12.638, 129.572],
                [-31.053, 151.698],
                [-25.944, 146.349],
                [-24.484, 150.319],
                [-24.658, 148.429],
                [-29.921, 124.891],
                [-17.301, 153.548],
                [-27.331, 136.918],
                [-22.757, 149.844],
                [-30.093, 132.0],
                [-17.681, 121.559],
                [-22.463, 146.413],
                [-18.048, 124.108],
                [-18.976, 128.561],
                [-30.227, 133.869],
                [-35.851, 147.066],
                [-33.296, 117.755],
                [-17.495, 145.022],
                [-11.446, 141.587],
                [-36.218, 143.208],
                [-13.827, 134.879],
                [-16.207, 127.137],
                [-20.248, 113.928],
                [-29.756, 131.131],
                [-14.003, 126.769],
                [-31.499, 147.132],
                [-29.498, 136.78],
                [-28.312, 147.944],
                [-14.137, 123.855],
                [-31.77, 119.449],
                [-33.524, 131.293],
                [-27.11, 116.176],
                [-35.774, 148.513],
                [-14.499, 128.134],
                [-36.038, 147.739],
                [-11.391, 149.826],
                [-26.767, 126.802],
                [-36.438, 116.256],
                [-26.07, 122.584],
                [-32.042, 129.061],
                [-29.462, 118.901],
                [-17.357, 126.428],
                [-26.624, 120.38]];

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
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=WhC5T3hrpV09jJwoTpQoyStyWEOoMeVL";
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

  exports.batch24 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
                [-38.016, 135.923],
                [-34.491, 153.492],
                [-27.664, 133.151],
                [-17.485, 140.92],
                [-31.021, 140.174],
                [-20.422, 140.664],
                [-22.348, 152.016],
                [-18.077, 144.825],
                [-27.312, 134.691],
                [-15.419, 139.236],
                [-16.694, 129.707],
                [-16.952, 143.046],
                [-24.91, 141.719],
                [-37.781, 140.564],
                [-33.312, 120.253],
                [-11.406, 129.603],
                [-29.135, 128.664],
                [-25.593, 124.5],
                [-32.81, 139.859],
                [-31.104, 138.857],
                [-31.631, 141.844],
                [-13.668, 149.363],
                [-33.827, 144.297],
                [-34.235, 145.24],
                [-11.528, 146.77],
                [-21.316, 153.635],
                [-31.336, 115.797],
                [-37.648, 148.962],
                [-24.797, 132.861],
                [-26.92, 140.615],
                [-18.407, 141.745],
                [-32.476, 138.177],
                [-34.618, 135.612],
                [-24.668, 130.06],
                [-14.262, 152.133],
                [-34.425, 148.432],
                [-14.803, 147.94],
                [-25.775, 117.719],
                [-15.362, 129.929],
                [-16.417, 149.255],
                [-27.935, 113.869],
                [-23.683, 131.422],
                [-35.473, 143.402],
                [-18.077, 132.865],
                [-31.832, 117.632],
                [-30.643, 146.229],
                [-33.475, 128.458],
                [-16.547, 153.619],
                [-31.895, 138.421],
                [-29.01, 149.119],
                [-24.786, 120.86],
                [-37.897, 114.257],
                [-31.384, 129.865],
                [-31.539, 116.327],
                [-31.918, 120.339],
                [-22.961, 121.864],
                [-25.658, 152.063],
                [-22.548, 140.942],
                [-33.558, 129.325],
                [-28.297, 146.787]];

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
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=WhC5T3hrpV09jJwoTpQoyStyWEOoMeVL";
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

  exports.batch25 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
                [-33.432, 123.193],
                [-33.508, 132.19],
                [-28.605, 116.574],
                [-26.338, 128.946],
                [-31.756, 133.242],
                [-19.463, 121.177],
                [-22.927, 128.928],
                [-11.316, 131.095],
                [-28.919, 134.78],
                [-25.506, 115.362],
                [-38.078, 117.638],
                [-19.998, 128.838],
                [-18.937, 126.276],
                [-23.329, 133.012],
                [-24.03, 145.819],
                [-13.231, 124.342],
                [-31.492, 113.703],
                [-29.605, 138.031],
                [-30.212, 127.809],
                [-18.4, 151.78],
                [-27.774, 148.559],
                [-18.773, 137.146],
                [-24.079, 146.35],
                [-34.705, 114.69],
                [-19.456, 116.432],
                [-16.838, 147.083],
                [-31.287, 123.387],
                [-30.701, 149.01],
                [-33.642, 117.089],
                [-26.661, 136.763],
                [-28.007, 137.811],
                [-30.03, 114.383],
                [-26.77, 122.516],
                [-11.331, 136.454],
                [-22.497, 131.281],
                [-37.542, 150.619],
                [-14.906, 152.452],
                [-26.724, 152.18],
                [-29.714, 144.349],
                [-14.11, 144.934],
                [-24.061, 121.259],
                [-34.636, 118.674],
                [-37.921, 149.477],
                [-16.974, 148.67],
                [-26.298, 133.319],
                [-35.979, 145.977],
                [-18.254, 145.536],
                [-22.933, 137.577],
                [-18.457, 124.763],
                [-32.682, 151.238],
                [-26.594, 132.815],
                [-28.894, 120.533],
                [-35.11, 153.364],
                [-23.955, 138.088],
                [-18.114, 142.773],
                [-36.076, 151.07],
                [-22.319, 151.365],
                [-24.708, 131.546],
                [-22.941, 119.661],
                [-12.568, 152.889]];

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
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=WhC5T3hrpV09jJwoTpQoyStyWEOoMeVL";
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

  exports.batch26 = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [
                [-18.561, 149.56],
                [-12.661, 126.425],
                [-11.683, 133.992],
                [-19.555, 125.004],
                [-19.322, 117.794],
                [-30.765, 142.129],
                [-37.251, 146.868],
                [-15.494, 135.536],
                [-35.543, 149.22],
                [-24.852, 145.983],
                [-29.691, 149.826],
                [-34.167, 141.969],
                [-23.5, 127.935],
                [-38.732, 139.252],
                [-18.545, 127.122],
                [-23.307, 141.085],
                [-20.648, 138.584],
                [-11.324, 126.592],
                [-28.091, 143.432],
                [-21.792, 120.787],
                [-38.734, 116.394],
                [-25.248, 114.429],
                [-24.043, 153.027],
                [-36.416, 136.572],
                [-12.023, 153.523],
                [-15.127, 150.497],
                [-37.149, 141.49],
                [-24.438, 137.475],
                [-12.159, 148.931],
                [-21.51, 115.588],
                [-25.38, 122.525],
                [-34.197, 134.729],
                [-36.78, 117.128],
                [-16.356, 142.173],
                [-33.835, 120.59],
                [-29.553, 134.529],
                [-34.539, 143.645],
                [-37.938, 135.37],
                [-26.543, 116.477],
                [-12.109, 135.862],
                [-19.292, 133.332],
                [-18.315, 123.204],
                [-16.086, 129.366],
                [-37.743, 153.662],
                [-20.402, 148.501],
                [-32.197, 140.237],
                [-28.41, 132.759],
                [-30.874, 135.354],
                [-36.032, 135.32],
                [-23.042, 136.744],
                [-27.667, 129.167],
                [-22.698, 143.312],
                [-17.644, 151.573],
                [-23.225, 124.351],
                [-27.773, 125.625],
                [-31.721, 153.663],
                [-15.988, 125.841],
                [-15.223, 136.392],
                [-25.38, 146.26],
                [-33.305, 126.458]];

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
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=WhC5T3hrpV09jJwoTpQoyStyWEOoMeVL";
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