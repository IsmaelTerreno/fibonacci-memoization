const demo = {
    /**
    * Make the fibonacci number process implementing the 
    * Memoization programming technique which attempts 
    * to increase a function’s performance by caching its 
    * previously computed results.
    * 
    * @param    {integer}   n The fibonacci number to process.
    * @param    {boolean}   debug Flag to show a log of the memoized function contents.
    **/
    fibonacci : (function(n, debug) {
        let memo={};
        function fibonacci_memoized(n){
            let index = JSON.stringify(n);
            if (index in memo) {
              return memo[index];
            } else {
                if (n === 0) {
                    return 0;
                } else if (n === 1) {
                    return 1;
                } else {
                  const computedValue = fibonacci_memoized(n - 1) +
                    fibonacci_memoized(n - 2);
                  if (debug){ console.log(JSON.stringify(memo)); }
                  return (memo[index] = computedValue);
                }
            }
        }
        return fibonacci_memoized;
    })()
};

// 
demo.fibonacci(40, false);
demo.fibonacci(40, true);
