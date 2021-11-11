
// async function removedup(arr){
//     return  new Promise(function (resolve, reject) {       
//         let removed = [];
//         //console.log(arr);
//         for (let num of arr) {
//             if (removed.indexOf(num) === -1)
//                 removed.push(num);
//         }
//         setTimeout(()=>resolve(removed), 0);
//         //resolve(removed);
// });
// }

// Array.prototype.removeDuplicatesAsync = async function () {
//     let arr=this;

//     ///how do you return an array?
//    let result =await removedup(arr);
// console.log(result);
// }

// console.log(`start`)
// [4,1,5,7,2,3,1,4,6,5,2].removeDuplicatesAsync();
// console.log('end');


/**
 * exercise02.js
 * 
 * @author okalu
 * @since 2021-11-05
 */
 async function removedup(arr) {
    return new Promise(function(resolve, reject) {
         setTimeout(function() {
             let removed = [];
             for(let num of arr) {
                 if(removed.indexOf(num) === -1)
                     removed.push(num);
             }
              //setTimeout(() => resolve(removed), 0);
             resolve(removed);
         }, 1000);
     });
 }
 
 Array.prototype.removeDuplicatesAsync = async function() {
     let arr=this
     let result = await removedup(arr)
     console.log(result)
 }
 
 console.log(`start`)
 const arr = [4,1,5,7,2,3,1,4,6,5,2]
 arr.removeDuplicatesAsync()
 console.log(`end`)
