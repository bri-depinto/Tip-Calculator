function calculateAndDisplay() {
   // get the input values from our html forms
   let bill = parseFloat(document.getElementById('totalBill').value)
   let numPpl = parseInt(document.getElementById('numPpl').value)
   let serviceQuality = document.getElementById('serviceQuality').value

   // calculate tip, total bill, and the amount per person using helper function
   let tip = calculateTip(bill, serviceQuality)
   let totalBill = calculateTotalBill(bill, tip)
   let amtPerPerson = calculateAmtPerPerson(totalBill, numPpl)

   // display the result in html document
   document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
   document.getElementById('totalBillResult').innerText = 'Total Bill: $' + totalBill.toFixed(2)
   document.getElementById('amtPerPersonResult').innerText = 'Amount per person: $' + amtPerPerson.toFixed(2)

}
// helper function to calculate tip based on the bill and service quality


function calculateTip(bill, quality){
   if(quality === 'Great'){
      return bill * 0.2
  }
   else if (quality === 'good'){
      return bill * 0.15
   }
   else if(quality === 'poor') {
      return bill * 0.1
   }
   else {
      return 0
   }
}

// helper function to calculte total bill by adding the orginal bill and tip
function calculateTotalBill(bill,tip){
   return bill + tip
}

function calculateAmtPerPerson(totalBill,numPpl){
   return totalBill/numPpl
}







/* let bill = 120
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
 console.log('Amount per person: $' + amtperperson ) */