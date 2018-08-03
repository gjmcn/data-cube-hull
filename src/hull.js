{
  'use strict';
  
  const {
    assert, def, addArrayMethod
  } = Array.prototype._helper;
  
  const concaveman = require('concaveman');
  
  addArrayMethod('hull', function(concav, thresh) {
    if ( !this._data_cube ||
         this._s[1] !== 2 ||
         this._s[2] !== 1
      ) throw Error('invalid points');
    if (this._s[0] === 0) throw Error('at least one point expected');
    concav = def(assert.single(concav), 2);
    thresh = def(assert.single(thresh), 0);
    return concaveman(this.arAr(), concav, thresh).matrix();
  });

}