
let ticker = (opt) => {
    let noop = () => undefined;
    opt = opt || {};
    opt.i = opt.i === undefined ? 0 : opt.i;
    opt.iMax = opt.iMax === undefined ? opt.i + 10 : opt.iMax;
    opt.onTick = opt.onTick || noop;
    opt.onEven = opt.onEven || noop;
    opt.onEnd = opt.onENd || noop;
    let over = false;
    return () => {
        if (opt.i < opt.iMax) {
            opt.onTick(opt);
            if (opt.i % 2 == 0 && opt.i != 0) {
                opt.onEven(opt);
            }
            opt.i += 1;
        } else {
            if (!over) {
                opt.onEnd(opt);
                over = true;
            }
        }
    };
};

let t = ticker({
        onEven: function (opt) {
            console.log(opt.i);
        }
    });

let i = 10;
while (i--) {
    t();
}
