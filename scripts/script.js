// Fetch geneente id data
fetch('data/gemeenten.json')
	.then(res => res.json())
	.then(json => console.log(json));


// Add event listeners
document.querySelectorAll('path').forEach(el => {
	el.addEventListener("mouseenter", start);
	el.addEventListener("mouseleave", stop);
});

// event listener functions
function start(e){
    let id = e.target.id.substring(1);
       e.target.style.fill = "red";
}
  
function stop(e){
    e.target.style.fill = "#ccc";
}
