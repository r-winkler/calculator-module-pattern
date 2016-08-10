var Calculator = function (equals, currNumber) {
    'use strict';
    var eqCtl = equals,
        currNumberCtl = currNumber,
        operator,
        operatorSet = false,
        equalsPressed = false,
        lastNumber = null,
        
        add = function (x, y) {
            return x + y;
        },
        
        substract = function (x, y) {
            return x - y;
        },
        
        multiply = function (x, y) {
            return x * y;
        },
        
        divide = function (x, y) {
            if (y === 0) {
                alert("Can't divide by 0");
                return 0;
            }
            return x / y;
        },
        
        setVal = function (val) {
            currNumberCtl.innerHTML = val;
        },
        
        setEquation = function (val) {
            eqCtl.innerHTML = val;
        },
        
        calculate = function () {
            if (!operator || lastNumber === null) { return; }
            var currNumber = parseFloat(currNumberCtl.innerHTML),
                newVal = 0;
            switch (operator) {
            case '+':
                newVal = add(lastNumber, currNumber);
                break;
            case '-':
                newVal = substract(lastNumber, currNumber);
                break;
            case '*':
                newVal = multiply(lastNumber, currNumber);
                break;
            case '/':
                newVal = divide(lastNumber, currNumber);
                break;
            }
            setVal(newVal);
            lastNumber = newVal;
        };
    
    // public members
    return {
        numberClick : function (e) {
            var button = (e.target) ? e.target : e.srcElement;
            if (operatorSet === true || currNumberCtl.innerHTML === '0') {
                setVal('');
                operatorSet = false;
            }
            setVal(currNumberCtl.innerHTML + button.innerHTML);
            setEquation(eqCtl.innerHTML + button.innerHTML);
        },
       
        setOperator: function (newOperator) {
            if (newOperator === '=') {
                equalsPressed = true;
                calculate();
                setEquation('');
                return;
            }
            
            if (!equalsPressed) {
                calculate();
            }
            equalsPressed = false;
            operator = newOperator;
            operatorSet = true;
            lastNumber = parseFloat(currNumberCtl.innerHTML);
            var eqText = (eqCtl.innerHTML === '') ?
                        lastNumber + ' ' + operator + ' ' :
                        eqCtl.innerHTML + ' ' + operator + ' ';
            setEquation(eqText);
        },
        
        clearNumbers: function () {
            lastNumber = null;
            equalsPressed = operatorSet = false;
            setVal('0');
            setEquation('');
        }
    };            
};