/**
 * 
 * @param {Boolean} minified 
 * @returns {String} A random id in the format YYYYDDMM{BASE36}
 */
function uniqueId(minified = false){
  const _char = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const _Date = new Date();
  const _year = _Date.getFullYear();
  const _mnth = _Date.getMonth().toString().padStart(2,0);
  const _date = _Date.getDay().toString().padStart(2,0);
  const _hour = _Date.getHours().toString().padStart(2,0);
  const _mins = _Date.getMinutes().toString().padStart(2,0);
  const _idArr = [_year,_mnth,_date,_hour,_mins];
  const _randomId36 = ()=>{
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
    ].join('')
  } return [
    _idArr.join(''),
    _randomId36()
  ].join('')
}

export default uniqueId;