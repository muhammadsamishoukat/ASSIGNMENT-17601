function find_duplicate_in_array(array){
    var inputs = prompt("Enter your inputs separate").split(" ");
const count = {}
const result = []

inputs.forEach(item => {
    if (count[item]) {
       count[item] +=1
       return
    }
    count[item] = 1
})

for (let prop in count){
    if (count[prop] >=2){
        result.push(prop)
    }
}

console.log(count)
return result;

}
