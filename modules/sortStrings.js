function sortStrings(arr) {
    return arr
        .map(str => str.replace(/\s+/g, "")) 
        .sort((a, b) => a.localeCompare(b)); 
}

module.exports = { sortStrings };
