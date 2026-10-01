class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length!==t.length)return false;
        const newMap=new Map<string,number>()
        for(const char of s){
            newMap.set(char,(newMap.get(char)??0)+1)
        }
        for(const char of t){
            const currentTarget=newMap.get(char);
            if(!currentTarget)return false;
            newMap.set(char,currentTarget-1)
        }
        return true
    }
}
