"use strict";
Array.prototype.removeDuplicatesAsync = () => {
    let arr = this;
    new Promise(function (resolve) {
        let removed = [];
        for (let num of arr) {
            if (removed.indexOf(num) === -1)
                removed.push(num);
        }
        setTimeout(() => resolve(removed), 0);
    }).then(result => console.log(result));
};
console.log('start');
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log('end');
