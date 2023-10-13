const curUnit = [
    ["PENNY", 1],
    ["NICKEL", 5],
    ["DIME", 10],
    ["QUARTER", 25],
    ["ONE", 100],
    ["FIVE", 500],
    ["TEN", 1000],
    ["TWENTY", 2000],
    ["ONE HUNDRED", 10000]
]
function checkCashRegister(price, cash, cid) {

    let amountToReturn = Math.round(cash * 100) - Math.round(price * 100);
    let status = '';
    let changeToGive = {};
    let changeInHand = {};
    let change = [];
    // console.log(amountToReturn);
    cid.forEach(ele => {
        changeInHand[ele[0]] = Math.round(ele[1] * 100);
    });
    let index = curUnit.length - 1;


    while (index >= 0) {
        let moneyName = curUnit[index][0];
        let moneyValue = curUnit[index][1];
        //console.log(moneyValue,moneyName);
        if (amountToReturn - moneyValue > 0) {
            changeToGive[moneyName] = 0;
            while (changeInHand[moneyName] > 0 && amountToReturn >= moneyValue) {
                amountToReturn -= moneyValue;
                // console.log(amountToReturn,moneyValue)
                changeToGive[moneyName] += moneyValue;
                changeInHand[moneyName] -= moneyValue;
            }
            changeToGive[moneyName] = changeToGive[moneyName] / 100;
        }
        index -= 1;
    }
    console.log(amountToReturn)
    // console.log(changeToGive);
    //return change;

    if (amountToReturn === 0) {
        let isRegisterEmpty = 0;
        Object.keys(changeInHand).map(function (moneyType) {
            //console.log(changeInHand[moneyType])
            if (changeInHand[moneyType] !== 0) {
                isRegisterEmpty |= 1;

            };
        });
        if (isRegisterEmpty) {
            status = "OPEN";
            Object.keys(changeToGive).map(function (moneyType) {
                change.push([moneyType, changeToGive[moneyType]]);
            });
            return { 'status': status, 'change': change };
        } else {
            status = "CLOSED";
            Object.keys(changeInHand).map(function (moneyType) {
                change.push([moneyType, changeInHand[moneyType]]);
            });


            return { 'status': status, 'change': cid };
        }
    }
    return { 'status': 'INSUFFICIENT_FUNDS', 'change': change };
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);