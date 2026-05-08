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
		let numbers = string_numbers.split(',');
		let sum = 0;

		for (let i = 0; i < numbers.length; i++)
		{
			sum += parseInt(numbers[i], 10);
		}

		return sum;
	}
	else
	{
		return parseInt(string_numbers); //wandelt string in int um
	}
};
