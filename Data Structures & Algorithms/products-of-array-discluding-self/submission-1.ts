class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = [];
        const prefixList: number[] = new Array(nums.length).fill(1);
        const postFixList: number[] = new Array(nums.length).fill(1);
        let prefixProduct = 1;
        let postfixProduct = 1;

        for (let i = 0; i < nums.length; i++) {
            prefixList[i] = prefixProduct;
            prefixProduct *= nums[i];
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            postFixList[i] = postfixProduct;
            postfixProduct *= nums[i];
        }
        for (let i = 0; i <nums.length; i++) {
            result[i] = postFixList[i] * prefixList[i];
        }

        return result;
    }
}
