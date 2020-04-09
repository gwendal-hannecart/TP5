function abs(numbers){
    let result=numbers.map(function(numbers){
        return Math.abs(numbers);
    })
    return result;
}

function evenOnly(array){
    let result=array.filter(function(array){
        return array%2==0;
    })
    return result;
}

function sum(array){
    let result=array.reduce(function(avg,array){
        return avg+array;
    })
    return result;
}

function flatten2D(array){
    let tab=array.join();
    let tab2=tab.split(",");
    console.log(tab2);
    let result=array.map(function(tab2){
       return parseInt(tab2);
    })
    return result;
}