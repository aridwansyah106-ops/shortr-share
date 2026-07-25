fetch("data/gallery.json")

.then(response => response.json())

.then(data => {

    const gallery = document.getElementById("gallery");

    gallery.innerHTML = "";

    data.photos.forEach(photo => {

        gallery.innerHTML += `

        <div class="col-lg-4 col-md-6 col-6">

            <div class="gallery-card">

                <img

                    src="${photo.image}"

                    class="gallery-image"

                    onclick="openPhoto('${photo.image}')">

            </div>

        </div>

        `;

    });

});

const modal = document.getElementById("photoModal");

const modalImage = document.getElementById("modalImage");

function openPhoto(image){

    modal.style.display="flex";

    modalImage.src=image;

}

document.querySelector(".close-btn")

.addEventListener("click",()=>{

    modal.style.display="none";

});

modal.onclick=()=>{

    modal.style.display="none";

}
