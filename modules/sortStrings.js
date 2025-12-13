function sortStrings(arr) {
    return arr
        .map(str => str.replace(/\s+/g, "")) // убираем пробелы
        .sort((a, b) => a.localeCompare(b)); // сортируем
}

module.exports = { sortStrings };
