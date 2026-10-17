function ruEnTransliterator(str) {
    let ru = "абвгдеёзийклмнопрстуфхцчшщъыьэюя";
    let en = [
        "a", "b", "v", "g", "d", "e", "yo", "zh",
        "z", "i", "y", "k", "l", "m", "n", "o",
        "p", "r", "s", "t", "u", "f", "kh", "ts",
        "ch", "sh", "shch", "", "y", "", "e", "yu", "ya"
    ];

    return str.split("").map(char => {
        let index = ru.indexOf(char.toLowerCase());

        if (index === -1) {
            return char;
        }

        let result = en[index];
        return char === char.toUpperCase()
            ? result.charAt(0).toUpperCase() + result.slice(1)
            : result;
    }).join("");
}

console.log(ruEnTransliterator("Привет, мир!"));
