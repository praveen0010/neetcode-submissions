class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowList = Array.from({ length: 9 }, () => new Set());
        const colList = Array.from({ length: 9 }, () => new Set());
        const subBoxList = Array.from({ length: 9 }, () => new Set());

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === ".") continue;
                if (
                    rowList[i].has(board[i][j]) ||
                    colList[j].has(board[i][j]) ||
                    subBoxList[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(board[i][j])
                ) {
                    return false;
                }

                rowList[i].add(board[i][j]);
                colList[j].add(board[i][j]);
                subBoxList[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(board[i][j]);
            }
        }
        return true;
    }
}
