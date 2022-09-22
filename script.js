let clicks = 0;
let cpc = 1;
let upprice = 10;

function onClick(clicks) {
  document.getElementById("btn").innerHTML = clicks;
  console.log(clicks)
}

function clicked() {
  clicks = clicks + cpc;
  onClick(clicks + " clicks");
}

function upgrade() {
  if (clicks > upprice) {
    clicks = clicks - upprice;
    onClick(clicks + " clicks");
    cpc = cpc * 2;
    upprice = upprice * 2;
    document.getElementById("costs").innerHTML = "Costs " + upprice + " Clicks";
  }
}