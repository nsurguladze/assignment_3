
// მოცემულია მასივი user[{},{},{}]. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user - ების მასივს და დააბრუნებს ყველაზე პატარა ასაკის მქონე ადამიანის სახელს.

const user = [
    {
        name: 'Temo',
        age: 25
    },

    {
        name: 'Lasha',
        age: 21
    },

    {
        name: 'Ana',
        age: 28
    }

]

function minimum() {

    const min = Math.min(...user.map(item => item.age));
    return user.filter(item => item.age === min)[0].name;

}

console.log(minimum())




