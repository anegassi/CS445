newReverseAsync =  async function(arr) {
    // Reverse in-place
    
   return new Promise(function(resolve,reject){
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
    })


    
};

Array.prototype.newReverse=async function(){
    let arr=this;
    let result= await newReverseAsync(arr);
    console.log(result)

}

Array.prototype.newReverse2 = async function() {
    // Reverse using auxiliary array
    let arr=this;
    return new Promise(function(resolve,reject){
        const revArr = [];
        let j = arr.length - 1;
        while(j >= 0) {
            revArr.push(arr[j]);
            --j;
        }
        resolve(revArr)
    })
    
    
};

console.log(`start`);
[1, 3, 6, 2].newReverse2().then( revArr=>console.log(revArr));
[1, 3, 6, 2].newReverse();
console.log(`end`);