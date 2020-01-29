let data;

var readyStateCheckInterval = setInterval(function() {
    console.log("Checking if ready")
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        init();
    }
}, 10);

function init() {
    // select elements
    var elements = Array.from(document.querySelectorAll('path'));

    data = loadJSON("data/gemeenten.json");
    console.log(data);


    // add event listenerssvg
    elements.forEach(function(el) {
    el.addEventListener("mouseenter", start);
    el.addEventListener("mouseout", stop)
    })
}

// event listener functions

function start(e){
    let id = e.target.id.substring(1);
    /*let found = data.find(function(element) {
        element["Code"] == id;
    })*/
    e.target.style.fill = "red";
    //console.log(found["Gemeente"]);
  }
  
  function stop(e){
      e.target.style.fill = "#ccc";
    // just an example
  }