const calcobj = {
    state: 0,
    operand1: 0,
    operator: null,
    operand2: 0,
    result: null,
};
let deci=true;

const calctextdiv = document.querySelector(".cont1");
calctextdiv.textContent = calcobj.result == undefined | calcobj.result == null ? 0 : calcobj.result;

function reset() {
    calcobj.state = 0;
    calcobj.operand1 = 0;
    calcobj.operand2 = "";
    calcobj.operator = null;
    calcobj.result = null;
    calctextdiv.textContent = calcobj.result == undefined | calcobj.result == null | calcobj.result != 0 ? 0 : calcobj.result;

}
function evalf() {
    let val = 0;
    switch (calcobj.operator) {
        case "+": val = Number(calcobj.operand1) + Number(calcobj.operand2);
            break;
        case "-": val = Number(calcobj.operand1) - Number(calcobj.operand2);;
            break;
        case "%": val = Number(calcobj.operand1) % Number(calcobj.operand2);;
            break;
        case "-": val = Number(calcobj.operand1) - Number(calcobj.operand2);;
            break;
        case "/":
            {
                if (calcobj.operand2 == 0) {
                    alert("Division by zero not possible");
                    reset();
                    break;
                }
                val = Number(calcobj.operand1) / Number(calcobj.operand2);
            }
            break;
        case "*":
            val = Number(calcobj.operand1) * Number(calcobj.operand2);
            break;


    } return calcobj.result == null ? val : val + calcobj.result;

}

function docalc() {
    switch (calcobj.state) {
        case 0:
            {
                reset();
            } break;
        case 1:
            {
                calctextdiv.textContent = calcobj.operand1;
            } break;
        case 2:
            {
                calctextdiv.textContent = calcobj.operand1 + " " + calcobj.operator;
            } break;
        case 3:
            {
                calctextdiv.textContent = calcobj.operand1 + " " + calcobj.operator + " " + calcobj.operand2;
            } break;
        case 4:
            {
                const result = evalf();
                calcobj.result = result;
                calctextdiv.textContent = result;
            } break;
    }


}

//Think aobut the states of the calculator
//inactive --before typing --0
//in opeartion --active --1 --entering operand 1
// in operation --active --2 --entering operator
//in operation ==active --3 --enering operand 2
//in opeartion ---active 4 --equals so display the result after calculation



const buttons = document.querySelectorAll(".buttons");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        console.log(button);
        console.log(calcobj);
        if (Array.from(button.classList).includes("oper")) {
            if (calcobj.state == 1) {
                calcobj.state = 2;
                calcobj.operator = button.textContent;
                docalc();
            }
            else if (calcobj.state == 4) {
                calcobj.operand2 = "0";
                calcobj.operand1 = calcobj.result;
                calcobj.state = 2;
                calcobj.operator = button.textContent;
                calcobj.result = null;
                docalc();

            }
        }
        switch (button.classList[0]) {
            case "AC":
                {
                    calcobj.state = 0;
                    docalc();
                } break;
            case "zero":
                {
                    if (calcobj.state == 0) {
                        //if you click zero when everything is empty
                        calcobj.state = 1;
                        calcobj.operand1 = 0;
                        docalc();
                    }
                    else if (calcobj.state == 1) {
                        calcobj.operand1 += "0";
                        docalc();
                    }
                    else if (calcobj.state == 2) {
                        console.log(calcobj.state);
                        calcobj.state = 3;
                        calcobj.operand2 += "0";
                        docalc();
                    }
                    else if (calcobj.state == 3) {
                        calcobj.operand2 = "0";
                        docalc();

                    }

                    // calcobj.
                } break;
            case "one":
                {
                    if (calcobj.state == 0) {
                        //if you click zero when everything is empty
                        calcobj.state = 1;
                        calcobj.operand1 = "1";
                        docalc();
                    }
                    else if (calcobj.state == 1) {
                        calcobj.operand1 += "1";
                        docalc();
                    }
                    else if (calcobj.state == 2) {
                        calcobj.state++;
                        calcobj.operand2 += "1";
                        docalc();
                    }
                    else if (calcobj.state == 3) {
                        calcobj.operand2 += "1";
                        docalc();

                    }
                    // calcobj.
                } break;
                case "deci":
                    {
                        if (calcobj.state == 0) {
                            //if you click zero when everything is empty
                            // calcobj.state = 1;
                            // // calcobj.operand1 = "";
                            // docalc();
                        }
                        else if (calcobj.state == 1) {
                            calcobj.operand1 += ".";
                            docalc();
                        }
                        else if (calcobj.state == 2) {
                            calcobj.state++;
    
                            calcobj.operand2 += ".";
                            docalc();
                        }
                        else if (calcobj.state == 3) {
                            calcobj.operand2 += ".";
                            docalc();
    
                        }
                    } break;
            case "two":
                {
                    if (calcobj.state == 0) {
                        //if you click zero when everything is empty
                        calcobj.state = 1;
                        calcobj.operand1 = "2";
                        docalc();
                    }
                    else if (calcobj.state == 1) {
                        calcobj.operand1 += "2";
                        docalc();
                    }
                    else if (calcobj.state == 2) {
                        calcobj.state++;

                        calcobj.operand2 += "2";
                        docalc();
                    }
                    else if (calcobj.state == 3) {
                        calcobj.operand2 += "1";
                        docalc();

                    }
                } break;
            case "three":
                {
                    if (calcobj.state == 0) {
                        //if you click zero when everything is empty
                        calcobj.state = 1;
                        calcobj.operand1 = "3";
                        docalc();
                    }
                    else if (calcobj.state == 1) {
                        calcobj.operand1 += "3";
                        docalc();
                    }
                    else if (calcobj.state == 2) {
                        calcobj.state++;

                        calcobj.operand2 += "3";
                        docalc();
                    }
                    else if (calcobj.state == 3) {
                        calcobj.operand2 += "3";
                        docalc();

                    }
                } break;
            case "four":
                {
                    if (calcobj.state == 0) {
                        //if you click zero when everything is empty
                        calcobj.state = 1;
                        calcobj.operand1 = "4";
                        docalc();
                    }
                    else if (calcobj.state == 1) {
                        calcobj.operand1 += "4";
                        docalc();
                    }
                    else if (calcobj.state == 2) {
                        calcobj.state++;

                        calcobj.operand2 += "4";
                        docalc();
                    }
                    else if (calcobj.state == 3) {
                        calcobj.operand2 += "4";
                        docalc();

                    }
                } break;
            case "five":
                {
                    if (calcobj.state == 0) {
                        //if you click zero when everything is empty
                        calcobj.state = 1;
                        calcobj.operand1 = 5;
                        docalc();
                    }
                    else if (calcobj.state == 1) {
                        calcobj.operand1 += "5";
                        docalc();
                    }
                    else if (calcobj.state == 2) {
                        calcobj.state++;

                        calcobj.operand2 += "5";
                        docalc();
                    }
                    else if (calcobj.state == 3) {
                        calcobj.operand2 += "5";
                        docalc();

                    }
                } break;
            case "six":
                {
                    if (calcobj.state == 0) {
                        //if you click zero when everything is empty
                        calcobj.state = 1;
                        calcobj.operand1 = 6;
                        docalc();
                    }
                    else if (calcobj.state == 1) {
                        calcobj.operand1 += "6";
                        docalc();
                    }
                    else if (calcobj.state == 2) {
                        calcobj.state++;

                        calcobj.operand2 += "6";
                        docalc();
                    }
                    else if (calcobj.state == 3) {
                        calcobj.operand2 += "6";
                        docalc();

                    }
                } break;
            case "seven":
                {
                    if (calcobj.state == 0) {
                        //if you click zero when everything is empty
                        calcobj.state = 1;
                        calcobj.operand1 = "7";
                        docalc();
                    }
                    else if (calcobj.state == 1) {
                        calcobj.operand1 += "7";
                        docalc();
                    }
                    else if (calcobj.state == 2) {
                        calcobj.state++;

                        calcobj.operand2 += "7";
                        docalc();
                    }
                    else if (calcobj.state == 3) {
                        calcobj.operand2 += "7";
                        docalc();

                    }
                } break;
            case "eight":
                {
                    if (calcobj.state == 0) {
                        //if you click zero when everything is empty
                        calcobj.state = 1;
                        calcobj.operand1 = "8";
                        docalc();
                    }
                    else if (calcobj.state == 1) {
                        calcobj.operand1 += "8";
                        docalc();
                    }
                    else if (calcobj.state == 2) {
                        calcobj.state++;
                        calcobj.operand2 += "8";
                        docalc();
                    }
                    else if (calcobj.state == 3) {
                        calcobj.operand2 += "8";
                        docalc();

                    }
                } break;
            case "nine":
                {
                    if (calcobj.state == 0) {
                        //if you click zero when everything is empty
                        calcobj.state = 1;
                        calcobj.operand1 = "9";
                        docalc();
                    }
                    else if (calcobj.state == 1) {
                        calcobj.operand1 += "9";
                        docalc();
                    }
                    else if (calcobj.state == 2) {
                        calcobj.state++;

                        calcobj.operand2 += "9";
                        docalc();
                    }
                    else if (calcobj.state == 3) {
                        calcobj.operand2 += "9";
                        docalc();

                    }
                } break;
            case "equals":
                {
                    if (calcobj.state == 3) {
                        calcobj.state++;
                        docalc();
                    }
                } break;
        }

    });

});

