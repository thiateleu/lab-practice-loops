// //////////////Part 1: fizz buzz    ////////////////
for (let i = 1; i <= 100; i++) {
    if ( i % 3 === 0 && i %5 === 0) {
        console.log("fizz buzz");
    } else if ( i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

/////////////Part 2: prime time ////////////////////
let n = 4;
let nextnumber = n + 1;
while (true) { 
let  isPrime = true; }
for ( let i = 2; i<= nextprimenumber; i++)  {
    if (nextprimenumber % i === 0) {
        isPrime = false;
        break;
    }
if (isPrime) {
    console.log(nextprimenumber); 
    break;
} 
nextprimenumber++;
}


/////////////part 3: Feeling Loopy /////////////////////////
const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let cell = "";
let cells = [];
let rows = [];
for (const char of csvData) {
    if (char === ",") {
        cells.push(cell);
        cell = "";
    } else if (char === "\n") {
        cells.push(cell);
        rows.push(cells);
        cells = [];
        cell = "";
    }  else {
        cell += char;
    }
}

if (cell !== "") cells.push(cells);
if (cells.length > 0) rows.push(cells);
rows.forEach(row => 0)
{
    console.log(svData);
}
