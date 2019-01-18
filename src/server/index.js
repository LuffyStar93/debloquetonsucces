const port = 9999;
const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db.config.js");
const api = require("./apis")(db, ["user", "product"]);
const cors = require("cors");
var fs = require('fs');

app.use(cors());
app.use(bodyParser.json());
app.use(`/api/v${api.version}`, api.routers);
//ci-dessus prefixer chaque route des API par api/v1/ + associer routers à l'app
app.set("trust proxy", true);

app.get("/", (req, res) => {
    res.send("root@my-api");
});


// CODE API EXTERNE 

// const filterGameWithoutAchievements = function filterGameWithoutAchievements(arr) {
//     return arr.filter(el => {
//         return Number(el.numOfAchievements>0)
//     });
// };

// const filterBadIds = function filterBadIds(ids) {
//     return ids.filter(id => {
//         return !id.match("-");
//     });
// }

// const getGamesIds = function getGamesIds() {
//     return new Promise((resolve, reject)  => {
//         axios.get("https://api.achievementstats.com/games/?key=1085bed860429488376615821").then(function (res) {
//             resolve(res.data)
//         }).catch(err => {
//             reject(err);
//         });
//     });
// };

// const getGameById = function getGameById(id) {
//     const url = "https://api.achievementstats.com/games/" + id + "/?key=1085bed860429488376615821";
//     return new Promise((resolve, reject)  => {
//         axios.get(url).then(function (res) {
//             resolve(res.data)
//         }).catch(err => {
//             reject(err);
//         });
//     });
// };

// const writeGamesOnDisk = function writeGamesOnDisk(games) {
//     var json = JSON.stringify(games);
//     fs.writeFile('./listejeux.json', json, 'utf8', (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//     });
// };

// const filteredIdsInterval = function filteredIdsInterval(filteredIds, clbk){
//     filteredIds.forEach(id => {
//         getGameById(id).then(game => {
//             clbk(game);
//         }).catch(err => {
//             console.error("error @getGameById", err);
//         });
//     });
// };

// const stopParsing = function stopParsing(interval, games) {
//     clearInterval(interval);
//     const finalGames = filterGameWithoutAchievements(games);
//     console.log("games length", games.length);
//     try {
//         writeGamesOnDisk(finalGames);
//     } catch(err) {
//         console.error(err);
//     }
// }

// //Initialisation JEUX
// console.log("un\n");

// getGamesIds().then(ids => {
//     // console.log("ids", ids);
//     // const x = [allIds[30], allIds[31], allIds[32], allIds[13210],allIds[13230],allIds[13240],allIds[13250],allIds[13260],allIds[13500],allIds[13510],allIds[13520]]
//     console.log("dos\n");
//     let limit = 1200;
//     let games = [];
//     let filteredIds = filterBadIds(ids);
//     var lastIndex = null;

//     let interval = setInterval(() => {
//         console.log("tres(interval)\n");
//         const ids = filteredIds.slice(lastIndex || 0, lastIndex ? lastIndex + 600 : 600);

//         filteredIdsInterval(ids, (game) => {// function +> game est le résultat du callback passé à filteredIdsInterval
            
//             games.push(game);

//             if (games.length >= limit) {
//                 console.log("mariaaaaa\n");
//                 stopParsing(interval, games);
//             }
//         });
    
//         lastIndex += 600;

//     }, 5000)

// }).catch(err => {
//     console.error("error @getGamesIds", err);
// })

// console.log("un\n");

// getGamesIds().then(ids => {
//     // console.log("ids", ids);
//     // const x = [allIds[30], allIds[31], allIds[32], allIds[13210],allIds[13230],allIds[13240],allIds[13250],allIds[13260],allIds[13500],allIds[13510],allIds[13520]]
//     console.log("dos\n");
//     let limit = 1200;
//     let games = [];
//     let filteredIds = filterBadIds(ids);
//     var lastIndex = null;

//     let interval = setInterval(() => {
//         console.log("tres(interval)\n");
//         const ids = filteredIds.slice(lastIndex || 0, lastIndex ? lastIndex + 600 : 600);

//         filteredIdsInterval(ids, (game) => {// function +> game est le résultat du callback passé à filteredIdsInterval
            
//             games.push(game);

//             if (games.length >= limit) {
//                 console.log("mariaaaaa\n");
//                 stopParsing(interval, games);
//             }
//         });
    
//         lastIndex += 600;

//     }, 5000)

// }).catch(err => {
//     console.error("error @getGamesIds", err);
// })



// ROUTE BACK API EXTERNE

app.get("/external_api/games", (req, res) => {    
    var data  = fs.readFile(__dirname + "/listejeux.json", (err, data) =>{
        if (err) {
            console.log(err);
        } else {
            // console.log(data);
            
            res.send(data.toString());
        }
     })


});
console.log("node server running @ http://localhost:" + port);

app.listen(port);