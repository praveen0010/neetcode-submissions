class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seenMap = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            const neededValue = target - nums[i];
            if (seenMap.has(neededValue)) return [seenMap.get(neededValue)!, i];
            seenMap.set(nums[i], i);
        }
        return [];
    }
}
