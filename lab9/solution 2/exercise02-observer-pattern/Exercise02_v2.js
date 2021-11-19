/**
 * 
 */
class Subject {
    observers = [];

    on(event, fn) {
        if (!this.observers[event]) {
            this.observers[event] = [fn];
        } else {
            this.observers[event].push(fn);
        }
    }

    emit(event, message) {
        if (this.observers[event]) {
            this.observers[event].forEach(fn => fn(message));
        }
    }

    off(event, fn) {
        this.observers[event] = this.observers[event].filter(f => f !== fn);
    }

}

const subject = new Subject();
subject.on('eat', console.log);    // register an observer
subject.on('study', console.log);  // register an observer

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
 //output for Line above: subject.emit('study', 'cs445');
 // cs445
 // foo: cs445