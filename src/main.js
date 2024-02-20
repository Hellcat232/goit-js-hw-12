import { formElements } from './js/form-elements';
import { requests } from './js/pixabay-api';
import { markupForOne } from './js/render-functions';
formElements.form.addEventListener('submit', hendlerSubmitForm);

let usersRequests;
let page;

async function hendlerSubmitForm(event) {
  event.preventDefault();
  //   formElements.gallery.innerHTML = '';
  usersRequests = event.target.elements.input.value.trim();
  page = 1;
  //   const data = await requests(usersRequests);
  //   renderMarkup(data.hits);

  const res = await requests(usersRequests);
  markupForOne(res.hits);

  event.target.reset();
}
