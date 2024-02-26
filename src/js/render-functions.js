import { getImages } from "./pixabay-api"; 
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryList = document.querySelector(".gallery-list")
const searchButton = document.querySelector("button")
const loader = document.querySelector(".loader");



export function clearGallery() {
    galleryList.innerHTML = "";
}



searchButton.addEventListener("click", () => {
    loader.style.display = "block";
    getImages().then(imagesGenerating => {
        galleryList.innerHTML = appendImageCard(imagesGenerating);
        loader.style.display = "none";
         const lightbox = new SimpleLightbox('.gallery-link');
        lightbox.refresh();
    });
});


export function appendImageCard(imagesGenerating) {
    return imagesGenerating.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link" alt="${tags}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
        </a>
            <div class="wrapper-descs">
            <div class="wrapper-desc">
                <p class="desc">Likes</p>
                <p class="desc-values">${likes}</p>
                </div>
                <div class="wrapper-desc">
                <p class="desc">Views</p>
                <p class="desc-values">${views}</p>
                </div>
                <div class="wrapper-desc">
                <p class="desc">Comments</p>
                <p class="desc-values">${comments}</p>
                </div>
                <div class="wrapper-desc">
                <p class="desc">Downloads</p>
                <p class="desc-values">${downloads}</p>
                </div>
            </div>
        </li>`).join("");

}

