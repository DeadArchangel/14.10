function nameAbbreviation(fullName) {
    let parts = fullName.trim().split(/\s+/);

    return parts[0] + " " +
        parts.slice(1).map(name => name[0].toUpperCase() + ".").join("");
}

console.log(nameAbbreviation("Иванов Иван Иванович"));
