function recursion(n){
    if (n > 0){
        recursion(n - 1);
        console.log(n);
        recursion(n - 2);
    }
}

recursion(4);