/* Lom Bryggeri — send skjema til post@lomb.no

   Nettsida ligg på GitHub Pages og har ingen server, så e-posten vert send via
   FormSubmit (formsubmit.co). Første innsending frå den publiserte sida sender
   ei «Activate Form»-lenke til post@lomb.no — ho må klikkast éin gong før
   e-postane kjem fram. Byter ein mottakaradresse, må skjemaet aktiverast på nytt. */
(function () {
  var ENDPOINT = 'https://formsubmit.co/ajax/post@lomb.no';

  // fields: { _subject, _replyto, _honey, 'Namn': …, … } → Promise som gjev true/false
  window.sendSkjema = function (fields) {
    // Honningfella er fylt ut, så det er truleg ein robot. Lat som alt gjekk bra.
    if (fields._honey) return Promise.resolve(true);

    var body = { _template: 'table' };
    Object.keys(fields).forEach(function (k) { if (k !== '_honey') body[k] = fields[k]; });
    body['Språk på sida'] = document.documentElement.lang === 'en' ? 'Engelsk' : 'Norsk';

    var ctrl = 'AbortController' in window ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 15000) : null;

    return fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(body),
      signal: ctrl ? ctrl.signal : undefined
    })
      .then(function (res) {
        return res.json()
          .catch(function () { return {}; })
          .then(function (data) { return res.ok && String(data.success) === 'true'; });
      })
      .catch(function () { return false; })
      .then(function (ok) {
        if (timer) clearTimeout(timer);
        return ok;
      });
  };
})();
