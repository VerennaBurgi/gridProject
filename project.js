const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");

    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(4, 4);

$('#container').on("click", ".grid-item", function(){
  let thingweactuallyclickon = $(this);
  $(thingweactuallyclickon).toggleClass('noDisplay');
 
});
