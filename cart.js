var data_div = document.getElementById("data");

function appendLocations(el) {
  var data_div = document.getElementById("data");

  var div = document.createElement("div");

  let p_name = document.createElement("p");
  p_name.innerHTML = el.name;

  let p_rating = document.createElement("p");
  p_rating.innerHTML = el.rating;

  let img = document.createElement("img");
  img.src = el.image;

  div.append(p_name, p_rating, img);

  data_div.append(div);
}

function showVisited() {
  let data = JSON.parse(localStorage.getItem("visited"));

  data_div.innerHTML = null;

  data.forEach(function (el) {
    appendLocations(el);
  });
}
showVisited();

function priceaddition() {
  let data = JSON.parse(localStorage.getItem("visited"));
  // console.log(data.length)
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    var pre = +data[i].rating;
    total += pre;
  }
  // console.log(total)
  var total_div = (document.getElementById("totalrupe").innerHTML = total);

  //   console.log(total_div)
}
priceaddition();

function functioncopen() {
  var finalprice = document.getElementById("totalrupe").innerHTML;
  var price = (finalprice * 30) / 100;
  // console.log(price)
  let form = document.getElementById("copen");
  let code = form.code.value;
  if (code == "masai30") {
    var finalprice = (document.getElementById("totalrupe").innerHTML =
      finalprice - price);
    alert("congratulation you save 30% rupess");
    // break;
  } else {
    var finalprice = document.getElementById("totalrupe").innerHTML;
  }
}

function functionclick() {
  console.log("yes");
    window.location.href = "checkout.html";
    // window.location.href = "payment.html";

    
}
