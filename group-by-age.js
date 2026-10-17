function groupByAge(people) {
    let result = {};

    for (let person of people) {
        if (!result[person.age]) {
            result[person.age] = [];
        }

        result[person.age].push(person);
    }

    return result;
}

let people = [
    { name: "Иван", age: 18 },
    { name: "Анна", age: 20 },
    { name: "Пётр", age: 18 }
];

console.log(groupByAge(people));
