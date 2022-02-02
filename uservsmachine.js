var z;
var b = { 'x': "url('./images/x.jpg')", 'o': "url('./images/o.jpg')" }
var flag = 0, first = 0, first1 = 0, first2 = 0, imp1, imp2;
var mat1 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var mat2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var sel = { 'x': 'o', 'o': 'x' };
var el = { 0: [1, 2], 1: [0, 2], 2: [0, 1] };
var finish = 0;
var colo = ["blue", "red", "violet", "black"];
var colo1 = 0;
function fun() {
    if (flag == 0) {
        z = document.getElementById('xo').value;
        flag = 1;
    }
    if (toss == 1) {
        l1 = Math.floor(Math.random() * 10) % 3;
        l2 = Math.floor(Math.random() * 10) % 3;
        // l1=0;
        // l2=0;
        document.getElementById(l1 + String(l2)).style.backgroundImage = b[sel[z]];
        document.getElementById(l1 + String(l2)).style.backgroundSize = "100%100% ";
        mat1[l1][l2] = -1;
        mat2[l2][l1] = -1;
    }
}
function change_color() {

    document.getElementById('win').style.color = colo[colo1];
    colo1++;
    colo1 = (colo1) % 4;
}
function check_win() {
    var sum1 = 0, sum2 = 0; zero = 0;
    for (var i = 0; i <= 2; i++) {
        sum1 = 0;
        sum2 = 0;
        for (var j = 0; j <= 2; j++) {
            sum1 = sum1 + mat1[i][j];
            sum2 = sum2 + mat2[i][j];
            if (mat1[i][j] == 0) {
                zero = 1
            }
        }

        if (sum1 == 3 || sum2 == 3) {
            document.getElementById('win').innerHTML = `${username1} win`;

            // document.getElementById('win').style.height = "60px";
            document.getElementById('win').style.width = "100%";
            document.getElementById('win').style.fontSize = "50px";
            finish = 1;

            return;
        }
        else if (sum1 == -3 || sum2 == -3) {
            document.getElementById('win').innerHTML = "computer wins";

            // document.getElementById('win').style.height = "130px";
            document.getElementById('win').style.width = "100%";
            document.getElementById('win').style.fontSize = "50px";
            finish = 1;
            return;
        }
    }
    if (zero == 0) {
        document.getElementById('win').innerHTML = "Tied";
        // document.getElementById('win').style.height = "60px";
        document.getElementById('win').style.width = "100%";
        document.getElementById('win').style.fontSize = "50px";
        finish = 1;
        return;
    }
    if ((mat1[0][0] == 1 && mat1[1][1] == 1 && mat1[2][2] == 1) || (mat1[0][2] == 1 && mat1[1][1] == 1 && mat1[2][0] == 1)) {
        // console.log("bro");
        document.getElementById('win').innerHTML = "`${username1} win`";

        // document.getElementById('win').style.height = "130px";
        document.getElementById('win').style.width = "100%";
        document.getElementById('win').style.fontSize = "50px";
        finish = 1;
        return;
    }
    else if ((mat1[0][0] == -1 && mat1[1][1] == -1 && mat1[2][2] == -1) || (mat1[0][2] == -1 && mat1[1][1] == -1 && mat1[2][0] == -1)) {
        document.getElementById('win').innerHTML = "computer wins";

        // document.getElementById('win').style.height = "130px";
        document.getElementById('win').style.width = "100%";
        document.getElementById('win').style.fontSize = "50px";
        finish = 1;
        return;
    }
}
function check_danger() {
    check_win();
    if (finish == 1) {
        return;
    }
    var col1 = 0, col2 = 0, l, col3 = 0, col4 = 0, l1;
    for (var i = 0; i <= 2; i++) {
        col1 = 0;
        col2 = 0;
        for (var j = 0; j <= 2; j++) {

            if (mat1[i][j] == -1) {
                col1++;
            }
            if (mat1[i][j] == 0) {
                col2++;
            }

        }

        if (col1 == 2 && col2 == 1) {
            l = mat1[i].indexOf(0);
            mat1[i][l] = -1;
            mat2[l][i] = -1;
            document.getElementById(String(i) + l).style.backgroundImage = b[sel[z]];
            document.getElementById(String(i) + l).style.backgroundSize = "100%100% ";
            return;
        }
    }
    col1 = 0, col2 = 0;
    for (var i = 0; i <= 2; i++) {
        col1 = 0;
        col2 = 0;
        for (var j = 0; j <= 2; j++) {
            if (mat2[i][j] == -1) {
                col1++;
            }
            if (mat2[i][j] == 0) {
                col2++;
            }
        }
        if (col1 == 2 && col2 == 1) {
            l = mat2[i].indexOf(0);
            mat2[i][l] = -1;
            mat1[l][i] = -1;
            // console.log(String(i)+l);
            document.getElementById(l + String(i)).style.backgroundImage = b[sel[z]];
            document.getElementById(l + String(i)).style.backgroundSize = "100%100% ";
            return;
        }
    }
    col1 = 0, col2 = 0;
    for (var i = 0; i <= 2; i++) {
        if (mat1[i][i] == -1) {
            col1++;
        }
        if (mat1[i][i] == 0) {
            col2++;
        }
    }
    if (col1 == 2 && col2 == 1) {
        for (var i = 0; i <= 2; i++) {
            if (mat1[i][i] == 0) {
                mat1[i][i] = -1;
                mat2[i][i] = -1;
                document.getElementById(i + String(i)).style.backgroundImage = b[sel[z]];
                document.getElementById(i + String(i)).style.backgroundSize = "100%100% ";
                return;
            }
        }
    }
    col1 = 0, col2 = 0;
    for (var i = 0; i <= 2; i++) {
        if (mat1[i][2 - i] == -1) {
            col1++;
        }
        if (mat1[i][2 - i] == 0) {
            col2++;
        }
    }
    if (col1 == 2 && col2 == 1) {
        for (var i = 0; i <= 2; i++) {
            if (mat1[i][2 - i] == 0) {
                mat1[i][2 - i] = -1;
                mat2[2 - i][i] = -1;
                document.getElementById(i + String(2 - i)).style.backgroundImage = b[sel[z]];
                document.getElementById(i + String(2 - i)).style.backgroundSize = "100%100% ";
                return;
            }
        }
    }
    //second step
    col1 = 0, col2 = 0;
    for (var i = 0; i <= 2; i++) {
        col1 = 0;
        col2 = 0;
        for (var j = 0; j <= 2; j++) {
            if (mat1[i][j] == 1) {
                col1++;
            }
            if (mat1[i][j] == 0) {
                col2++;
            }
        }
        if (col1 == 2 && col2 == 1) {
            l = mat1[i].indexOf(0);
            mat1[i][l] = -1;
            mat2[l][i] = -1;
            document.getElementById(String(i) + l).style.backgroundImage = b[sel[z]];
            document.getElementById(String(i) + l).style.backgroundSize = "100%100% ";
            return;
        }
    }
    col1 = 0, col2 = 0, l = 0;
    for (var i = 0; i <= 2; i++) {
        col1 = 0;
        col2 = 0;
        for (var j = 0; j <= 2; j++) {
            if (mat2[i][j] == 1) {
                col1++;
            }
            if (mat2[i][j] == 0) {
                col2++;
            }
        }
        if (col1 == 2 && col2 == 1) {
            l = mat2[i].indexOf(0);
            mat2[i][l] = -1;
            mat1[l][i] = -1;
            // console.log(String(i)+l);
            document.getElementById(l + String(i)).style.backgroundImage = b[sel[z]];
            document.getElementById(l + String(i)).style.backgroundSize = "100%100% ";
            return;
        }
    }
    col1 = 0, col2 = 0;
    for (var i = 0; i <= 2; i++) {
        if (mat1[i][i] == 1) {
            col1++;
        }
        if (mat1[i][i] == 0) {
            col2++;
        }
    }
    if (col1 == 2 && col2 == 1) {
        for (var i = 0; i <= 2; i++) {
            if (mat1[i][i] == 0) {
                mat1[i][i] = -1;
                mat2[i][i] = -1;
                document.getElementById(i + String(i)).style.backgroundImage = b[sel[z]];
                document.getElementById(i + String(i)).style.backgroundSize = "100%100% ";
                return;
            }
        }
    }
    col1 = 0, col2 = 0;
    for (var i = 0; i <= 2; i++) {
        if (mat1[i][2 - i] == 1) {
            col1++;
        }
        if (mat1[i][2 - i] == 0) {
            col2++;
        }
    }
    if (col1 == 2 && col2 == 1) {
        // console.log("hi");
        for (var i = 0; i <= 2; i++) {
            if (mat1[i][2 - i] == 0) {
                mat1[i][2 - i] = -1;
                mat2[2 - i][i] = -1;
                document.getElementById(i + String(2 - i)).style.backgroundImage = b[sel[z]];
                document.getElementById(i + String(2 - i)).style.backgroundSize = "100%100% ";
                return
            }
        }
    }
    //step 3
    // if there is one machine's chosed element and two empty elements
    //console.log("hi");
    for (var i = 0; i <= 2; i++) {
        col1 = 0;
        col2 = 0;
        for (var j = 0; j <= 2; j++) {
            if (mat1[i][j] == -1) {
                col1++;
            }
            if (mat1[i][j] == 0) {
                col2++;
            }
        }
        if (col1 == 1 && col2 == 2) {

            l = mat1[i].indexOf(-1);
            col3 = 0;
            col4 = 0;
            // console.log(el);
            l1 = el[l][0];
            if (first1 == 0) {
                imp1 = i;
                imp2 = l1;
                first1 = 1;
            }
            for (var k = 0; k <= 2; k++) {
                if (mat2[l1][k] == -1) {
                    col3++;
                }
                if (mat2[l1][k] == 0) {
                    col4++;
                }
            }
            if ((col3 == 1 && col4 == 2) || (col3 == 0 && col4 == 2)) {
                mat1[i][l1] = -1;
                mat2[l1][i] = -1;
                document.getElementById(String(i) + l1).style.backgroundImage = b[sel[z]];
                document.getElementById(String(i) + l1).style.backgroundSize = "100%100% ";
                first1 = 0;
                return;
            }
            l1 = el[l][1];
            col3 = 0, col4 = 0;
            for (var k = 0; k <= 2; k++) {
                if (mat2[l1][k] == -1) {
                    col3++;
                }
                if (mat2[l1][k] == 0) {
                    col4++;
                }
            }
            if ((col3 == 1 && col4 == 2) || (col3 == 0 && col4 == 2)) {
                mat1[i][l1] = -1;
                mat2[l1][i] = -1;
                document.getElementById(String(i) + l1).style.backgroundImage = b[sel[z]];
                document.getElementById(String(i) + l1).style.backgroundSize = "100%100% ";
                first1 = 0;
                return;
            }
        }
    }

    if (first1 == 1) {
        mat1[imp1][imp2] = -1;
        mat2[imp2][imp1] = -1;
        document.getElementById(String(imp1) + imp2).style.backgroundImage = b[sel[z]];
        document.getElementById(String(imp1) + imp2).style.backgroundSize = "100%100% ";
        first1 = 0;
        return;
    }
    col1 = 0, col2 = 0;
    //fourth

    for (var i = 0; i <= 2; i++) {
        col1 = 0;
        col2 = 0;
        for (var j = 0; j <= 2; j++) {
            if (mat1[i][j] == 1) {
                col1++;
            }
            if (mat1[i][j] == 0) {
                col2++;
            }
        }
        if (col1 == 1 && col2 == 2) {
            // console.log("hi");
            col3 = 0, col4 = 0;
            l = mat1[i].indexOf(1);
            l1 = el[l][0];
            if (first2 == 0) {
                imp1 = i;
                imp2 = l1;
                first2 = 1;
            }
            for (var k = 0; k <= 2; k++) {
                if (mat2[l1][k] == 1) {
                    col3++;
                }
                else if (mat2[l1][k] == 0) {
                    col4++;
                }
            }
            if ((col3 == 1 && col4 == 2) || (col3 == 0 && col4 == 3)) {
                mat1[i][l1] = -1;
                mat2[l1][i] = -1;
                document.getElementById(String(i) + l1).style.backgroundImage = b[sel[z]];
                document.getElementById(String(i) + l1).style.backgroundSize = "100%100% ";
                first2 = 0;
                return;
            }
            l1 = el[l][1];
            col3 = 0; col4 = 0;
            for (var k = 0; k <= 2; k++) {
                if (mat2[l1][k] == 1) {
                    col3++;
                }
                else if (mat2[l1][k] == 0) {
                    col4++;
                }
            }
            if ((col3 == 1 && col4 == 2) || (col3 == 0 && col4 == 3)) {
                mat1[i][l1] = -1;
                mat2[l1][i] = -1;
                document.getElementById(String(i) + l1).style.backgroundImage = b[sel[z]];
                document.getElementById(String(i) + l1).style.backgroundSize = "100%100% ";
                first2 = 0;
                return;
            }
        }
    }
    if (first2 == 1) {
        mat1[imp1][imp2] = -1;
        mat2[imp2][imp1] = -1;
        document.getElementById(String(imp1) + imp2).style.backgroundImage = b[sel[z]];
        document.getElementById(String(imp1) + imp2).style.backgroundSize = "100%100% ";
        first2 = 0;
        return;
    }

    var t = 1;
    while (t == 1) {
        col1 = Math.floor(Math.random() * 10) % 3;
        col2 = Math.floor(Math.random() * 10) % 3;
        if (mat1[col1][col2] == 0) {
            mat1[col1][col2] = -1;
            mat2[col2][col1] = -1;
            document.getElementById(String(col1) + col2).style.backgroundImage = b[sel[z]];
            document.getElementById(String(col1) + col2).style.backgroundSize = "100%100% ";
            break;
        }
    }

}
function mymachine() {

    if (first == 0 && mat1[1][1] == 0) {
        document.getElementById('11').style.backgroundImage = b[sel[z]];
        document.getElementById('11').style.backgroundSize = "100%100% ";
        mat1[1][1] = -1;
        mat2[1][1] = -1
    }
    else {
        if (first == 0 && mat1[1][1] == 1 && mat1[0][0] == 0) {
            mat1[0][0] = -1;
            mat2[0][0] = -1;
            document.getElementById('00').style.backgroundImage = b[sel[z]];
            document.getElementById('00').style.backgroundSize = "100%100% ";
        }
        else if (first == 1 && mat1[1][1] == 1 && mat1[2][2] == 1) {
            mat1[0][2] = -1;
            mat2[2][0] = -1;
            document.getElementById('02').style.backgroundImage = b[sel[z]];
            document.getElementById('02').style.backgroundSize = "100%100% ";
        }
        else {
            check_danger();
        }
    }
    first++;
}
function fun1(y) {


    if (flag == 0 || mat1[Number(y[0])][Number(y[1])] != 0) {
        return;
    }
    if (finish == 1) {
        // console.log("155");
        setInterval(() => { change_color() }, 500);
        return;

    }
    document.getElementById(y).style.backgroundImage = b[z];
    document.getElementById(y).style.backgroundSize = "100%100% ";
    mat1[Number(y[0])][Number(y[1])] = 1;
    mat2[Number(y[1])][Number(y[0])] = 1;
    mymachine();
    check_win();
    if (finish == 1) {
        // console.log("155");
        setInterval(() => { change_color() }, 500);
        return;

    }
}