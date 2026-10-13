class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let totalWaterUnit: number = 0;

        let leftMax: number = 0;
        let rightMax: number = height[height.length - 1];
        let left: number = 0;
        let right: number = height.length - 1;

        while (left <= right) {
            if (leftMax <= rightMax) {
                leftMax = Math.max(leftMax, height[left]);
                totalWaterUnit += leftMax - height[left];
                left++;
            } else {
                rightMax = Math.max(rightMax, height[right]);
                totalWaterUnit += rightMax - height[right];
                right--;
            }
        }
        return totalWaterUnit;
    }
}
