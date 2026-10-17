function secondLargest(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);

    return unique.length >= 2 ? unique[1] : null;
}

console.log(secondLargest([10, 5, 8, 10, 3]));
