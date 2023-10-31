var element = document.getElementById('back-link');

element.setAttribute('href', document.referrer);

element.onclick = function() {
  history.back();
  return false;
}
