// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) 
{
	if(string_numbers === '')
	{
		return 0;
	}
	else
	{
		return parseInt(string_numbers); //wandelt string in int um
	}
};
