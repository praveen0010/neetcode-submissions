class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean 
    {
        const tempSet=new Set<number>();
        for(let i=0;nums.length>i;i++){
            if(tempSet.has(nums[i])){
                return true
            }
            tempSet.add(nums[i])

        }
        return false;   
    }
}
