
function showPopup(src) {
  const popup = document.getElementById('popup');
  const img = document.getElementById('popup-img');
  img.src = src;
  popup.classList.add('show');
}
function closePopup() {
  document.getElementById('popup').classList.remove('show');
}
function logout() {
  localStorage.removeItem('rajaMinyakLoggedIn');
  window.location.href = 'login.html';
}

