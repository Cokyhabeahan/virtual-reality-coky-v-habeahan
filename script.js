document.getElementById('enter-tour').addEventListener('click', function() {
  document.getElementById('splash-screen').style.display = 'none';
  document.getElementById('menu').style.display = 'block';
});

document.getElementById('start-tour').addEventListener('click', function() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('virtual-tour').style.display = 'block';
});

document.getElementById('guide').addEventListener('click', function() {
  alert('Guide: Use the navigation boxes to move between scenes.');
});

document.getElementById('about').addEventListener('click', function() {
  alert('About: This is a Virtual Tour application developed using A-Frame.');
});

document.querySelector('#nav1').addEventListener('click', function () {
  document.querySelector('#image-360').setAttribute('src', '#sphere2');
});
document.querySelector('#nav2').addEventListener('click', function () {
  document.querySelector('#image-360').setAttribute('src', '#sphere1');
});
