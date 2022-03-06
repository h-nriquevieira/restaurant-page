function createMenuPage() {
  const header = document.createElement('h1');
  const copy = document.createElement('p');
  const contactForm = document.createElement('form');
  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  const messageLabel = document.createElement('label');
  const messageInput = document.createElement('textarea');

  header.textContent = 'Contact Us';
  copy.textContent = 'We love hearing from our clients!';
  nameLabel.textContent = 'Name:';
  nameLabel.htmlFor = 'name';
  nameInput.id = 'name';
  messageLabel.textContent = 'Message:';
  messageLabel.htmlFor = 'message';
  messageInput.id = 'message';

  contactForm.append(nameLabel, nameInput, messageLabel, messageInput);

  return [header, copy, contactForm];
}

export {createMenuPage as default};