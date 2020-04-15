
function map() {

    var mapId = 'map',
        mapCenter = [52.249703, 20.828595]
        mapMarker = true;

    if ($('#' + mapId).length > 0) {

        var icon = L.icon({
            iconUrl: 'img/marker.png',
            iconSize: [25, 37.5],
            popupAnchor: [0, -18],
            tooltipAnchor: [0, 19]
        });

        var dragging = false,
            tap = false;

        if ($(window).width() > 700) {
            dragging = true;
            tap = true;
        }

        var map = L.map(mapId, {
            center: mapCenter,
            zoom: 13,
            dragging: dragging,
            tap: tap,
            scrollWheelZoom: false
        });

        var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png'
        });

        Stamen_TonerLite.addTo(map);

        map.once('focus', function () {
            map.scrollWheelZoom.enable();
        });

        if (mapMarker) {
            var marker = L.marker(mapCenter, {
                icon: icon
            }).addTo(map);

            marker.bindPopup("<div class='p-4'><h5>Info Window Content</h5><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p></div>", {
                minwidth: 200,
                maxWidth: 600,
                className: 'map-custom-popup'
            })

        }
    }

}
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1200
});
    map();

    Swal.fire({
        title: 'SARS-CoV-2',
        text: 'Antywirusowe działanie ozonu jest od dawna znane i udokumentowane. Wstępne wyniki badań w Institute of Virology w Hubei (Chiny) potwierdziło, że ozon niszczy nowego wirusa SARS-CoV-2, który jest wirusem osłonkowym, otoczony dodatkową osłonką lipidową. Ozon rozbija cząsteczki lipidowe w miejscu ich podwójnych lub potrójnych wiązań, niszczy osłonkę lipidową, która jest potrzebna do kolejnej infekcji. Ozon inaktywuje wirusy rozmieszczone w różnych miejscach pomieszczenia, na twardej i porowatej powierzchni (obicia mebli, dywan), w obecności płynów biologicznych (krew, surowica). Przenika wszędzie tam, gdzie nie wnikają chemiczne środki dezynfekujące wykorzystywane przy metodzie opryskiwania czy zamgławiania, a więc w głębsze szczeliny i szpary, pod meble, w różnego rodzaju urządzenia.',
        imageUrl: 'img/info3.jpg',
        imageWidth: 900,
        imageHeight: 300,
        imageAlt: 'Koronowirus',
      })
