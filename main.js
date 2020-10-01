'use strict';
var patterns={"city":{'regex':/^([a-zA-Z\s])*$/, 'errorMessage':"name is not valid, no digit"}};
var inputNames=['city'];

function validate(event){
    event.preventDefault();
    var form= new Form(event.target, inputNames, patterns);
    var result=form.submitForm('errorMessage', 'errorInput');

    if(result==true){
        var response= form.data();
        response=form.convertToJson(response);
        var xhttp= new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
            if(this.readyState== 4 && this.status==200){
                var result=JSON.parse(this.response);
                if(typeof result==='object'){
                    document.querySelector('#result img').src='http://openweathermap.org/img/wn/'+result.icon+'@2x.png';
                    document.querySelector('#result div').innerHTML='<p> the weather today in '+result.city+ ' : " '+result.description+'"</p><p>humidty is '+
                    result.humidity+'</p><p> wind speed '+result.wind+'</p><p>Temperature is '+result.temperature+'°C</p>';
                }else{
                    document.querySelector('#result img').src="";
                    document.querySelector('#result div').innerHTML=result;                
                }
                
            }
            
        }

        xhttp.open("POST", "get_weather.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("response="+response);
        document.querySelector('#result img').src="";
        form.resetForm();
    }
    
}
