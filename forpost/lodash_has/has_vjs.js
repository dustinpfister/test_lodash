
let has = (obj, path) => {
    try {
        let keys = path.split('.');
        console.log(keys);
		return true;
    } catch (e) {
        return false;
    }
};

let ctx = {
    draw: {
        arc: true
    }
};

console.log( has(ctx,'draw.arc') );
