const palindromes = function (palind) {
    let palindLowerc = palind.toLowerCase().split('').filter(char => char.match(/[a-z]/));
    let palindLowercRev = [...palindLowerc];
    palindLowercRev.reverse();

    // console.table(palindLowerc);
    // console.table(palindLowercRev);

    for(let i = 0; i < palindLowerc.length; i++){
        // console.log(palindLowerc[i], palindLowercRev[i]);
        if(palindLowerc[i] !== palindLowercRev[i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
