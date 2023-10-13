function convertToRoman(num) {
    let numeralMapper = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    }
    let keys = Object.keys(numeralMapper).reverse();
    let ans = '';
    keys.forEach(ele => {
        while (ele <= num) {
            ans += numeralMapper[ele];
            num -= ele;
        }

    });
    console.log(ans)
    return ans;
}

convertToRoman(36);