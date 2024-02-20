import { formElements } from './form-elements';
import { requests } from './pixabay-api';

export function markupForOne(hits) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = hits;

  return `<li class="gallery-item"><a href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}"></a>
            <p><b>Likes: </b>${likes}</p>
            <p><b>Views: </b>${views}</p>
            <p><b>Comments: </b>${comments}</p>
            <p><b>Downloads: </b>${downloads}</p>
            </li>`;
}

function markupFoAll(hits) {
  return hits.map(markupForOne).join('');
}

export function renderMarkup(hits) {
  const markup = markupFoAll(hits);
  formElements.gallery.insertAdjacentHTML('afterbegin', markup);
  console.log(markup);
}
