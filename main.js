// Inspired by
// http://userscripts.org/scripts/show/26237

if( location.href.match(/^http:\/\/vkontakte\.ru\/away\.php/) ) {
  document.location.href = unescape(document.location.href.substr(32));
}
if( location.href.match(/^http:\/\/vk\.com\/away\.php/) ) {
  document.location.href = unescape(document.location.href.substr(26));
}
