/**
 * 
 * @param {Boolean} minified
 * @returns {String} Returns a simple string id in the format YYYYDDMMHHii{Base36}
 */
 function uniqueId(minified = false) {
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

if( typeof module === 'undefined' ){
  export default uniqueId;
}else{
  module.exports = uniqueId;
}