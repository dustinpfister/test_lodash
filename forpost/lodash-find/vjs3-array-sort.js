var arr = [
  { name: 'dusty', sex: 'M', online: true},
  { name: 'fran', sex: 'F', online: true},
  { name: 'dustin', sex: 'M', online: false},
  { name: 'duster', sex: 'M', online: false},
  { name: 'dister', sex: 'M', online: false},
  { name: 'dana', sex: 'F', online: true},
  { name: 'dan', sex: 'M', online: false}
];


var strToCodeArray = (str)=>{
  return str.name.split('').map((c)=>{ return c.charCodeAt(0)});
};

var getScore = (str)=>{
  return strToCodeArray(str).reduce((a,b)=>{return a + b;});
}

arr.sort((a,b)=>{
	//console.log(getScore(a));
	
	//if(getScore(a) > getScore(b)){
	//	return -1;
	//}
	
	//if(getScore(a) < getScore(b)){
	//	return 1;
	//}
	//return 0;
	
	
	if(a > b){
		return -1;
	}
	
	if(a <b){
		return 1;
	}
	return 0;
	
});

console.log(arr.slice(0,3));