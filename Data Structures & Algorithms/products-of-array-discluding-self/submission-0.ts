class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const outputList: number[] = new Array(nums.length);
        let initialProduct: number = 1;
        for (let i = 0; i < nums.length; i++) {
            outputList[i] = initialProduct;
            initialProduct *= nums[i];
        }
        initialProduct=1
        for (let j = nums.length - 1; j >= 0; j--) {
            outputList[j] *= initialProduct;
            initialProduct *= nums[j];
        }
        return outputList;
    }
}
