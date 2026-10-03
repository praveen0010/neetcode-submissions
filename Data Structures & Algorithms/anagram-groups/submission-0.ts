class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const seenMap = new Map<string, string[]>();
        for (let i = 0; i < strs.length; i++) {
            const currentSortedString: string = strs[i].split("").sort().join("");
            if (seenMap.has(currentSortedString)) {
                const currentMapValue: string[] = seenMap.get(currentSortedString)!;
                currentMapValue.push(strs[i]);
            } else {
                seenMap.set(currentSortedString, [strs[i]]);
            }
        }
        return Array.from(seenMap.values());
    }
}
