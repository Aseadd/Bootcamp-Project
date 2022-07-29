const instructors = [
  {
    image: '../images/milla.jpg',
    name: 'Million Ayalew',
    job: 'Software Engineering graduate at ',
    profile:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veritatis harum nesciunt nihil quae sit aliquam ab doloribus? Eum, ipsam!',
  },
  {
    image: '../images/Ag.jpg',
    name: 'Agmas Getnet',
    job: 'Software Engineer at Ministry of Innovation and TEchnology ',
    profile:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veritatis harum nesciunt nihil quae sit aliquam ab doloribus? Eum, ipsam!',
  },
  {
    image: '../images/Ad.jpg',
    name: 'Addis Tsega',
    job: 'Graduate of Software Engineering @ AASTU',
    profile:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veritatis harum nesciunt nihil quae sit aliquam ab doloribus? Eum, ipsam!',
  },
  {
    image: '../images/Addis.jpg',
    name: 'Bedada Bekele',
    job: 'Software Engineer @ EXC',
    profile:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veritatis harum nesciunt nihil quae sit aliquam ab doloribus? Eum, ipsam!',
  },
  {
    image: '../images/eyob.jpg',
    name: 'Eyob Temesgen',
    job: 'Software Engineer @ PCEHR',
    profile:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veritatis harum nesciunt nihil quae sit aliquam ab doloribus? Eum, ipsam!',
  },
  {
    image: '../images/Ag.jpg',
    name: 'Matias Belete',
    job: 'Data Engineer @ Self',
    profile:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veritatis harum nesciunt nihil quae sit aliquam ab doloribus? Eum, ipsam!',
  },
];

document.querySelector('.keynote-instructors').innerHTML = instructors
  .map(
    (instructor) => `
<div class="instructor">
<div class="instructor-bg"></div>
<img src=${instructor.image} alt="Instructor" />
<div class="instructor-description">
<h3>${instructor.name}</h3>
<p class="instructor-qualification">${instructor.job}</p>
<p
>${instructor.profile}</p
>
</div>
</div>
`
  )
  .join('');

function projects() {
  const instructor = Array.from(document.querySelectorAll('.instructor'));
  if (window.innerWidth > 0) {
    for (let i = 2; i < instructor.length; i += 1) {
      instructor[i].classList.add('hide-show-speaker');
    }
  }
}

projects();

function toggle() {
  document.querySelector('#btn').addEventListener('click', () => {
    const instructor = Array.from(document.querySelectorAll('.instructor'));
    for (let i = 2; i < instructor.length; i += 1) {
      instructor[i].classList.toggle('hide-show-speaker');
    }
    const btn = document.querySelector('.btn');
    if (
      btn.innerHTML ===
      'MORE <span> <i class="fa fa-angle-down" aria-hidden="true"></i></span>'
    ) {
      btn.innerHTML =
        'LESS <span> <i class="fa fa-angle-up" aria-hidden="true"></i></span>';
    } else {
      btn.innerHTML =
        'MORE <span> <i class="fa fa-angle-down" aria-hidden="true"></i></span>';
    }
  });
}
toggle();
