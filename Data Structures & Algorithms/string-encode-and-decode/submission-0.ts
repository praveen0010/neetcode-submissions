class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedString: string = "";
        for (let str of strs) {
            encodedString = encodedString + str.length + "#" + str;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let i: number = 0;
        const decodedList: string[] = [];
        while (i < str.length) {
            const delimiterIndex: number = str.indexOf("#", i); //1
            const length: number = Number(str.slice(i, delimiterIndex));
            const start: number = delimiterIndex + 1;
            const end: number = start + length;
            const decodedString: string = str.slice(start, end);

            decodedList.push(decodedString);
            i = end;
        }
        return decodedList;
    }
}
