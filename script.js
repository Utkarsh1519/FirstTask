//XML HTTP Request
// Step1 : Creation of XHR Object
var req = new XMLHttpRequest();
// Step2 : Intiationg the connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
// Step3 : Sending a connection
req.send();
//Step4 : Once the data have been received successfully we need to extract the data in JSON
req.onload = function(){
    var data = JSON.parse(req.response);
    console.log(data);
    //for(var i in data)
    //{
        //console.log(data[i].name+" "+data[i].flag+" "+data[i].capital);
    //}
    var sum = data.reduce((accumulator,element)=>{
        return accumulator+element.population;
    },0);
    console.log(sum);

    
}