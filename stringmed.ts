// 451. Sort Characters By Frequency
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s, sort it in decreasing order based on the frequency of the characters.The frequency of a character is the number of times it appears in the string.

// Return the sorted string.If there are multiple answers, return any of them.



function frequencySort(s: string): string {
    let newstring = ""
    const map = new Map<string, number>()
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
    for (const [char, freq] of sorted) {
        newstring.repeat(freq);
    }
    return newstring

};


frequencySort("atree")