declare function uniqueId(minified: boolean = false): string {
  const _char: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const _Date: Date = new Date();
  const _year: number = _Date.getFullYear();
  const _mnth: string = (_Date.getMonth()+1).toString().padStart(2,0);
  const _date: string = _Date.getDate().toString().padStart(2,0);
  const _hour: string = _Date.getHours().toString().padStart(2,0);
  const _mins: string = _Date.getMinutes().toString().padStart(2,0);
  const _idArr = [_year,_mnth,_date,_hour,_mins];
  const _randomId36 = function(): string{
    const __randomHex: string[] = [];
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

if (typeof define === "function" && define.amd) {
  define(() => {
    return uniqueId;
  });
} else if (typeof exports === "object") {
  module.exports = uniqueId;
} else {
  global.dateFormat = uniqueId;
}