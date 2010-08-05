function replace_away_link_at(obj) {
  if(!obj.href) return;

  if( obj.href.match(/^http:\/\/vkontakte\.ru\/away\.php/) ) {
    obj.href = unescape(obj.href.substr(32));
  }
  if( obj.href.match(/^http:\/\/vk\.com\/away\.php/) ) {
    obj.href = unescape(obj.href.substr(26));
  }
}

replace_away_link_at(document.location);

links = document.links;
for(var i = 0; i < links.length; ++i) {
  replace_away_link_at(links[i]);
}
