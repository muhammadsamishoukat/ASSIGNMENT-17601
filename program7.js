function duplicate(array){
    var inputs = prompt("Enter your inputs separate").split(" ");
var count = []
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
function calling(params) {
    var Bnew =[]
    for (var i = count.length; i > 0; i--) {
      Bnew.push(count[i])
      }
      console.log(count)
      
}
calling();




}
