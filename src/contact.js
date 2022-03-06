function createMenuPage() {
  const header = document.createElement('h1');
  const copy = document.createElement('p');
  const contactForm = document.createElement('form');
  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  const messageLabel = document.createElement('label');
  const messageInput = document.createElement('textarea');
  const send = document.createElement('a');

  header.textContent = 'Contact Us';
  copy.textContent = 'We love hearing from our clients!';
  nameLabel.textContent = 'Name:';
  nameLabel.htmlFor = 'name';
  nameInput.id = 'name';
  messageLabel.textContent = 'Message:';
  messageLabel.htmlFor = 'message';
  messageInput.id = 'message';
  send.textContent = 'Send Message';

  contactForm.append(nameLabel, nameInput, messageLabel, messageInput, send);

  return [header, copy, contactForm];
}

export {createMenuPage as default};