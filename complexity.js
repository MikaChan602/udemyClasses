function example(n) {
    let counter = 0;
    for(let i = 0; i < 3 * n; i++){
        counter++;
        // 3n
    }
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            counter++;
            // n*n
        }
    }
    counter+=4;
    // 4n
    return(
        counter
    )
}
// f(n)=n*n + 3n +4
// n = input size
// comlexity

// let total = 0;
for(let i = 2 , total=0; i<9 ;i++){
    // console.log(example(i));
    let varEx = example(i)
   console.log('varEx',varEx)
   total += varEx;
   console.log('total',total)
}