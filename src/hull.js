{
  'use strict';

  const {
    assert, def, addArrayMethod
  } = Array.prototype._helper;
  
  const hulljs = require('hull.js');

  addArrayMethod('hull', function(concav) {
    if ( !this._data_cube ||
         this._s[1] !== 2 ||
         this._s[2] !== 1
       ) throw Error('invalid points');
    if (this._s[0] === 0) throw Error('at least one point expected');
    concav = def(assert.single(concav), 20); 
    return hulljs(this.arAr(), concav).matrix();
  });
  
}