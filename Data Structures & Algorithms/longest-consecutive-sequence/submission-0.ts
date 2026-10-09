class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let maxSequenceCount:number=0;
        const uniqueNums=new Set<number>(nums);
        for (const num of uniqueNums){
            if(uniqueNums.has(num-1))continue;
            let i=num;
            let localMaxCount:number=1;
            while(uniqueNums.has(i+1)){
                localMaxCount+=1;
                i++;
            };
            maxSequenceCount=Math.max(maxSequenceCount,localMaxCount)
        }
        return maxSequenceCount;
    }
}
