Array.prototype.newReverse = function() {
    // Reverse in-place
    let i = 0;
    let j = this.length - 1;
    while(i < j) {
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
        i++;
        --j;
    }
    console.log(this);
};

Array.prototype.newReverse2 = function() {
    // Reverse using auxiliary array
    const revArr = [];
    let j = this.length - 1;
    while(j >= 0) {
        revArr.push(this[j]);
        --j;
    }
    console.log(revArr);
};

console.log(`start`);
[1, 3, 6, 2].newReverse2();
console.log(`end`);