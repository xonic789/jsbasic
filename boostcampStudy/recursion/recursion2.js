function func(n){
    if (n <= 0){
        return 0;
    }else {
        console.log("hello");
        return n + func(n - 1);
    }
}

console.log(func(4));