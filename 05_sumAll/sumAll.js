const sumAll = function(start,end) {
    if((start<0 || end <0) || typeof(start)!="number" || typeof(end)!="number") return "ERROR"
    var sum=0
    var s=Math.min(start,end)
    var e=Math.max(start,end)
    while(s<=e){
        sum+=s
        s++
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
