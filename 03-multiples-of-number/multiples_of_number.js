// define your function here

// const multiplesof = '';

// for (const i = 0; i =>12; i++) {
//   multiplesof = multiplesof + i;
// }

// console.log(multiplesof);

const multiplesOf = (number, limit)=>{
    multiples = [];
    for (i=0; i<limit; i++){
        if (i%number === 0){
            multiples.push(i);
        }
       
    }
    return multiples;
}


multiplesOf(2,20);
console.log(multiples);