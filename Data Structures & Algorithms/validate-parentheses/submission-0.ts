class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        const keyMap = new Map<string, string>([
            [")", "("],
            ["]", "["],
            ["}", "{"],
        ]);

        for (const char of s) {
            const open = keyMap.get(char);
            if (open) {
                if (stack.pop() !== open) return false;
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
