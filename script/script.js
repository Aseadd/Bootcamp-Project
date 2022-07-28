const hamburger1 = document.querySelector('.hamburger1');
const hamburger = document.querySelector('.hamburger');
const barMenu = document.querySelector('.bar-menu');
const mainContainer = document.querySelector('.main-container');
const menuNav = document.querySelector('.menu-nav');
const menuList = document.querySelector('.menu-list');
const header = document.querySelector('.header-links');
function myFunction() {
  hamburger1.classList.toggle('active');
  barMenu.classList.toggle('active');
  mainContainer.classList.toggle('active');
  menuList.classList.toggle('active');
  header.classList.toggle('active');
}

hamburger1.addEventListener('click', myFunction);
const navLink = document.querySelectorAll('.nav-link');

function closeBar() {
  hamburger1.classList.remove('active');
  barMenu.classList.remove('active');
  mainContainer.classList.remove('active');
  menuList.classList.remove('active');
  header.classList.remove('active');
}
navLink.forEach((n) => n.addEventListener('click', closeBar));

function myFunction2() {
  hamburger.classList.toggle('active');
  mainContainer.classList.toggle('active');
  menuList.classList.toggle('active');
}
hamburger.addEventListener('click', myFunction2);

function closeMenu() {
  hamburger.classList.remove('active');
  mainContainer.classList.remove('active');
  menuNav.classList.remove('active');
  menuList.classList.remove('active');
}
navLink.forEach((n) => n.addEventListener('click', closeMenu));

const instructors = [
  {
    instructorName: 'Yochai Benkler',
    image: 'images/Chon_Kilnam.jpg',
    jobTitle: 'Berkman Professor of Entrepreneurial Legal Studies',
    profile:
      'Benker studies commons-based peer production, and published his seminal book "the wealth of networks" in 2006',
  },
  {
    instructorName: 'Yochai Benkler',
    image: 'images/Chon_Kilnam.jpg',
    jobTitle: 'Berkman Professor of Entrepreneurial Legal Studies',
    profile:
      'Benker studies commons-based peer production, and published his seminal book "the wealth of networks" in 2006',
  },
  {
    instructorName: 'Yochai Benkler',
    image: 'images/Chon_Kilnam.jpg',
    jobTitle: 'Berkman Professor of Entrepreneurial Legal Studies',
    profile:
      'Benker studies commons-based peer production, and published his seminal book "the wealth of networks" in 2006',
  },
  {
    instructorName: 'Yochai Benkler',
    image: 'images/Chon_Kilnam.jpg',
    jobTitle: 'Berkman Professor of Entrepreneurial Legal Studies',
    profile:
      'Benker studies commons-based peer production, and published his seminal book "the wealth of networks" in 2006',
  },
  {
    instructorName: 'Yochai Benkler',
    image: 'images/Chon_Kilnam.jpg',
    jobTitle: 'Berkman Professor of Entrepreneurial Legal Studies',
    profile:
      'Benker studies commons-based peer production, and published his seminal book "the wealth of networks" in 2006',
  },
  {
    instructorName: 'Yochai Benkler',
    image: 'images/Chon_Kilnam.jpg',
    jobTitle: 'Berkman Professor of Entrepreneurial Legal Studies',
    profile:
      'Benker studies commons-based peer production, and published his seminal book "the wealth of networks" in 2006',
  },
];

const instructorSection = document.querySelector('#instructor-section');
const loadInstructor = document.querySelector('.instructor');

instructors.forEach((instructor) => {
  const card = document.createElement('div');
  card.classList.add('instructor-card1');

  const photoContainer = document.createElement('div');
  photoContainer.classList.add('photo-container');
  card.appendChild(photoContainer);

  const instructorPhoto = document.createElement('img');
  instructorPhoto.classList.add('instructor-photo');
  instructorPhoto.setAttribute('src', instructor.image);
  instructorPhoto.setAttribute('alt', 'Instructor photo');
  photoContainer.appendChild(instructorPhoto);

  const instructorProfile = document.createElement('div');
  instructorProfile.classList.add('instructor-profile');
  card.appendChild(instructorProfile);

  const name = document.createElement('h4');
  name.classList.add('instructor-name');
  name.textContent(instructor.instructorName);
  instructorProfile.appendChild(name);

  const job = document.createElement('span');
  job.classList.add('job');
  job.textContent(instructor.jobTitle);
  instructorProfile.appendChild(job);

  instructorInfo = document.createElement('p');
  instructorInfo.classList.add('Instructor-info');
  instructorInfo.textContent(instructor.profile);
  instructorProfile.appendChild(instructorInfo);

  loadInstructor.appendChild(card);
});
