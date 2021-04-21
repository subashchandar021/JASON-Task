var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age",28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
  tranformEmployeeList.push({"firstName":"Vasanth","lastName":"Raja","age":24,"role":"JSWizard"},{"firstName":"Sri","lastName":"Devi","age":28,"role":"coder"});
 return tranformEmployeeList;
}
console.log(transformEmployeeData(arr));