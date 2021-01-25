let a = 3;
let b = 5;
let c;

let output = '';

output += 'let a = 3;';
output += '\n';

output += 'let b = 5;';
output += '\n';

output += 'let c;';
output += '\n';

output += '--------------';
output += '\n';

output += 'a + b = ' + (a + b);
output += '\n';

output += 'a - b = ' + (a - b); 
output += '\n';

output += 'a * b = ' + (a * b);
output += '\n';

output += 'a / b = ' + (a / b);
output += '\n';

output += 'a % b = ' + (a % b);
output += '\n';

output += '(a += b) : ' + (a += b);
output += '\n';

output += '(a -= b) : ' + (a -= b);
output += '\n';

output += '(a *= b) : ' + (a *= b);
output += '\n';

output += '(a /= b) : ' + (a /= b);
output += '\n';

output += '(a %= b) : ' + (a %= b);
output += '\n';

output += '(a == b) : ' + (a == b);
output += '\n';

output += '(a != b) : ' + (a != b);
output += '\n';

output += '(a > b) : ' + (a > b);
output += '\n';

output += '(a < b) : ' + (a < b);
output += '\n';

output += '(!a && !c) : ' + (!a && !b);
output += '\n';

output += '(!a || !c) : ' + (!a || !c);
output += '\n';

alert(output);

let first_name = 'garvishtha';
let last_name = 'arya';
let email = 'arya0009@algonquinlive.com';

let task = '';

task += 'My name is ' + first_name;
task += ' ' +last_name;
task += '. ';
task += 'You can contact me at ' + email;


alert(task);
