function numbers() {
    for (var a = 0; a < 31; a++) {
        if (a % 2) {
            console.log(a);
        }
    }
}

function number() {
    var a = 2;

    for (var i = 0; i < 31; i++) {
        if (i % a) {
            console.log(i);
        }
    }
}

function numberThird() {
    var d = 6;
    var c = 3;
    var f = d / c;

    for (var j = 0; j < 31; j++) {
        if (j % f) {
            console.log(j);
        }
    }
}

numberThird();
numbers(); 
number();