function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    if (num === 0) return ""; // No roman numeral for 0

    let result = "";

    // Roman numeral special cases
    const specials = {
        900: 'CM', 400: 'CD', 90: 'XC', 40: 'XL', 9: 'IX', 4: 'IV'
    };

    // Merge specials into sequence for correct order
    const values = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    for (let [value, symbol] of values) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result.toUpperCase();
}

// Example test cases
console.log(convertToRoman(14));   // XIV
console.log(convertToRoman(798));  // DCCXCVIII
console.log(convertToRoman(36));   // XXXVI

module.exports = convertToRoman;
