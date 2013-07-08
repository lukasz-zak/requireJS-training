require(['js/calculator'], function (Calc) {
	var addResElem = document.getElementById("addResult"),
		subResElem = document.getElementById("substractResult"),
		multiplyResElem = document.getElementById('multiplyResult'),
		divideResElem = document.getElementById('divideResult'),
		squareResElem = document.getElementById('squareResult'),

		addResult = Calc.add(3,2),
		subResult = Calc.sub(3,2),
		multiResult = Calc.multi(3,2),
		divideResult = Calc.divide(3,2),
		squareResult = Calc.square(3);

	addResElem.innerText += " " + addResult;
	subResElem.innerText += " " + subResult;
	multiplyResElem.innerText += " " + multiResult;
	divideResElem.innerText += " " + divideResult;
	squareResElem.innerText += " " + squareResult;
});