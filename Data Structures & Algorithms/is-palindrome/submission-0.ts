class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const newString=s.toLowerCase().replace(/[^a-z0-9]/g,"");
        let i=0;
        let j=newString.length-1;
        while(i<j){
            if(newString[i]!==newString[j])return false;
            i++
            j--
        }
        return true;
    }
}
