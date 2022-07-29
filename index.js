setInterval(function() {
    var currentUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    
    if($('#trash-twitch').length) {
        $("#trash-twitch").attr("href", currentUrl +'/videos?filter=archives&sort=time');
    } else {
        $('.channel-info-content').prepend('<a id="trash-twitch">쓰레기 같은 트위치</a>');
    }
});