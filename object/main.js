//ESSENTIAL
// 1.Fix the syntax & style 
// issues with the three objects below:

let obj1 = {
  firstName: 'Yan',
  lastname: 'Fan'
}

let obj2 = { a: 1,
   b: 2, 
   c: 3,
    d:4} 

    let obj3 = { 
      animal: 'dog' ,
      noise: 'bark', 
      age: 3, 
      type :'Golden Retriever' ,
      color: 'Yellow'
}


//2. Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person.

let person = {
  firstName : "Meycem",
  lastName : "Felly",
  hometown : "Berlin",
  age : 30
}


person.favFood = "pasta"; 

delete person.lastName

// 3.Access the favorite food property in the object using dot notation, and reassign it to a different food.

person.favFood = "Sushi"

// 4.Change your object to have a single name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, and middle names respectively.

delete person.firstName
delete person.lastName

person.fullName = {
  "Firstname": "Meycem",
  "Middlename": "Pablo",
  "Lastname" : "Felly"
}


// 5.Write a function called emptyObject that takes no parameters and returns an empty object.

let emptyObject = {}


// 6.Write a function called addProperty that takes two parameters, an object, and a key as a string. It then adds the key as a property in the object and gives it the value true.

function addProperty(obj, key) {  
  obj[key] = true ;
  return obj;
} 
let obj = {}
obj = addProperty(obj, "Meycem");
console.log(obj);
 
// 8.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addObjectProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌, ‌and‌ ‌a second ‌object. It then adds a new property with the passed key and the second object as its value.

function addObjectProperty(object1,key,object2){
  object1[key] = object2 ;
  return object1
}

let object1 = {
  name: "Meycem",
};
let object2 = {
  city: "Berlin",
  state: "Berlin Brandenburg",
};

let updatedObj = addObjectProperty(object1, "School", object2);
console.log(updatedObj);

// 9.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addFullNameProperty‌‌ ‌that‌ ‌takes‌ ‌an‌ ‌object‌ ‌as‌ ‌a‌ ‌parameter.‌ ‌If the object has both a firstName and a lastName property, then it adds a new property with the key fullName and the value as a string of the firstName and lastName combined with a space between them.




var user = {
  firstname: "Leena",
  lastName: "Attia"
};

user.addFullNameProperty = (object) => {
  let fullName = `${object.firstName} ${object.LastName}`;
  return fullName
}