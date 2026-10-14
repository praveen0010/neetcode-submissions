class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxWater: number = 0;

        let left: number = 0;
        let right: number = heights.length - 1;
        while (left < right) {
            const width: number = right - left;
            const height: number = Math.min(heights[left], heights[right]);
            const currentWater: number = height * width;
            maxWater = Math.max(maxWater, currentWater);

            if (heights[left] <= heights[right]) left++;
            else right--;
        }
        return maxWater;
    }
}
