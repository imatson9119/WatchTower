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

exports.sendMail = functions.https.onRequest((req : any, res : any) => {
    cors(req, res, () => {
        (async () => {

            let locations = [[-12.471235,133.471387],
            [-12.471235,142.8574315],
            [-17.520864666666668,124.0853425],
            [-17.520864666666668,128.77836474999998],
            [-17.520864666666668,133.471387],
            [-17.520864666666668,138.16440925],
            [-17.520864666666668,142.8574315],
            [-22.570494333333336,114.699298],
            [-22.570494333333336,119.39232025],
            [-22.570494333333336,124.0853425],
            [-22.570494333333336,128.77836474999998],
            [-22.570494333333336,133.471387],
            [-22.570494333333336,138.16440925],
            [-22.570494333333336,142.8574315],
            [-22.570494333333336,147.55045374999997],
            [-27.620124,114.699298],
            [-27.620124,119.39232025],
            [-27.620124,124.0853425],
            [-27.620124,128.77836474999998],
            [-27.620124,133.471387],
            [-27.620124,138.16440925],
            [-27.620124,142.8574315],
            [-27.620124,147.55045374999997],
            [-27.620124,152.243476],
            [-32.669753666666665,119.39232025],
            [-32.669753666666665,124.0853425],
            [-32.669753666666665,128.77836474999998],
            [-32.669753666666665,133.471387],
            [-32.669753666666665,138.16440925],
            [-32.669753666666665,142.8574315],
            [-32.669753666666665,147.55045374999997],
            [-32.667581, 152.178911],
            [-36.178961, 149.589544],
            [-37.71938333333334,142.8574315],
            [-37.71938333333334,147.55045374999997],
            [-37.71938333333334,152.243476],
            [-41.271737, 145.360330],
            [-42.769013,147.55045374999997]];

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
                const queryString = '?lat=' + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,wind_direction:degrees,fire_index&apikey=RKirrS8unzFgPtQWVChPhMzdnjhTpJmE";
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