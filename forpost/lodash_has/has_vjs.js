
let has = (obj, path) => {
    try {
        let keys = path.split('.');
        // console.log(keys);

        let t = obj;
        keys.forEach((key, i) => {

            t = t[key];

            console.log(key)
            console.log(t);

            /*
            if(i === keys.length-1){

            console.log(key);
            console.log(t);

            }*/
        });

        if (obj) {
            //if(key in obj){
            return true;
            //}
        }

    } catch (e) {
        console.log(e.message)
        return false;
    }
    return false;
};

let ctx = {
    draw: {
        arc: undefined
    }
};

console.log(has(ctx, 'draw.arc')); // true
//console.log(has(ctx, 'draw.foo')); // false
//console.log(has(ctx, 'draw.foo.bar')); // false
