let result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);
let email = 'bukotko2009@gmail.com';
if (email.includes('@')) {
  console.log('Email contains @ symbol');
} else {
  console.log('Email does not contain @ symbol');
}
console.log(`Email length: ${email.length}`);
let my = 'My';
let name = 'name';
let is = 'is';
let fullName = `${my} ${name} ${is} Stefan`;
console.log(fullName);
let userName = 'Олександро';
let payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);