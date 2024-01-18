let bill = 120
let numPpl = 5
let serviceQuality = 'Great'

function calculateTip(quality) {
if(quality === 'Great'){
    return bill * 0.2
}
 else if (quality === 'good'){
    return bill * 0.15
 }
 else if(quality === poor) {
    return bill * 0.1
 }
 else {
    // return 'Please enter a valid quality.'
 }
    
} 

let tip = calculateTip(serviceQuality)

function calculateTotalBill(bill, tip) {
    return bill + tip
}
 let totalbill = calculateTotalBill(bill, tip)

 function calculateamountperperson(totalbill, numPpl){
return totalbill / numPpl
 }

 let amtperperson = calculateamountperperson(totalbill, numPpl)

 console.log('Tip: $' + tip)
 console.log ('Total Bill: $' + totalbill)
 console.log('Amount per person: $' + amtperperson )