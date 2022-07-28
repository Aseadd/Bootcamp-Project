const more = document.querySelector('.btn');
const card3 = document.getElementById('instructor-card3');
const card4 = document.getElementById('instructor-card4');
const card5 = document.getElementById('instructor-card5');
const card6 = document.getElementById('instructor-card6');
function moreInstructors() {
  card3.classList.toggle('active');
  card4.classList.toggle('active');
  card5.classList.toggle('active');
  card6.classList.toggle('active');
  document.getElementById('btn').innerHTML =
    'LESS <span> <i class="fa fa-angle-down" aria-hidden="true"></i></span>';
}
more.addEventListener('click', moreInstructors);

function lessInstructors() {
  card3.classList.remove('active');
  card4.classList.remove('active');
  card5.classList.remove('active');
  card6.classList.remove('active');
  document.getElementById('btn').innerHTML = 'More';
}
