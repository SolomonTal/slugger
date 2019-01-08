const marker = require('@ajar/marker');
const slugger = require('./index')

marker.magenta(slugger.slugger('i am a slugger', 'and me too'));