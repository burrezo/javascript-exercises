const removeFromArray = function(arr, ...args) {
    let narr = [];

    let sprArgs = [...args];

    for (let sprArgsItem of sprArgs) {
     
        for (const[index, arrItem]  of arr.entries()) {
            
            if (arrItem === sprArgsItem) {
                delete arr[index];
            } 
        }
    }
    
    narr = arr.filter(function(elem){
        return elem !== undefined;
    });

    return narr;
};

// Do not edit below this line
module.exports = removeFromArray;