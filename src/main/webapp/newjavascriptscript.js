//opgave 1
var x = document.getElementsByTagName("div");
console.log(x.length);
x[0].style.color = "red";
x[1].style.color = "black";
x[2].style.color = "blue";
//opgave 2
function Person(firstName, Lastname, email, phone) {
    this.firstName = firstName;
    this.Lastname = Lastname;
    this.email = email;
    this.phone = phone;
}
var person1 = new Person("name", "secname", "something@gmail.com ", 23654802);
var person2 = new Person("morename", "allname", "something@one.com ", 13161928);
var person3 = new Person("Emil", "Secend", "name@gmail.com ", 62836574);
var person4 = new Person("hallo", "world", "worlds@univers.com ", 10296518);
var people = [person1, person2, person3, person4];
var y = document.getElementsByTagName("table");
console.log(y.length);
for (Person in people) {
    var row = y[0].insertRow(parseInt(Person)+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = people[Person].firstName;
    cell2.innerHTML = people[Person].Lastname;
    cell3.innerHTML = people[Person].email;
    cell4.innerHTML = people[Person].phone;
}
//opgave 3
//opgave 4
//opgave 5
var temp = document.getElementById("HalloWorld").addEventListener("click",Submit);
function Submit(){
    var form = document.getElementById("Formtest");
    for(Object in form){
        console.log(form[Object]);
    }
    var table = document.getElementsByTagName("table");
    for (i = 0; i < 3; i++){
        var row = table[1].insertRow(parseInt(i)+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = form[i].name;
        cell2.innerHTML = form[i].value;
    }
}
//opgave 6
var list = document.getElementById("ul");
var childs = list.childNodes;
for (var i = 0, length = childs.length; i < length; i++){
    childs[i].addEventListener("click",myfun);
    childs[i].addEventListener("mouseover",myfun1);
    childs[i].addEventListener("mouseout",myfun2);
}
function myfun(){
    console.log(this.innerHTML);
}
function myfun1(){
    var color = this.style.color;
    this.style="font-size:200%;";
    this.style.color = color;
}
function myfun2(){
    var color = this.style.color;
    this.style = "font-size:100%;";
    this.style.color = color;
    
}