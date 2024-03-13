let flame = document.getElementById("flame");
let c=0;
let shadow1="1px -30px 50px 20px red";
let shadow2="1px -60px 100px 40px red";
let shadow3="1px -60px 150px 60px red";
let shadow4="1px -60px 200px 80px red";
let shadow5="1px -60px 250px 100px red";
let shadow6="1px -70px 250px 120px red";
let shadow7="1px -80px 250px 140px red";
function flames7() {
   flame.style.boxShadow=shadow7;
   setInterval(flames1,2000);
}
function flames1() {
    flame.style.boxShadow=shadow1;
    setInterval(flames2,2000);
 }
 function flames2() {
    flame.style.boxShadow=shadow2;
    setInterval(flames3,2000);
 }
 function flames3() {
    flame.style.boxShadow=shadow3;
    setInterval(flames4,2000);
 }
 function flames4() {
    flame.style.boxShadow=shadow4;
    setInterval(flames5,2000);
 }
 function flames5() {
    flame.style.boxShadow=shadow5;
    setInterval(flames6,2000);
 }
 function flames6() {
    flame.style.boxShadow=shadow6;
    setInterval(flames7,2000);
 }
