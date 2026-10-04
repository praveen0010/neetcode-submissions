class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const result: number[] = [];
        const count = new Map<number, number>();
        const freqList: number[][] = Array.from({ length: nums.length + 1 }, () => []);
        for (let n of nums) {
            count.set(n, (count.get(n) ?? 0) + 1);
        }
        for (let [value, freq] of count) {
            freqList[freq].push(value);
        }
        for (let i = freqList.length - 1; i >= 0 && result.length < k; i--) {
            for (let val of freqList[i]) {
                result.push(val);
            }
        }
        return result;
    }
}
