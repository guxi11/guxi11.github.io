(function() {
  function parseQuery() {
    var obj = {};
    window.location.search.substring(1).split('&').forEach(function(pair) {
      if (!pair) return;
      var parts = pair.split('=');
      obj[parts[0]] = parts[1];
    });
    return obj;
  }

  var baseUrl = window.location.href.split('?')[0];

  function setUrlQuery(query) {
    window.history.replaceState(null, '', query ? baseUrl + query : baseUrl);
  }

  document.addEventListener('DOMContentLoaded', function() {
    var tagsEl = document.querySelector('.js-tags');
    var result = document.querySelector('.js-result');
    if (!tagsEl || !result) return;

    var sections = Array.from(result.querySelectorAll('section'));
    var lastFocus = null;
    var hasInit = false;

    function findButton(tag) {
      if (!tag) return tagsEl.querySelector('.tag-button--all');
      return tagsEl.querySelector('[data-encode="' + tag + '"]') || tagsEl.querySelector('.tag-button--all');
    }

    function focusButton(btn) {
      if (!btn) return;
      if (lastFocus && lastFocus !== btn) lastFocus.classList.remove('focus');
      btn.classList.add('focus');
      lastFocus = btn;
    }

    function tagSelect(tag, target) {
      sections.forEach(function(section) {
        var items = Array.from(section.querySelectorAll('.item'));
        var anyVisible = false;
        items.forEach(function(item) {
          var tags = (item.dataset.tags || '').split(',').map(function(t) { return t.trim(); });
          var visible = !tag || tags.indexOf(tag) !== -1;
          item.classList.toggle('d-none', !visible);
          if (visible) anyVisible = true;
        });
        section.classList.toggle('d-none', !anyVisible);
      });

      if (!hasInit) {
        result.classList.remove('d-none');
        hasInit = true;
      }

      if (target) {
        focusButton(target);
        var encode = target.dataset.encode;
        setUrlQuery(encode ? '?tag=' + encode : null);
      } else {
        focusButton(findButton(tag));
      }
    }

    var query = parseQuery();
    tagSelect(query.tag);

    tagsEl.addEventListener('click', function(e) {
      var a = e.target.closest('a');
      if (a) tagSelect(a.dataset.encode, a);
    });
  });
})();
