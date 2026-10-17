function arrayStatistics(arr) {
    let sum = arr.reduce((total, num) => total + num, 0);
    let average = arr.length ? sum / arr.length : 0;

    return { sum, average };
}

console.log(arrayStatistics([2, 4, 6, 8]));
