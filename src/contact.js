function createContact(){
  const contactContainer  = document.createElement('div');
  contactContainer.classList.add('contactContainer');
  const addressTitle = document.createElement('h2');
  addressTitle.innerHTML = 'Address';
  const address = document.createElement('p');
  address.innerHTML = 'Llyn idwal, Bangor, United kingdom';
  const workingDaysTitle = document.createElement('h2');
  workingDaysTitle.innerHTML = 'Working days'
  const workingDays = document.createElement('p');
  workingDays.innerHTML = 'Monday to Friday, 8:00 a.m. to 11:00 p.m.'
  const phoneTitle = document.createElement('h2');
  phoneTitle.innerHTML = 'Telephone';
  const phone = document.createElement('p');
  phone.innerHTML = '123-45-67-89';
  const emailTitle = document.createElement('h2');
  emailTitle.innerHTML = 'Email';
  const email = document.createElement('p');
  email.innerHTML = 'restaurant@food.com';
  contactContainer.appendChild(addressTitle);
  contactContainer.appendChild(address);
  contactContainer.appendChild(workingDaysTitle);
  contactContainer.appendChild(workingDays);
  contactContainer.appendChild(phoneTitle);
  contactContainer.appendChild(phone);
  contactContainer.appendChild(emailTitle);
  contactContainer.appendChild(email);
  document.getElementById('homeBtn').classList.remove('active');
  document.getElementById('menuBtn').classList.remove('active');
  document.getElementById('contactBtn').classList.add('active');
  return contactContainer;
}

export default createContact;