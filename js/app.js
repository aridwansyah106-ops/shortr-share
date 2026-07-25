fetch("data/event.json")
.then(res => res.json())
.then(data => {

    console.log(data);

    document.getElementById("coupleName").innerHTML = data.couple;
    document.querySelector(".date").innerHTML = data.date;
    document.getElementById("photoLink").href = data.photoLink;
    document.getElementById("gifLink").href = data.gifLink;

})
.catch(error => {
    console.error(error);
});
