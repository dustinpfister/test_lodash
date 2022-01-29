let a = ',1,2,3,'.split(',')
.reduce((acc, el) => {
    if(el != ''){
        acc.push(el);
    }
    return acc;
}, [])
.map((el)=>{
    return Math.pow(2, el);
})
.join('-');
console.log(a);
// 2-4-8