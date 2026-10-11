class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowList = Array(9).fill(0);
        const colList = Array(9).fill(0);
        const boxList = Array(9).fill(0);
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] === ".") continue;
                const mask = 1 << (Number(board[i][j]) - 1);
                if (
                    rowList[i] & mask ||
                    colList[j] & mask ||
                    boxList[Math.floor(i / 3) * 3 + Math.floor(j / 3)] & mask
                ) {
                    return false;
                }
                rowList[i] |= mask;
                colList[j] |= mask;
                boxList[Math.floor(i / 3) * 3 + Math.floor(j / 3)] |= mask;
            }
        }

        return true;
    }
}
