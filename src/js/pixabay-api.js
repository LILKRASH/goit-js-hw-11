import { clearGallery } from "./render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const inputText = document.querySelector("input")
const formImage = document.querySelector("form")
const loader = document.querySelector(".loader");
const URL = 'https://pixabay.com/api/'
const KEY = '42561040-543dc47762d23067e130ec962';
let QUERY = "";
inputText.addEventListener("input", event => {
    QUERY = inputText.value;
    console.log(QUERY)
})

export function getImages() {

    clearGallery()

    const LINK = `${URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&safesearch=true`

    return fetch(LINK)
        .then(response => {
            if (!response.ok) {
                throw new Error("Image error")
            }
            return response.json()
        })
        .then(data => {
           const imagesGenerating = data.hits
            if (imagesGenerating.length === 0) {
                iziToast.warning({
                    title: 'Caution',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                return imagesGenerating
            }
        })
        .catch(error => {
            iziToast.error({
    title: 'Caution',
    message: 'Error while fetching images from pixabay',
            });
            return []
        })
}

formImage.addEventListener("submit", event => {
    event.preventDefault();
    getImages()
})
