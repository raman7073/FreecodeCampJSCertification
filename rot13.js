function rot13(str) {
    let result = "";
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let i = 0;
    let j = str.length;
    while (i < j) {
        let idx = alpha.indexOf(str[i]);
        if (idx == -1) {
            result += str[i];
        } else {
            let newIndex = (idx + 13) % 26;
            result += alpha[newIndex];
        }
        i++;
    }
    return result;
}

rot13("SERR PBQR PNZC");