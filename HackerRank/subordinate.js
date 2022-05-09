
const employee = (arr, id) => {

    let idx = arr.filter((i)=> i[0] === id);
    let suborinates = idx[0][2];
    let result = idx[0][1];
    let sum = 0;
    
        arr.forEach(i => {
            if(suborinates.includes(i[0])){
                suborinates.push(...i[2]);
                sum = sum + i[1];
            }
        });

    return sum + result;
    
}


let result = employee([["e1",3,["e2","e3"]], ["e2",5, []], ["e3",4,[]]],"e1");

console.log(result);


console.log(employee([["e1",3,["e2"]], ["e2",4,["e3"]], ["e3",3,[]]],'e2'));