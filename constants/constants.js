'use strict';

let Constants = {
    // Dev
    dbConnection: "mongodb://a3lan_sndbox:Amreen16105@ds249005.mlab.com:49005/heroku_q6njk7dt",

    // Production
    // dbConnection: "mongodb://a3lan_sndbox:Amreen16105@ds249005.mlab.com:49005/heroku_q6njk7dt"

    // JWT Secret
    jwtSecret: "aMfIsgFuUz",

    // 24 Hours - 1 second
    tokenExpiryTime: 85399

};

module.exports = Object.freeze(Constants); // Freeze stops object being modified.