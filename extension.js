function channels(req) {
    var data = [
        ["Euronews", "euronews.png", "http://fr-par-iphone-1.cdn.hexaglobe.net:80/streaming/euronews_ewns/iphone_pt.m3u8"],
        ["RTP 1", "rtp1.png", "http://rtp-pull-live.hls.adaptive.level3.net:80/liverepeater/rtp1_5ch5h264.stream/livestream.m3u8"],
        ["RTP 2", "rtp2.png", "http://rtp-pull-live.hls.adaptive.level3.net:80/liverepeater/rtp2_5ch3h264.stream/livestream.m3u8"],
        ["RTP 3", "rtp3.png", "http://rtp-pull-live.hls.adaptive.level3.net:80/liverepeater/rtpn.smil/livestream.m3u8"],
        ["RTP Açores", "rtpac.png", "http://rtp-pull-live.hls.adaptive.level3.net:80/liverepeater/rtpacores_5rtpacores.stream/livestream.m3u8"],
        ["RTP África", "rtpaf.png", "http://rtp-pull-live.hls.adaptive.level3.net:80/liverepeater/rtpafrica_5ch27h264.stream/livestream.m3u8"],
        ["RTP Internacional", "rtpin.png", "http://rtp-pull-live.hls.adaptive.level3.net:80/liverepeater/rtpi_5ch120h264.stream/livestream.m3u8"],
        ["RTP Madeira", "rtpma.png", "http://rtp-pull-live.hls.adaptive.level3.net:80/liverepeater/rtpmadeira_5ch1016h264H14.stream/livestream.m3u8"],
        ["RTP Memoria", "rtpme.png", "http://rtp-pull-live.hls.adaptive.level3.net:80/liverepeater/rtpmem_5ch80h264.stream/livestream.m3u8"],
    ];
    var channels = [];
    for (var ii = 0; ii < data.length; ii++) {
        var item = data[ii];
        channels.push({
            title: item[0],
            country: "pt",
            image: item[1],
            background_color: "#fff",
            content_url: item[2],
        });
    }
    req.reply(channels);
}
