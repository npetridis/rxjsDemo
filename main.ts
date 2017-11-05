import {Observable} from 'rxjs';

let array = ['1', '5', '10'];
let source = Observable.from(array);



source.subscribe((v) => console.log(v), (e) => {console.log(e)}, () => console.log('completed'));
