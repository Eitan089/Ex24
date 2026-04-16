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

function buildTableFromImages(dataArray) {
  const table = document.getElementById("tbl3");
  const row = document.createElement("tr");
  for (let i = 0; i < dataArray.length; i += 3) {
    let textVal = dataArray[i];
    let imgSrc = dataArray[i + 1];
    let sizeVal = dataArray[i + 2];

    const td = document.createElement("td");
    td.style.textAlign = "center";
    td.innerHTML = `
            <p>${textVal}</p>
            <img src="${imgSrc}" width="${sizeVal}" height="${sizeVal}" alt="${textVal}">
        `;

    row.appendChild(td);
  }

  table.appendChild(row);
}

const demoData = ["C#", "img/1.png", "100", "JS", "img/2.png", "100"];
buildTableFromImages(demoData);

var result = func1(5);
alert(result);
console.log(result);
