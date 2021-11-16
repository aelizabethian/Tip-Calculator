"use strict";

const billInput = document.querySelector("#yourBill");
const container = document.querySelector(".container");
const tipDisplay = document.querySelector("#tipPercent");
const splitDisplay = document.querySelector("#splitValue");

function display() {
  let billAmt = parseInt(document.querySelector("#yourBill").value);
  let tipValue = parseInt(document.querySelector("#tipInput").value);
  let split = parseInt(document.querySelector("#splitInput").value);
  let totalDisplay = document.querySelector("#totalWithTip");
  let tipPercent = tipValue / 100;
  let billEach = document.querySelector("#billEach");
  let tipEach = document.querySelector("#tipEach");
  tipDisplay.innerText = `${tipValue}%`;
  splitDisplay.innerText = `${split}`;

  if (billAmt) {
    let tipTotal = billAmt * tipPercent;
    let total = parseFloat(billAmt + tipTotal).toFixed(2);
    totalDisplay.innerText = `${total}`;

    if (split > 1) {
      let billDivided = parseFloat(billAmt / split).toFixed(2);
      let tipDivided = parseFloat(tipTotal / split).toFixed(2);

      billEach.innerText = `${billDivided}`;
      tipEach.innerText = `${tipDivided}`;
    }
  } else if (!billAmt) {
    billEach.innerText = "";
    tipEach.innerText = "";
    totalDisplay.innerText = "";
  }
}

container.addEventListener("input", () => {
  display();
});

document.querySelector(".resetBtn").addEventListener("click", () => {
  document.querySelector("#yourBill").value = "";
  tipDisplay.innerText = "0%";
  splitDisplay.innerText = "No split";
  billEach.innerText = "";
  tipEach.innerText = "";
  document.querySelector("#totalWithTip").innerText = "";
  document.querySelector("#tipInput").value = 0;
  document.querySelector("#splitInput").value = 1;
});
