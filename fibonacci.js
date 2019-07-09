function fibonacci(x){
    let str=[];
    for (i=0;i<x-1;i++){
    if(i<2){
       str[i]=1;
    }
    else {
       str[i]=str[i-1]+str[i-2];
    }
}
    return str.toString(); 
}

console.log(`x=1: ${fibonacci(1)}`);
console.log(`x=2: ${fibonacci(2)}`);
console.log(`x=3: ${fibonacci(3)}`);
console.log(`x=4: ${fibonacci(4)}`);
console.log(`x=5: ${fibonacci(5)}`);
console.log(`x=6: ${fibonacci(6)}`);