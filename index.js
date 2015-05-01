'use strict';

const autokey = require('autokey');

let message = 'Look at the stars, look how they shine for you...';

let key = 'thisistherealkey';
let key_ = 'thisisafakekey';

let cypher = autokey(key);
let cypher_ = autokey(key_);

let enc = cypher.encodeString(message, 'utf8', 'base64');
let dec = cypher.decodeString(enc, 'base64');
let dec_ = cypher_.decodeString(enc, 'base64');

console.log(enc);
console.log(dec);
console.log(dec_);