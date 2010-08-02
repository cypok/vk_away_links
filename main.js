links = document.links;
for(var i = 0; i < links.length; ++i) {
  href = links[i].href;
  if(href) {
    if(href.match(/http:\/\/vkontakte\.ru\/away\.php\?to=/)) {
      links[i].href = unescape(href.substr(32));
    }
    if(href.match(/http:\/\/vk\.com\/away\.php\?to=/)) {
      links[i].href = unescape(href.substr(26));
    }
  }
}
