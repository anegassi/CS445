function multiplyBy10Async(num, callback) {
        setTimeout(callback, 1000, num * 10);
    }
    function withCallback() {
        multiplyBy10Async(5, (num1) => {
            multiplyBy10Async(num1, (num2) => {
                console.log(num2);
            });
        });
    }
    withCallback();
    
    function multiplyBy10Async(num, callback) {
            setTimeout(callback, 1000, num * 10);
        }
        function multiplyBy10Promise(num) {
            return new Promise(function(resolve, reject) {
                multiplyBy10Async(num, (result) => resolve(result));
            });
        }
        async function withAsyncAndAwait() {
            let res1 = await multiplyBy10Promise(5);
            let res2 = await multiplyBy10Promise(res1);
            console.log(res2);
        }
        withAsyncAndAwait();
        
        
            function multiplyBy10Promise2(num) {
                return new Promise(function(resolve, reject) {
            setTimeout(result => resolve(result), 1000, num * 10);
                });
            }
            async function withAsyncAndAwait2() {
                let res1 = await multiplyBy10Promise2(5);
                let res2 = await multiplyBy10Promise2(res1);
                console.log(res2);
            }
            withAsyncAndAwait2();