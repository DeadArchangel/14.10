function arrayIntersection(arr1, arr2) {
    return [...new Set(arr1)].filter(num => arr2.includes(num));
}

console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
