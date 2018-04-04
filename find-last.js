// Find last ES6
// Returns the last element for which the provided function returns a truthy value
const findLast = (a, f) => a
                            .filter(f)
                            .slice(-1)[0];
// Example
findLast(
    [2, 4, 6, 8], 
    n => n % 4 === 2
) // 6

/**
 * Remember to Subscribe on YouTube
 * for live coding show or content
 * just like this:
 * http://codetap.io/youtube
 */


















