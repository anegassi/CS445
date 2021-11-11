Array.prototype.newReverse = function() {
    // Reverse in-place
    let arr=this;
    new Promise(function(resolve,reject){
       setTimeout(()=>{
        let i = 0;
        let j = arr.length - 1;
        while(i < j) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            --j;
            }
            resolve(arr)
        }
           ,500);
    }).then(result=>console.log(result));
    
};

Array.prototype.newReverse2 = function() {
    // Reverse using auxiliary array
    let arr=this;
    new Promise(function(resolve,reject){
        const revArr = [];
        let j = arr.length - 1;
        while(j >= 0) {
            revArr.push(arr[j]);
            --j;
        }
        resolve(revArr)
    }).then( revArr=>console.log(revArr))
    
    
};

console.log(`start`);
[1, 3, 6, 2].newReverse2();
[1, 3, 6, 2].newReverse();
console.log(`end`);