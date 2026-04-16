function func1(N) {
  var arr = [];
  for (var i = 0; i < N; i++) {
    arr[i] = i;
  }
  return arr;
}

function func2(N) {}

function DrawImage(index, el) {
  var img = document.createElement("img");
  img.src = "Images/" + index + ".jpg";
  img.width = 100;
  img.height = 100;
  el.appendChild(img);
}

function DrawTable(arr) {
  var table = document.getElementById("tblText");
  for (var i = 0; i < arr.length; i++) {
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    DrawImage(arr[i], cell);
    row.appendChild(cell);
    table.appendChild(row);
  }
}

function buildTableFromImages(arr) {
  const table = document.getElementById("tbl3");
  const row = document.createElement("tr");
  for (let i = 0; i < arr.length; i += 3) {
    let text = arr[i];
    let imgSrc = arr[i + 1];
    let size = arr[i + 2];

    const td = document.createElement("td");
    td.style.textAlign = "center";
    td.innerHTML = `<p>${text}</p> <img src="${imgSrc}" width="${size}" height="${size}" alt="${text}">`;

    row.appendChild(td);
  }

  table.appendChild(row);
}

const demoData = ["C#", "img/1.png", "100", "JS", "img/2.png", "100"];
buildTableFromImages(demoData);

var result = func1(5);
alert(result);
console.log(result);
