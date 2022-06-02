const { reject } = require("lodash");

const promise = new Promise((resolve, reject) => {
    resolve([10,15,20]);
    resolve()
});