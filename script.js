function createelement(tagname,attrname,attrvalues,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalues);
    ele.innerHTML = content;
    return ele;
}
function linebreakers(tagname){
    let lb = document.createElement (tagname);
    return lb;
}
function inputele(tagname,attrname,attrvalue,content,attrname1,attrvalue1,){
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.innerHTML = content;
    return ele;
}
function  createbutton (tagname){
    var ele = document.createElement(tagname);
    ele.innerHTML= content;

}


var firstname = createelement("lable","for","firstname","Firstname");
var lb = linebreakers ("br") 
var inputele = createelement("input","type","text","name","firstname");
var lb1 = linebreakers("br");
var middlename = createelement("lable","for","middlename","Middlename");
var lb2 = linebreakers ("br") 
var inputele1= createelement("input","type","text","name","middlename");
var lb3 = linebreakers("br");
var lastname = createelement("lable","for","lastname","Lastname");
var lb4 = linebreakers ("br") 
var inputele2= createelement("input","type","text","name","lastname");
var lb5 = linebreakers("br");
var email = createelement("lable","for","email","Email");
var lb6 = linebreakers ("br") 
var inputele3= createelement("input","type","text","name","email");
var lb7 = linebreakers("br");
var state = createelement("lable","for","state","State");
var lb8 = linebreakers ("br") 
var inputele4= createelement("input","type","text","name","state");
var lb9 = linebreakers("br");
document.body.append(firstname,lb,inputele,lb1,middlename,lb2,inputele1,lb3,lastname,lb4,inputele2,lb5,email,lb6,inputele3,lb7,state,lb8,inputele4,lb9);