import homeImage from './homeimg.jpg';

function createHomePage() {
  const header = document.createElement('h1');
  const img = new Image();
  const copy = document.createElement('p');

  header.textContent = 'Bread Company';
  img.src = homeImage;
  copy.textContent = 'Bread Company was created in 2022 to provide fresh products to you every day.';



  return [header, img, copy];
}

export {createHomePage as default};