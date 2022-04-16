//I. Plain method
function clone(obj){
    //in case of premitives
    if(obj===null || typeof obj !== "object"){
      return obj;
    }
  
    //date objects should be 
    if(obj instanceof Date){
      return new Date(obj.getTime());
    }
  
    //handle Array
    if(Array.isArray(obj)){
      var clonedArr = [];
      obj.forEach(function(element){
        clonedArr.push(clone(element))
      });
      return clonedArr;
    }
  
    //lastly, handle objects
    let clonedObj = new obj.constructor();
    for(var prop in obj){
      if(obj.hasOwnProperty(prop)){
        clonedObj[prop] = clone(obj[prop]);
      }
    }
    return clonedObj;
  }
  
  /* It covers a lot of parts.
  * It does a deep copy. No pass by reference.
  * All __proto__ chain is intact.
  Cons:
  * No circular object copy.
  * Prototypal properties will have default values.
  * It solves the major scenarios, but it still has a list of issues. Check the sections below.*/


/*Object.assign({}, obj)*/
//II. clone with Object.assign()
var oldObj = {
        prop1: "I am value",
        prop2: {
            some: "thing"
        }
}
var clonnedObj = Object.assign({}, oldObj); //prop2 will be passed by reference



//III. clone with spread operators
var oldObj = {
    prop1: "I am value",
    prop2: 200,
    prop3: {
        some: "thing"
    }
}
var clonnedObj = {...oldObj}; //prop3 will be passed by reference


/*JSON.stringify is the easiest*/
//IV. clone with JSON.stringify
var oldObj = {
        prop1: "I am value",
        prop2: {
            some: "thing"
        }
}

var clonnedObj = JSON.parse(JSON.stringify(oldObj))
/* Easy to implement.
* Short and simple code.
* Great if you just want to copy a simple plain object.

Cons:
* High CPU work.
* Prototype will be lost. Cloned object will be created from Object class.
* Will throw error in circular objects.*/