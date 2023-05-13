document.getElementById('sysinfobtn').addEventListener('click', typeWriterAll);


var i = 0;
var ii = 0;
var iii = 0;
var iiii = 0;
var iiiii = 0;
var txt1 = `HOST NAME: DEV`
var txt2 = `OS NAME: MICROSOFT WINDOWS 10 HOME`
var txt3 = `OS MANUFACTURER: MICROSOFT CORPORATION`
var txt4 = `REGISTERED OWNER: N9DEVS@GMAIL.COM`
var txt5 = `TIMEZONE: (UTC+4:00) DUBAI, UAE`
var speed = 75;

function typeWriterAll() {
    typeWriter();
    typeWriterI();
    typeWriterII();
    typeWriterIII();
    typeWriterIIII();
    
}
function typeWriter() {
  if (i < txt1.length) {
    document.getElementById("sysinfo").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function typeWriterI() {
  if (ii < txt2.length) {
    document.getElementById("sysinfo-1").innerHTML += txt2.charAt(ii);
    ii++;
    setTimeout(typeWriterI, speed);
  }
}
function typeWriterII() {
  if (iii < txt3.length) {
    document.getElementById("sysinfo-2").innerHTML += txt3.charAt(iii);
    iii++;
    setTimeout(typeWriterII, speed);
  }
}
function typeWriterIII() {
  if (iiii < txt4.length) {
    document.getElementById("sysinfo-3").innerHTML += txt4.charAt(iiii);
    iiii++;
    setTimeout(typeWriterIII, speed);
  }
}
function typeWriterIIII() {
  if (iiiii < txt5.length) {
    document.getElementById("sysinfo-4").innerHTML += txt5.charAt(iiiii);
    iiiii++;
    setTimeout(typeWriterIIII, speed);
  }
}


