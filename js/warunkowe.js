// Instrukcje warunkowe

var a = prompt('Podaj wartość "a": '),
		b = prompt('Podaj wartość "b": '),
		value = (a * a) + ( 2 * a * b) - (b * b);

alert('Wartość działania wynosi: ' + value);
console.log(value);

if (value < 0) {
	alert('Wynik ujemny');
	console.log('Wynik ujemny');

} else if (value > 0) {
	alert('Wynik dodatni');
	console.log('Wynik dodatni');

} else {
	alert('Wynik równy zero');
	console.log('Wynik równy zero');
}