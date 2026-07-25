fetch("data/gallery.json")
.then(response => response.json())
.then(data => {

    const gallery = document.getElementById("gallery");

    gallery.innerHTML = "";

    data.photos.forEach(photo => {

        gallery.innerHTML += `

        <div class="col-lg-4 col-md-6 col-6">

            <div class="gallery-card">

                <img src="${photo.image}"
                     class="gallery-image">

            </div>

        </div>

        `;

    });

});
