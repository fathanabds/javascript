var s = '';

for (var i = 7; i >= 1; i--){
	for (var ix = 1; ix <= i; ix++){
		s += '*'
	}
	s += '\n'
}

console.log(s)