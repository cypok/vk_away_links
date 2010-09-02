function replace_away_link_at(obj) {
  if(!obj.href) return;

  match = obj.href.match(/^http:\/\/vkontakte\.ru\/away\.php\?to=([^&]+)/) ||
          obj.href.match(/^http:\/\/vk\.com\/away\.php\?to=([^&]+)/);
  if( match ) {
    obj.href = unescape(match[1]);
  }
}

replace_away_link_at(document.location);

links = document.links;
for(var i = 0; i < links.length; ++i) {
  replace_away_link_at(links[i]);
}
