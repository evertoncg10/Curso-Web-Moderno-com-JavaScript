console.log('a =', a);
var a = 2;
console.log('a=', a);

function teste(){
    console.log('a =', a2);
    var a2 = 4;
    console.log('a=', a2);
}

teste();

// Com let não ocorre o Hoinsting
console.log('b =', b);
var b = 2;
console.log('b=', b);