console.log("yes");

var data_div = document.getElementById("data");

function storeLocation() {
  let form = document.getElementById("myForm");

  let name = form.name.value;
  let rating = form.rating.value;
  let image = form.img.value;

  let location = {
    name,
    rating,
    image,
  };
  // console.log("location:", location);
  let arr;

  arr = localStorage.getItem("location");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("location"));
  }
  arr.push(location);

  localStorage.setItem("location", JSON.stringify(arr));
  showLocation();
}

function appendLocations(el) {
  var data_div = document.getElementById("data");

  var div = document.createElement("div");

  let p_name = document.createElement("p");
  p_name.innerHTML = el.name;

  let p_rating = document.createElement("p");
  p_rating.innerHTML = el.rating;

  let img = document.createElement("img");
  img.src = el.image;

  let btn = document.createElement("button");
  btn.innerHTML = "add to cart";

  btn.addEventListener("click", function () {
    addtoVisited(el);
  });
  btn.style.display = "block";

  div.append(p_name, p_rating, img, btn);

  data_div.append(div);
}

function showLocation() {
  let data = JSON.parse(localStorage.getItem("location"));
  data_div.innerHTML = null;

  data.forEach(function (el) {
    appendLocations(el);
  });
}
showLocation();

function addtoVisited(obj) {
  let arr;

  arr = localStorage.getItem("visited");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("visited"));
  }
  //   console.log(obj.rating)
  //   console.log(arr);
  if (arr.length == 0) {
    arr.push(obj);
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].name == obj.name) {
        break;
      } else if (i == arr.length - 1) {
        arr.push(obj);
      }
    }
  }
  console.log(arr.length);

  localStorage.setItem("visited", JSON.stringify(arr));
}

function showVisited() {
  window.location.href = "cart.html";
}
