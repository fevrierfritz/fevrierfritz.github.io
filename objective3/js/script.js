
var person = JSON.parse('{ "firstName":"Fritz", "lastName":"Fevrier", "country":"Haiti"}');

document.getElementById("demo1").innerHTML = " First Name"+ ": " + person.firstName + "<br> " + "Last Name" + ": " + person.lastName  + "<br> " + "Country" + ": " + person.country;



var person = JSON.parse('{ "firstName":"Gerald", "lastName":"Fevrier", "country":"Haiti"}');
var myJSON = JSON.stringify(person);
document.getElementById("demo2").innerHTML = myJSON;

