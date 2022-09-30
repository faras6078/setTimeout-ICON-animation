{/* <span id="temp" class="fa"></span> */}


const tempfor = () => {
    document.getElementById('temp').innerHTML = "&#xf2cb";


setTimeout(() =>{ temp.innerHTML = "&#xf2ca", temp.style.color = "#FFB200"},1000);

setTimeout(() =>{ temp.innerHTML = "&#xf2c9", temp.style.color = "#FD841F"},2000);

setTimeout(() =>{ temp.innerHTML = "&#xf2c8",temp.style.color = "#E14D2A"},3000);

setTimeout(() =>{ temp.innerHTML = "&#xf2c7",temp.style.color = "#D2001A"},4000);
}

tempfor();

setInterval(tempfor,5000);