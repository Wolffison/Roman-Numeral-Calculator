document.addEventListener('DOMContentLoaded', () => {
    const convertButton = document.getElementById('convert-btn');
    const numberInput = document.getElementById('number');
    const outputDiv = document.getElementById('output');

    convertButton.addEventListener('click', () => {
        const number = parseInt(numberInput.value);

        if (isNaN(number)) {
            outputDiv.textContent = 'Please enter a valid number';
        } else if (number < 1) {
            outputDiv.textContent = 'Please enter a number greater than or equal to 1';
        } else if (number >= 4000) {
            outputDiv.textContent = 'Please enter a number less than or equal to 3999';
        } else {
            outputDiv.textContent = convertToRoman(number);
        }
    });

    function convertToRoman(num) {
        const romanNumerals = [
            ['M', 1000],
            ['CM', 900],
            ['D', 500],
            ['CD', 400],
            ['C', 100],
            ['XC', 90],
            ['L', 50],
            ['XL', 40],
            ['X', 10],
            ['IX', 9],
            ['V', 5],
            ['IV', 4],
            ['I', 1]
        ];

        let result = '';

        for (const [roman, value] of romanNumerals) {
            while (num >= value) {
                result += roman;
                num -= value;
            }
        }

        return result;
    }
});
