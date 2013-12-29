(function() {
  var langsel = document.getElementById('langsel');
  var url = window.location.href;
  if (url.indexOf('/es/') != -1) {
    document.getElementById('lang-es').className = 'active';
  }
  else if (url.indexOf('/en-US/') != -1) {
    document.getElementById('lang-en').className = 'active';
  }
})();
