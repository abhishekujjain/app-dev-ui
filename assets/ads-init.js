(function () {
  var MAX_TRIES = 50;

  function initAdUnits(tries) {
    var units = document.querySelectorAll('ins.adsbygoogle');
    if (!units.length) return;

    if (typeof window.adsbygoogle === 'undefined') {
      if (tries < MAX_TRIES) {
        setTimeout(function () { initAdUnits(tries + 1); }, 100);
      }
      return;
    }

    units.forEach(function () {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { initAdUnits(0); });
  } else {
    initAdUnits(0);
  }
})();
