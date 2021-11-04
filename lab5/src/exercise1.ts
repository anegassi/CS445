const isPrime = (num:number) => {
    return new Promise((resolve,reject)=>{
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0){
            setTimeout(()=>reject(new Error ('{prime:false}')),500); 
        } 
        else{
            setTimeout(()=>resolve('{prime:true}'),500);
        }
   
    })
    
}
console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');



