class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequenceMap = new Map<number, number>();
        const result = [];
        for (const num of nums) {
            if (frequenceMap.has(num)) {
                frequenceMap.set(num, frequenceMap.get(num) + 1);
            } else {
                frequenceMap.set(num, 1);
            }
        }
        const sorteByFrequence = [...frequenceMap.entries()].sort((a, b) => b[1] - a[1]);
        for (let i = 0; i < k; i++) {
            result.push(sorteByFrequence[i][0]);
        }
        return result;
    }
}
