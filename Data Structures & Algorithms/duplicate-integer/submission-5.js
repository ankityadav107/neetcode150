class Solution {
    hasDuplicate(nums) {
     
     const map = new Map();

     for(let num of nums){
        if(map.has(num)){
            return true
        }
        map.set(num,true)
     }
    return false;
}
}