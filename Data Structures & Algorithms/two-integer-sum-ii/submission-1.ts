class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left: number = 0;
        let right: number = numbers.length - 1;

        while (left < right) {
            const currentSum: number = numbers[left] + numbers[right];
            if (currentSum === target) return [left + 1, right + 1];
            if (currentSum > target) {
                right--;
            }
            if (currentSum < target) {
                left++;
            }
        }
        return [];
    }
}
