function numStr(arr:(number|string)[]):number|string|number[]{

    if(arr.every(num=>typeof num ==="number"))
    {
        return arr.reduce((sum,num)=>sum+num,0);
    }
    if(arr.every(str=>typeof str==="string"))
    {
        return arr.join(" ")
    }
    else{
        return arr.filter(elem=>typeof elem ==="number").sort((a,b)=>a-b);
    }
    
}

console.log(numStr(["ahmed","ali"]));
console.log(numStr([1,2,3,4,5]));
console.log(numStr(["ahmed",-2,"ali",-100,2,3,1,0]));