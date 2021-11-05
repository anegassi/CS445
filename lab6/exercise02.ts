
Array.prototype.removeDuplicatesAsync = async () => {
    let arr=this;

    ///how do you return an array?
    await setTimeout( function (resolve) {       
            let removed=[];
            for (let num of arr){
                if (removed.indexOf(num)===-1)
                removed.push(num);
            }
          },500);   
}
console.log('start');

[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log('end');

