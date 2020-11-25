
var dispObj1 = {
    x: 10,
    y: 45,
    hp: {
        current: 10
    }
};

var dispObj2 = {
    x: 10,
    y: 45,
    hp: {
        current: 10
    },
    features: {
        autoHeal: {
            amount: 10
        }
    }
};

var applyAutoHeal = function (dispObj) {
    if (dispObj.features) {
        if (dispObj.features.autoHeal) {
            if (dispObj.features.autoHeal.amount) {
                dispObj.hp.current += dispObj.features.autoHeal.amount;
            }
        }
    }
};

applyAutoHeal(dispObj1);
applyAutoHeal(dispObj2);

console.log(dispObj1.hp.current, dispObj2.hp.current); // 10 20