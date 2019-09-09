let once = (func) => {
    let calls = 1;
    return function(){
        if (calls > 0) {
            func.apply(null, arguments);
            calls--;
        }
    };
};

let trap = once((mess) => {
        console.log(mess);
    });

trap('okay'); // 'okay' logged to the console
trap('nope'); // (nothing)
