function palindrome(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        if ((str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) || (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90)) {
            ans += str[i];
        }
    }
    //console.log(ans);
    ans = ans.toLowerCase();
    console.log(ans);
    let i = 0, j = ans.length - 1;
    while (i < j) {
        if (ans[i] != ans[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

palindrome("eye");