/* 
    Assumptions: 
        - Since input is any integer, I will assume negative integers can be passed as input as well.
        - If a negtive integer is passed as input, it will be assumed that it is asking for summation to 0
          E.g. sum_to_n(-5) === -5 + -4 + -3 + -2 + -1 === -15  
*/

/* 
    The first solution use the math summation formula (Σn = n*(n+1)/2) to compute result.
    Math Summation Formula Link: https://www.cuemath.com/summation-formulas/

    Time complexity: O(1) 
*/
var sum_to_n_a = function(n) {
    if(n >= 0)
    {
        return n*(n+1)/2
    }else{
        /* 
            Summation of negative numbers can be calculated by using the sum from their postive counter parts
            E.g. sum_to_n(-5) === -5 + -4 + -3 + -2 + -1 === -1(5 + 4 + 3 + 2 + 1) === -1(sum_to_n(5))
        */
       const posN = -1 * n
       const sum = -1 * sum_to_n_a(posN)
       return sum
    }
};

/* 
    The second solution uses recursion

    Array.prototype.reduce() could have been used here since it is also a recursive function, 
    however I decided not to use it because I wanted to make the code more readable.

    Time complexity: O(n) as n function calls will be made and each function call will be solved in constant time. 
*/

var sum_to_n_b = function(n) {
    if(n === 0)
    {
        return 0
    }
    else if(n > 0)
    {
        return n + sum_to_n_b(n-1)
    }
    else{
        return n + sum_to_n_b(n+1) //This is for negative numbers
    }
};

/* 
    The third solution is a normal C style for loop

    Time complexity: O(n) as there will n loops. 
*/

var sum_to_n_c = function(n) {
    let sum = 0;

    if(n >= 0){
        for(let i = 1; i <= n; i++)
        {
            sum += i;
        }
        return sum   
    }else{
        for(let i = -1; i >= n; i--)
        {
            sum += i;
        }
        return sum
    }
};

/* 
Used for testing 

console.log(sum_to_n_a(-15))
console.log(sum_to_n_b(5))
console.log(sum_to_n_c(-5)) 
*/