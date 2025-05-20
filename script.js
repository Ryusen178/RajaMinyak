
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
function login() {
  const username = document.getElementById('username')?.value.trim();
  const password = document.getElementById('password')?.value.trim();
  const errorMsg = document.getElementById('errorMsg');

  if (!username || !password) {
    errorMsg.textContent = 'Username dan password harus diisi!';
    return;
  }

  if (username === 'admin' && password === 'admin123') {
    localStorage.setItem('name', username);
    localStorage.setItem('email', username + '@rajaminyak.com');
    localStorage.setItem('rajaMinyakLoggedIn', 'true');
    window.location.href = 'index.html';
  } else if (username === 'user' && password === 'user123') {
    localStorage.setItem('name', username);
    localStorage.setItem('email', username + '@rajaminyak.com');
    localStorage.setItem('rajaMinyakLoggedIn', 'true');
    window.location.href = 'index.html';
  } else {
    errorMsg.textContent = 'Username atau password salah!';
  }
}


