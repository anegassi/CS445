// Create an observable that emits 'Hello' and 'World'
import { Observable, of} from "rxjs"; 
const hello = Observable.create(function(observer) {
        observer.next('Hello');
        observer.next('World');
        observer.complete();
    });
    
    //Subscription
     hello.subscribe({
        next: x => console.log('Observer got a next value: ' + x),
        error: err => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification'),
    });
    