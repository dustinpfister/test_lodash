let _ = require('lodash');

let point = {
    x: 40,
    deltas: {
        x: 5
    }
};

let checkPoint = (pt) => {
    if (!_.has(pt, 'x')) {
        _.set(pt, 'x', 0);
    }
    if (!_.has(pt, 'y')) {
        _.set(pt, 'y', 0);
    }

	['x','y'].forEach((key)=>{
		
	let path = 'deltas';
		if(!_.has(pt,path+'.' + key)){
			
			_.set(pt,)
			
		}
		
	})
	
    return pt;
};

console.log(checkPoint(point));
