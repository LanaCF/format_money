const num1 = '28374234'; 
const num2 = '2725.36'; 
const num3 = '24563365735.5'; 

console.log(formatMoney(num1)); // 28,374,234
console.log(formatMoney(num2)); // 2,725.36
console.log(formatMoney(num3)); // 24,563,365,735.5

function formatMoney(num) {
    let s = '';

    if (num.includes('.')) {
        let arr = num.split('.');
        format(arr[0]);

        s = s + '.' + arr[1];

    } else { 
        format(num);
    }

    return s;

    function format(array) {
        s = ',' + array.slice(-3);
        let i = -3;
    
        while (i > -array.length) {
            let m = (',' + array.slice(i - 3, i));
            s = m + s;
    
            i -= 3;
        }
    
        if (s.startsWith(',')) {
            s = s.slice(1);
        }
    
        return s;
    }
}

