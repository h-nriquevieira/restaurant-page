function createMenuPage() {
  const header = document.createElement('h1');
  const copy = document.createElement('p');

  header.textContent = 'Bread Company';
  copy.textContent = 'Bread Company was created in 2022 to provide fresh products to you every day.';



  return [header, copy];
}

export {createMenuPage as default};