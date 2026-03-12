function solution(slice, n) { 
    let neededSlice = 0;
    let neededPizza = 0;
    
    while(neededSlice < n){
        neededSlice += slice;
        neededPizza++;
    }
        
        
    return neededPizza;
}