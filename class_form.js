'use strict';
// to use this object we should define in css two classes:
// class witch handles message error style
// class witch handles input style if there is an error

class Form{
    constructor(form,inputsNames, patterns){
        this.form=form;
        this.inputsNames=inputsNames;
        this.patterns=patterns;
        this.data=function(){
            var data={};
            for(var i=0; i<this.inputsNames.length; i++){
                data[this.inputsNames[i]]=this.form[this.inputsNames[i]].value;
             }
            return data;
        };
    }
    
    convertToJson(obj){
        return JSON.stringify(obj);
        
    }

    defineErrorMessage(inputName,text, classNameError){
        var message=document.createElement('span');
        var text= document.createTextNode(text);
        message.appendChild(text);
        message.setAttribute('class',classNameError);
        this.form.insertBefore(message, inputName);
    }

    verifyData(pattern, val){
               if(pattern.test(val)==true && val!==""){
                    return true;
               }else{
                   return false;
               };
    }

    removeErrorMessage(className){
        var error=document.querySelectorAll('.'+className);
                for( var i=0; i<error.length; i++){
                    error[i].remove();
                }
    }

    defineErrorInputStyle(inputName, classStyleName){
        inputName.classList.add(classStyleName);
    }
    
    removeInputErrorStyle(inputName, className){
        inputName.classList.remove(className);
    }

    submitForm( classNameError, classStyleError){    
        this.removeErrorMessage(classNameError);
        var data=this.data();
        for(var proprety in data){
            data[proprety] =this.verifyData(this.patterns[proprety]['regex'], data[proprety]);
            if(data[proprety]==false){     
                this.defineErrorMessage(this.form[proprety], this.patterns[proprety]['errorMessage'], classNameError);
                this.defineErrorInputStyle(this.form[proprety], classStyleError);
            }else{
                this.removeInputErrorStyle(this.form[proprety], classStyleError);
            } 
        }
        
        var check=Object.values(data);
        check= check.every(function(val){
            return val===true;
        });
        return check;
    }

    resetForm(){
        for(var i =0; i<this.inputsNames.length; i++){
            this.form[this.inputsNames[i]].value="";
        }
    }
    
}