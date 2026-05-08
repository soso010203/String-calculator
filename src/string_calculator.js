// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) 
{
	if(string_numbers === '')
	{
		return 0;
	}
	else if(string_numbers.includes(','))
	{
		let numbers = string_numbers.split(','); //zerteilt die 2 Zahlen

		return parseInt(numbers[0]) + parseInt(numbers[1]);
	}
	else
	{
		return parseInt(string_numbers); //wandelt string in int um
	}
};
