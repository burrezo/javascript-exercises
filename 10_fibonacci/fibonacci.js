const fibonacci = function(member) {
    const fibo = [1,1];

    if (member < 0) return 'OOPS';

    else if (member > 2){
        for(let i=2; i <= (member-1); i++){
            fibo.push(fibo[i-2]+fibo[i-1]);
        }
    }
//    console.table(fibo); 
    return fibo[member-1];
};

// console.log(fibonacci(25));

// Do not edit below this line
module.exports = fibonacci;
