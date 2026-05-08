describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});
	it('should return the number for a single number string', function() {
		expect(calculator.add('1')).toEqual(1);
	});
	it('should return the sum of two numbers', function() {
		expect(calculator.add('1,2')).toEqual(3);
	});
});
