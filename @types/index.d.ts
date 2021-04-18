declare function uniqueId(minified: boolean = false): string {
  declare const _char: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  declare const _Date: Date = new Date();
  declare const _year: number = _Date.getFullYear();
  declare const _mnth: string = (_Date.getMonth()+1).toString().padStart(2,0);
  declare const _date: string = _Date.getDate().toString().padStart(2,0);
  declare const _hour: string = _Date.getHours().toString().padStart(2,0);
  declare const _mins: string = _Date.getMinutes().toString().padStart(2,0);
  declare const _idArr = [_year,_mnth,_date,_hour,_mins];
  declare const _randomId36 = function(): string{
    declare const __randomHex: string[] = [];
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

export default uniqueId;