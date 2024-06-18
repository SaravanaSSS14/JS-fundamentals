
function calculateGrocery(){
    let g1 = parseFloat(document.getElementById('g1').value);
    let g2 = parseFloat(document.getElementById('g2').value);
    let g3 = parseFloat(document.getElementById('g3').value);
    
    let res  = g1+g2+g3;
    document.getElementById('res').innerText = `The total amount is ${res}`;
} 