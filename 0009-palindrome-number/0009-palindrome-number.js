/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result = 0
    let temp = x

    if(temp < 0){
        return false
    }

    while (temp>0){

    let palingKanan = temp % 10
    result = (result*10) + palingKanan 
    temp = Math.floor(temp/10);
    
    }
    console.log('res = ', result, 'x= ', x)
    
    return result === x

};