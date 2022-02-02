var turn = 1;

function ufun(y) {
    // console.log(userSymbol);
    if (mat1[Number(y[0])][Number(y[1])] != 0 || finish == 1) {
        return;
    }
    if (turn) {
        document.getElementById(y).style.backgroundImage = b[userSymbol];
        document.getElementById(y).style.backgroundSize = "100%100% ";
        turn = 0;
        mat1[Number(y[0])][Number(y[1])] = 1;
        mat2[Number(y[1])][Number(y[0])] = 1;
        document.getElementById('turn').innerText = `${tosslooser} turn`

    }
    else {
        document.getElementById(y).style.backgroundImage = b[sel[userSymbol]];
        document.getElementById(y).style.backgroundSize = "100%100% ";
        turn = 1;
        mat1[Number(y[0])][Number(y[1])] = -1;
        mat2[Number(y[1])][Number(y[0])] = -1;
        document.getElementById('turn').innerText = `${tosswinner} turn`

    }

    checkwin();
}
function checkwin() {
    var sum1 = 0, sum2 = 0, zero = 0;
    // console.log(mat1);
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

            document.getElementById('win').innerHTML = `${tosswinner} wins`;
            // document.getElementById('win').style.height = "60px";
            document.getElementById('win').style.width = "100%";
            document.getElementById('win').style.fontSize = "50px";
            finish = 1;
            setInterval(() => { change_color() }, 500);
            document.getElementById('turn').style.display = "none";
            return;
        }
        else if (sum1 == -3 || sum2 == -3) {
            document.getElementById('win').innerHTML = `${tosslooser} wins`;

            // document.getElementById('win').style.height = "130px";
            document.getElementById('win').style.width = "100%";
            document.getElementById('win').style.fontSize = "50px";
            finish = 1;
            // console.log("155");
            setInterval(() => { change_color() }, 500);
            document.getElementById('turn').style.display = "none";
            return;
        }
    }
    if (zero == 0) {
        document.getElementById('win').innerHTML = "Tied";
        // document.getElementById('win').style.height = "60px";
        document.getElementById('win').style.width = "100%";
        document.getElementById('win').style.fontSize = "50px";
        // console.log("155");
        finish = 1;

        setInterval(() => { change_color() }, 500);
        document.getElementById('turn').style.display = "none";
        return;
    }
    if ((mat1[0][0] == 1 && mat1[1][1] == 1 && mat1[2][2] == 1) || (mat1[0][2] == 1 && mat1[1][1] == 1 && mat1[2][0] == 1)) {
        // console.log("bro");
        document.getElementById('win').innerHTML = `${tosswinner} wins`;

        // document.getElementById('win').style.height = "130px";
        document.getElementById('win').style.width = "100%";
        document.getElementById('win').style.fontSize = "50px";
        finish = 1;

        setInterval(() => { change_color() }, 500);
        document.getElementById('turn').style.display = "none";
        return;
    }
    else if ((mat1[0][0] == -1 && mat1[1][1] == -1 && mat1[2][2] == -1) || (mat1[0][2] == -1 && mat1[1][1] == -1 && mat1[2][0] == -1)) {
        document.getElementById('win').innerHTML = `${tosslooser} wins`;
        // document.getElementById('win').style.height = "130px";
        document.getElementById('win').style.width = "100%";
        document.getElementById('win').style.fontSize = "50px";
        finish = 1;

        // console.log("155");
        setInterval(() => { change_color() }, 500);
        document.getElementById('turn').style.display = "none";
        return;
    }
}