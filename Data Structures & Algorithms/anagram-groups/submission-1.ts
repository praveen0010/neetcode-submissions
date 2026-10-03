class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const seenMap = new Map();
        for (const s of strs) {
            const frequencyCount = new Array(26).fill(0);
            for (let i = 0; i < s.length; i++) {
                frequencyCount[s.charCodeAt(i) - 97]++;
            }
            const key = frequencyCount.join(",");
            const group = seenMap.get(key);
            if (group) {
                group.push(s);
            } else {
                seenMap.set(key, [s]);
            }
        }
        return Array.from(seenMap.values());
    }
}
