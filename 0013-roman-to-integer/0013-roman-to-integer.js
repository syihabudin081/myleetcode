/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let dic = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
        }

let result = 0

        for(let i = 0; i<s.length;i++){
        let roman = s[i]
        let romanAft = s[i+1]

        if(dic[roman] < dic[romanAft] && romanAft != undefined) {
        result = result + (dic[romanAft] - dic[roman])
        i++
        }

        else{
        result = result + dic[roman]    
        }
          

        }
    
    return result
};