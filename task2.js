
// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე ახალ(განსხვავებულ) ობიექტს

const user1 = {

    weight: 64,
    height: 180
}

function newFunc(user) {
    console.log({...user})
   return{ ...user}
    
}
newFunc(user1)
