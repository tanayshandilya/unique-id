/**
 * 
 * @param {Boolean} minified
 * @returns {String} Returns a simple string id in the format YYYYDDMMHHii{Base36}
 */
 function dateId(minified = false) {
  const _char = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const _Date = new Date();
  const _year = _Date.getFullYear();
  const _mnth = (_Date.getMonth()+1).toString().padStart(2,0);
  const _date = _Date.getDate().toString().padStart(2,0);
  const _hour = _Date.getHours().toString().padStart(2,0);
  const _mins = _Date.getMinutes().toString().padStart(2,0);
  const _idArr = [_year,_mnth,_date,_hour,_mins];
  const _randomId36 = function(){
    const __randomHex = [];
      for(let i = 0; i < 8; i++){
          __randomHex.push(
            _char[
              Math.floor(
                Math.random() * _char.length
              )
            ]
          )
      }; return __randomHex.join('');
  };
  if(minified){
    return [
      parseInt(_idArr.join('')).toString(36).toUpperCase(),
      _randomId36()
    ].join('');
  } return [
    _idArr.join(''),
    _randomId36()
  ].join('');
}

/**
 * 
 * @param {Number} length 
 * @returns {String} Returns a random id consisting of [0-9][a-z][A-Z]
 */
function base62Id(length = 12){
  let _char = '0123456789'; let _id = '';
  _char += 'abcdefghijklmnopqrstuvwxyz';
  _char += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < length; i++) {
    _id += _char[Math.floor(Math.random() * _char.length)]    
  }; return _id;
}

/**
 * 
 * @param {Number} length 
 * @returns {String|Number} Returns integer id
 */
function intId(length = 12){
  const _char = '0123456789'; let _id = '';
  for (let i = 0; i < length; i++) {
    _id += _char[Math.floor(Math.random() * _char.length)]    
  }; return (parseInt(_id) <= Number.MAX_SAFE_INTEGER)  ? parseInt(_id): _id;
}

try {
  module.exports = {
    dateId,
    base62Id,
    intId
  }
} catch (error) {
  export {
    dateId,
    base62Id,
    intId
  }
}