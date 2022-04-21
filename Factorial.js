function factorialize(num) {
    if(i=== 0 || i === 1){
      return 1;
    }
    for(var i = num-1; i >= 1; i-- ){
      num = num * i;
    }
    return num;
  }
  factorialize(5);