define(['js/add', 'js/substract', 'js/multiply', 'js/divide'],
		 function (Add, Substract, Multiply, Divide) {

	return {
		add : function(a,b) {
			return Add(a,b);
		},

		sub : function (a,b) {
			return Substract(a,b);
		},

		multi : function (a,b){
			return Multiply(a,b);
		},

		divide : function (a,b) {
			return Divide(a,b);
		},

		square : function (a) {
			return Multiply(a,a);
		}
	};
});