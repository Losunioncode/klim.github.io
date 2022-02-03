var x = 10;
var i = 4;

function createFunction1() {
    var x = 20;
    var i = 12;
    return new Function('return x;') ; // здесь x ссылается на глобальный x 
    

}

function createFunction2() {
    var x = 20 ;
    function f() {
        return x; // здесь x ссылается на локальный x и выше 

    }
    return f;

}


var f1 = createFunction1()
console.log(f1());
var f2 = createFunction2();
console.log(f2());

