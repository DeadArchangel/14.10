function wordFrequency(str) {
    let words = str.toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
    let result = {};

    for (let word of words) {
        result[word] = (result[word] || 0) + 1;
    }

    return result;
}

console.log(wordFrequency("кот собака кот попугай собака кот"));
