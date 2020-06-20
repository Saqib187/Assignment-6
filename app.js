 // Chapter # 31-34 and Task # 1
  // var a = new Date();
// alert(new Date)

  // Chapter # 31-34 and Task # 2
 // const monthNames = ["January", "February", "March", "April", "May", "June",
  // "July", "August", "September", "October", "November", "December"];
 
//  alert(monthNames[a.getMonth()]);

 // Chapter # 31-34 and Task # 3

//  var today = new Date();
 // var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
//  alert(days[today.getDay()]);

// Chapter # 31-34 and Task # 4

// if (today.getDay() == 0 || today.getDay() == 6) {
  //  alert('Today is FunDay');    
/// }

// Chapter # 31-34 and Task # 5

// var lastday = function(y,m){
  // return  new Date(y, m +1, 0).getDate();
  // }
  // document.write(lastday(2020,0));
  // var lastday = function(y,m){
  // return  new Date(y, m +1, 0).getDate();
   // }
    // document.write(lastday(2014,0));
    // document.write(lastday(2014,1));
    // document.write(lastday(2014,11));(lastday(2020,1));
  


// Chapter # 31-34 and Task # 6

// var dob = new Date(prompt("Enter your date of birth","Jan 1, 1970"))
// var dobmili = dob.getTime();
// var today = new Date (2);
// var todaymili = today.getTime()
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(accuage);
// let now = new Date();
// alert ("Current Time: " + now
   // + "\nElapsed milliseconds since January 1,1970:1449336743386 "
   // + "\nElapsed minute since January 1,1970:402593.53982944443"); // shows current date/time



// now.getMilliseconds()


// Chapter # 31-34 and Task # 7



// function formatAMPM(date) {
 // var hours = date.getHours();
 // var ampm = hours >= 12 ? 'pm' : 'am';

  // if (hours >= 12) {
     // alert("Its PM")
  // } else {
    // alert("Its PM")
  // }

// }

// formatAMPM(new Date);


// Chapter # 31-34 and Task # 8

// var a = new Date();
// alert(new Date)


// Chapter # 31-34 and Task # 9

// function gmod(n, m){
  // return ((n % m) + m) % m;
// }

/* @param {Date}   date   - optional, default is today
** @param {number} adjust - optiona, days to adjust date by
*/
// function kuwaiticalendar(date, adjust) {
  // var today = date? new Date(+date) : new Date();
  // if (adjust) {
    // today.setDate(today.getDate() + +adjust);
  // }

  // var day = today.getDate();
  // var month = today.getMonth();
  // var year = today.getFullYear();
  // var m = month + 1;
  // var y = year;

 // if (m < 3) {
   //   y -= 1;
     // m += 12;
  // }

  // var a = Math.floor(y / 100);
  // var b = 2 - a + Math.floor(a / 4);

  // if (y < 1583) b = 0;
  // if (y == 1582) {
    // if (m > 10)  b = -10;
    // if (m == 10) {
      // b = 0;
      // if (day > 4) b = -10;
    // }
  // }

  // var jd = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524;

  // b = 0;
  // if(jd > 2299160){
   // a = Math.floor((jd - 1867216.25) / 36524.25);
   // b = 1+a-Math.floor(a / 4);
  // }

  // var bb = jd+b+1524;
  // var cc = Math.floor((bb - 122.1) / 365.25);
  // var dd = Math.floor(365.25 * cc);
  // var ee = Math.floor((bb - dd) / 30.6001);
  // day = (bb - dd) - Math.floor(30.6001 * ee);
  // month = ee - 1;

  // if (ee > 13) {
    // cc += 1;
    // month = ee - 13;
  // }
  // year = cc - 4716;
  // var wd = gmod(jd + 1, 7) + 1;

  // var iyear = 10631./30.;
  // var epochastro = 1948084;
  // var epochcivil = 1948085;

  // var shift1 = 8.01 / 60.;

  // var z = jd-epochastro;
  // var cyc = Math.floor(z/10631.);
  // z = z - 10631 * cyc;
  // var j = Math.floor((z - shift1) / iyear);
  // var iy = 30 * cyc + j;
  // z = z - Math.floor(j * iyear + shift1);
  // var im = Math.floor((z + 28.5001) / 29.5);

  // if (im == 13) im = 12;
  // var id = z-Math.floor(29.5001*im-29);

  // return [
    // day,       //calculated day (CE)
    // month - 1, //calculated month (CE)
    // year,      //calculated year (CE)
    // jd - 1,    //julian day number
    // wd - 1,    //weekday number
    // id,        //islamic date
    // im - 1,    //islamic month
    //iy         //islamic year
  // ];
// }

// function writeIslamicDate(date, adjustment) {
  // var wdNames = ["Ahad", "Ithnin", "Thulatha", "Arbaa", "Khams", "Jumuah", "Sabt"];
  // var iMonthNames = ["Muharram", "Safar", "Rabi'ul Awwal", "Rabi'ul Akhir", "Jumadal Ula", "Jumadal Akhira",
     //                "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhul Qa'ada", "Dhul Hijja"];
  // var iDate = kuwaiticalendar(date, adjustment);
  // var outputIslamicDate = wdNames[iDate[4]] + ", " + iDate[5] + " " +
     //                     iMonthNames[iDate[6]] + " " + iDate[7] + " AH";
  // return outputIslamicDate;
// }

// No date or adjust
// document.write(writeIslamicDate());
// No date, adjust to tomorrow
// document.write(writeIslamicDate(undefined, 1));
// Date for 1 Jan 2017
// document.write(writeIslamicDate(new Date(2017,0,1)));
// Date for 1 Jan 2017, adjust by -1 day
// document.write(writeIslamicDate(new Date(2017,0,1), -1));


  // Chapter # 31-34 and Task # 10

  // const start = Date.now();

// document.write('starting timer...');
// expected output: starting timer...

// setTimeout(() => {
  // const millis = Date.now() - start;

  // document.write(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // expected output : seconds elapsed = 2
// }, 2000);

 // Chapter # 31-34 and Task # 11

// var pakistanTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Karachi"});
 // document.write('Pakistan: '+ (new Date(pakistanTime)).toISOString())
 
// var asiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
 // document.write('Asia time: '+ (new Date(asiaTime)).toISOString())
 
// var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
 // document.write('USA time: '+ (new Date(usaTime)).toISOString())
 
// var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
 // document.write('India time: '+ (new Date(indiaTime)).toISOString())



// Chapter # 31-34 and Task # 12
// var now  = new Date();        // current date/time
// var hrs  = now.getHours();    // 0 to 23
// var mins = now.getMinutes();
// var secs = now.getSeconds();
// document.writeln("<p>It is " + now + "</p>");
// document.writeln("<p>Hour is " + hrs + "</p>");
// document.writeln("<p>Minute is " + mins + "</p>");
// document.writeln("<p>Second is " + secs + "</p>");
// if (hrs < 12) {
 // document.writeln("<h2>100 years back!</h2>");
// } else {
  // document.writeln("<h2>it was!</h2>");
// }

// Chapter # 31-34 and Task # 13


// Chapter # 31-34 and Task # 14

var unit = 150;
var amt = 0;
if(unit > 0 && unit <= 200){
  amt = unit * 1 ;
}
else if(unit > 200 && unit <= 400){
  amt = 200 + 400 + ((unit - 400) * 3);
}
else{
  document.write("Wrong input");
}
document.write("Total bill amount is " + amt);


// Chapter # 35-38 and Task # 1

// alert('Sat,DEC,05,2015,22:18:39,GMT+0500(PKR)');

// Chapter # 35-38 and Task # 2

// function greeting (greet){
  // alert(greet)
// }
// greeting("SAQIB KHALID");

// Chapter # 35-38 and Task # 3

// var h = 14;
 // function add(a,b,c){
  // alert(h);
  // var z = a+b+c
  // return z;
// }
// var g = add(5,4,23);
// alert(g);

// Chapter # 35-38 and Task # 4

// function calc(num1,opr,num2){
  // if(opr === "+"){
    // return num1 + num2
  // }
  // else if(opr === "-"){
    // return num1 - num2
  // }
  // else if(opr === "*"){
    //  return num1 *num2
  // }else{
    // return "Incorrect Operator!"
  // }
// }
// calc
// alert(calc(1234,"+",56))

// Chapter # 35-38 and Task # 5

// var num = prompt('Enter a number');
// function square(x){
 // var result = x * x;
  // alert("Square of your number is: " + result);
// }
// square(num);

  

// Chapter # 35-38 and Task # 6
// var a,b,f;
// a=parseInt(prompt("Enter a no."));
// b=1;
// f=1;
// while(b<=a)
// {
  // f=f*b;
  // b=b+1;
// }
// document.write("factorial of "+ a + " is" + f);

// Chapter # 35-38 and Task # 7


// Chapter # 35-38 and Task # 8
// console.log(Math.hypot(3, 4));
// expected output: 5

// console.log(Math.hypot(5, 12));
// expected output: 13

// console.log(Math.hypot(3, 4, 5));
// expected output: 7.0710678118654755

// console.log(Math.hypot(-5));

// Chapter # 35-38 and Task # 9
 
// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt("Enter a whole number for the width of your rectangle.");
// function area(length, width) {
   //  return length * width;
// }
// function perimeter(length, width) {
   // return 2*( length + width);
// }

// document.writeln('The area of your rectangle is ' + area(length, width));         
// document.writeln('The perimeter of your rectangle is ' + perimeter(length,width));

// Chapter # 35-38 and Task # 10

// function check_Palindrome(str_entry){
  // Change the string into lower case and remove  all non-alphanumeric characters
   //  var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
   // var ccount = 0;
  // Check whether the string is empty or not
  // if(cstr==="") {
    // document.write("Nothing found!");
      // return false;
    // }
  // Check if the length of the string is even or odd 
    // if ((cstr.length) % 2 === 0) {
     // ccount = (cstr.length) / 2;
    // } else {
  // If the length of the string is 1 then it becomes a palindrome
      // if (cstr.length === 1) {
       // document.write("Entry is a palindrome.");
        // return true;
      // } else {
  // If the length of the string is odd ignore middle character
        // ccount = (cstr.length - 1) / 2;
     // }
    // }
  // Loop through to check the first character to the last character and then move next
    // for (var x = 0; x < ccount; x++) {
  // Compare characters and drop them if they do not match 
      // if (cstr[x] != cstr.slice(-1-x)[0]) {
        // document.write("Entry is not a palindrome.");
        // return false;
      // }
    // }
    // document.write("The entry is a palindrome.");
    // return true;
  // }
  // check_Palindrome('madam');
  // check_Palindrome('nurses run');
  // check_Palindrome('fox');





// Chapter # 35-38 and Task # 11


// function uppercase(str)
// {
  // var array1 = str.split(' ');
  // var newarray1 = [];
    
 // for(var x = 0; x < array1.length; x++){
   // newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  // }
  // return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

// Chapter # 35-38 and Task # 12

// function find_longest_word(str)
// {
  // var array1 = str.match(/\w[a-z]{0,}/gi);
  // var result = array1[0];

  // for(var x = 1 ; x < array1.length ; x++)
  // {
    // if(result.length < array1[x].length)
    // {
    // result = array1[x];
   // } 
  // }
  // return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));


// Chapter # 35-38 and Task # 13

// function char_count(str, letter) 
// {
 // var letter_Count = 0;
 // for (var position = 0; position < str.length; position++) 
 // {
    // if (str.charAt(position) == letter) 
      // {
      // letter_Count += 1;
     // }
  // }
  // return letter_Count;
// }

// document.write(char_count('w3resource.com', 'o'));

// Chapter # 35-38 and Task # 14

// function circle(radius)
// {
   // this.radius = radius;
  // area method
  // this.area = function () 
    // {
       // return Math.PI * this.radius * this.radius;
    // };
  // perimeter method
    // this.perimeter = function ()
    // {
      // return 2*Math.PI*this.radius;
    // };
// }
// var c = new circle(3);
// document.write('Area =', c.area().toFixed(2));
// document.write('perimeter =', c.perimeter().toFixed(2));