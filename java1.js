let a=prompt("hey whats ur age?");
a=Number.parseInt(a);
if (a<0){
    alert("you are not even born");
    alert(a)
}
else if(a<9){
    alert("dont even think of driving u below 9 nine years kid");
    alert(a)
}
else if(a>9 && a<18){
    alert("you can think of driving after the age of 18")
    alert(a)
}
else{
    alert("you can driveee yeyyyyyyyyyyy")
    alert(a)
}
alert("Done")
console.log("You ",(a<18? "cant drive":"can drive"))