"use strict";

var zoomImage = function (_src) {
    var src = _src;
    var modal;

    /* var redicon = L.Icon({
       iconUrl: 'https://cdn.glitch.me/a5f0c00e-9553-4227-a327-3d110df5082e%2Fpin.png?v=1639403245570'
     });*/

    function removeModal() {
        modal.remove();
        $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
        background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
        backgroundSize: 'contain',
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: '10000',
        top: '0',
        left: '0',
        cursor: 'zoom-out'
    }).click(function () {
        removeModal();
    }).appendTo('body');
    //handling ESC
    $('body').on('keyup.modal-close', function (e) {
        if (e.key === 'Escape') {
            removeModal();
        }
    });
};

// var zoomImage = function(){
//   document.getElementById("img1").style.transform="scale(5)";
// };

let map1 = L.map('mapid1').setView([40.78348090367126, -73.9695765463863], 12);//need to tweak the zoom
let map2 = L.map('mapid2').setView([40.71952149071173, -73.99906679108679], 15);
let map3 = L.map('mapid3').setView([40.71839931388107, -73.99358322467984], 15);
let map4 = L.map('mapid4').setView([40.712, -74.006], 13);
let map5 = L.map('mapid5').setView([40.715369107153165, -73.9988424613742], 15);

let mapButton1 = document.getElementById('btn1');
let mapButton2 = document.getElementById('btn2');
let mapButton3 = document.getElementById('btn3');
let mapButton4 = document.getElementById('btn4');
let mapButton5 = document.getElementById('btn5');

let mapDiv1 = document.getElementById('mapid1');
let mapDiv2 = document.getElementById('mapid2');
let mapDiv3 = document.getElementById('mapid3');
let mapDiv4 = document.getElementById('mapid4');
let mapDiv5 = document.getElementById('mapid5');

let TL1 = document.getElementById('t7072');
let TL2 = document.getElementById('t7375');
let TL3 = document.getElementById('t7680');
let TL4 = document.getElementById('t8185');
let TL5 = document.getElementById('t8621');

mapButton1.addEventListener('click', () => {
    mapDiv1.style.display = 'block';
    mapDiv2.style.display = 'none';
    mapDiv3.style.display = 'none';
    mapDiv4.style.display = 'none';
    mapDiv5.style.display = 'none';
    map1.invalidateSize();
    TL1.style.display = 'block';
    TL2.style.display = 'none';
    TL3.style.display = 'none';
    TL4.style.display = 'none';
    TL5.style.display = 'none';

});

mapButton2.addEventListener('click', () => {
    mapDiv1.style.display = 'none';
    mapDiv2.style.display = 'block';
    mapDiv3.style.display = 'none';
    mapDiv4.style.display = 'none';
    mapDiv5.style.display = 'none';
    map2.invalidateSize();
    TL1.style.display = 'none';
    TL2.style.display = 'block';
    TL3.style.display = 'none';
    TL4.style.display = 'none';
    TL5.style.display = 'none';
});

mapButton3.addEventListener('click', () => {
    mapDiv1.style.display = 'none';
    mapDiv2.style.display = 'none';
    mapDiv3.style.display = 'block';
    mapDiv4.style.display = 'none';
    mapDiv5.style.display = 'none';
    map3.invalidateSize();
    TL1.style.display = 'none';
    TL2.style.display = 'none';
    TL3.style.display = 'block';
    TL4.style.display = 'none';
    TL5.style.display = 'none';
});

mapButton4.addEventListener('click', () => {
    mapDiv1.style.display = 'none';
    mapDiv2.style.display = 'none';
    mapDiv3.style.display = 'none';
    mapDiv4.style.display = 'block';
    mapDiv5.style.display = 'none';
    map4.invalidateSize();
    TL1.style.display = 'none';
    TL2.style.display = 'none';
    TL3.style.display = 'none';
    TL4.style.display = 'block';
    TL5.style.display = 'none';
});

mapButton5.addEventListener('click', () => {
    mapDiv1.style.display = 'none';
    mapDiv2.style.display = 'none';
    mapDiv3.style.display = 'none';
    mapDiv4.style.display = 'none';
    mapDiv5.style.display = 'block';
    map5.invalidateSize();
    TL1.style.display = 'none';
    TL2.style.display = 'none';
    TL3.style.display = 'none';
    TL4.style.display = 'none';
    TL5.style.display = 'block';
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieWZhbmcwMjIiLCJhIjoiY2tyemEwaWViMDEzdTJ1bXprODN1OWQxZiJ9.n05fD1xyssZjDb0YH1wobQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map1);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieWZhbmcwMjIiLCJhIjoiY2tyemEwaWViMDEzdTJ1bXprODN1OWQxZiJ9.n05fD1xyssZjDb0YH1wobQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map2);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieWZhbmcwMjIiLCJhIjoiY2tyemEwaWViMDEzdTJ1bXprODN1OWQxZiJ9.n05fD1xyssZjDb0YH1wobQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieWZhbmcwMjIiLCJhIjoiY2tyemEwaWViMDEzdTJ1bXprODN1OWQxZiJ9.n05fD1xyssZjDb0YH1wobQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieWZhbmcwMjIiLCJhIjoiY2tyemEwaWViMDEzdTJ1bXprODN1OWQxZiJ9.n05fD1xyssZjDb0YH1wobQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map5);

//TODO - custom pins color scheme consistent
//TODO - when clicking on timeline, bubbles pop up automatically
//TODO - check italics capitalization - publications, etc.
//TODO - include archive source
//TODO - accessibility for images with text
//TODO - figure out order of things in timeline for the events with only years
//TODO - why i can only scroll once 
//TODO - if event at bottom, jump to the top of page
let markers = [];

let columbia = L.marker([40.80805168110775, -73.96308628414795], { title: "columbia" }).addTo(map1)
    .bindPopup('<strong>Columbia Graduate School</strong><br><figure><iframe src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Chinatown_Report_1969_Danny_Yung_1970.pdf&embedded=true" frameborder="0" height="300px" width="auto"></iframe><figcaption>Under the guidance of Danny Yung and colleagues from Columbia University\'s Urban Center, the Chinatown Study Group was formed in 1969. The group set out to survey the needs of Chinatown residents. In 1970, the results of this preliminary study was published and fostered the generation of what would soon be known as the Basement Workshop. 1970. From Bob Lee and Eleanor Yung.</figcaption></figure>', { maxWidth: 800 });
markers.push(columbia);

let e54 = L.marker([40.717373115072476, -73.99638905974999], { title: "e54" }).addTo(map1)
    .bindPopup('<strong>54 Elizabeth Street</strong><br>The first location of Basement Workshop.<br><figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Amerasia_Song_And_Poetry.jpg" alt="a letter" onclick="zoomImage(this.src)"><figcaption>A letter from Basement members seeking financial support and artistic contributions for the Amerasia Song and Poetry Project, which would soon be known as Yellow Pearl. 1971.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Yellow_Pearl_Excerpt_1972.png" alt="a page containing an illustration of a puppet playing the guitar and a poem" onclick="zoomImage(this.src)"><figcaption>An excerpt from Basement\'s arts anthology, Yellow Pearl. Poem by Takashi Yanagida, illustration by Larry Hama. 1972. Courtesy of Museum of Chinese in America (MOCA) Basement Workshop Collection.</figcaption></figure>');
markers.push(e54);

let c22a = L.marker([40.713193857598824, -73.99733957337108], { title: "c22a" }).addTo(map1)
    .bindPopup('<strong>22 Catherine Street</strong><br>Basement Workshop\'s new location in 1972.'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Chinatown_Coloring_Book_Excerpt_1973.jpg" alt="two blank pages in a coloring book with turtle and umbrella graphics" onclick="zoomImage(this.src)"><figcaption>Two pages from the Chinatown Coloring Book project coordinated by Susan Yung which included drawings and sketches from Chinatown youth. 2,000 copies were distributed for free to children in Chinatown. Basement members, Tomie Arai illustrated page 32 and Karl Matsuda illustrated page 33 shown here. 1973. NYU A/P/A Collection.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/American_Born_and_Foreign_Order_Form_1979_page-0001.jpg" alt="a blank form" onclick="zoomImage(this.src)"><figcaption>An order form for purchasing copies of the American Born and Foreign poetry anthology, produced by the Basement Workshop and published by Sunbury Press. 1979. MSS 292, Box 1, folder 19. Courtesy of Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Linda_Lew_and_William_Leung_nd.jpg" alt="image of kids with paper cups sitting in a circle looking at an illustrated page" onclick="zoomImage(this.src)"><figcaption>Linda Lew and William Leung in an Amerasia Creative Arts meeting. No date. NYU A/P/A Collection; photos by Henry Chu.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Fay_Chiang_and_Peter_Pan_nd.jpg" alt="image of two people standing in front of a message board"><figcaption>Fay Chiang and Peter Pan stand near the message board at Basement Workshop. No date. NYU A/P/A Collection; photos by Henry Chu.</figcaption></figure>');
markers.push(c22a);

let c22c = L.marker([40.71305223095968, -73.99749747628213], { title: "c22c" }).addTo(map1)
    .bindPopup('<strong>22 Catherine Street</strong><br>' + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/19721001_Bridge+Info+Brochure+Pg+1_NYU+Tamiment.jpeg" alt="a page with text stating the aims of Bridge Magazine" onclick="zoomImage(this.src)"><figcaption>Page 1 of a brochure detailing the mission of Basement Workshop\'s Bridge Magazine which called itself "the Magazine for Asians in America. October 1, 1972."</figcaption ></figure > ');
markers.push(c22c);

let a613 = L.marker([40.79019689284264, -73.97315536954741], { title: "a613" }).addTo(map1)
    .bindPopup('<strong>613 Amsterdam Ave</strong><br>The location of community gathering and performance space Chickens Come Home to Roost Storefront.');
markers.push(a613);

let rockefeller = L.marker([40.758874270103725, -73.97870578862735], { title: "rockefeller" }).addTo(map1)
    .bindPopup('<strong>Rockefeller Center</strong><br>' + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1971_Eleanor+BW+Flyering+Photo+2.jpg" alt="a smiling woman handing out brochures to passersby" onclick="zoomImage(this.src)"><figcaption>Basement Workshop members handing out brochures to passersby at Rockefeller Center. Part of a campaign called "New York: The Chinese Way" to promote tourism to Chinatown.</figcaption></figure>');
markers.push(rockefeller);

let e54b = L.marker([40.71724768682543, -73.9964573754843], { title: "e54b" }).addTo(map1)
    .bindPopup('<strong>54 Elizabeth Street</strong><br>' + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1971_BW+New+York+Chinese+Way+Brochure+Page+1_NYU+Tamiment.jpeg" alt="a cover page with lion dance imagery and the text New York: the Chinese Way" onclick="zoomImage(this.src)"><figcaption>Front cover of the travel guide brochure, "New York: The Chinese Way," a project to "inform New Yorkers about Chinese eating, our festivals, our operas, our social issues..."</figcaption></figure>');
markers.push(e54b);

let eb32 = L.marker([40.71394508120349, -73.99650475988331], { title: "eb32" }).addTo(map2)
    .bindPopup('<strong>32 East Broadway</strong><br>Danny Yung\'s loft, which became Asian Cine-Vision.');
markers.push(eb32);

let eb33 = L.marker([40.71352469221002, -73.99653744599264], { title: "eb33" }).addTo(map2)
    .bindPopup('<strong>Chatham Square Library - 33 E. Broadway</strong><br>' + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1986_AADT+Event+Eleanor+Performance.jpg" alt="a woman dancing in traditional clothing" onclick="zoomImage(this.src)"><figcaption>One of the first performances of Asian American Dance Theatre which shared a building with Asian American Arts Centre in 1974 was held in the Chatham Square Library on East Broadway.(This particular photo is from a performance in 1986.)</figcaption></figure>');
markers.push(eb33);

let b17 = L.marker([40.71477514624291, -73.99684571755508], { title: "b17" }).addTo(map2)
    .bindPopup('<strong>Bowery and Division Streets</strong><br>(Location not exact. This is the current site of Confucius Plaza.)' + '<figure><img src="assets/19740531_Confucius_Plaza_Protest_Mary_Uyematsu_Kao.jpg" alt="a group of protesters holding signs and megaphone" onclick="zoomImage(this.src)"><figcaption>At Confucius Plaza, a group of protesters march against discriminatory hiring practices committed by the DeMatteis Corporation. They refused to hire any Asian construction workers for a new high-rise affordable housing apartment complex in the heart of Chinatown. Basement Workshop\'s Kin Wah Chin holds a megaphone. May 31, 1974. Photo by Mary Uyematsu Kao."</figcaption></figure>');
markers.push(b17);

let eb1 = L.marker([40.71348705365983, -73.9979242175551], { title: "eb1" }).addTo(map2)
    .bindPopup('<strong>1 East Broadway</strong><br>Michio Kaku’s loft, which was Basement Workshop’s Community Planning Workshop arm.'
        + '<figure><img src="https://cdn.glitch.com/a5f0c00e-9553-4227-a327-3d110df5082e%2FCPW%20May%201977.jpg?v=1633109928948" alt="a group photo" onclick="zoomImage(this.src)"><figcaption>Members of the Community Planning Workshop arm of the Basement Workshop pose for a group photo. 1977. Provided by Marina Yu; photo by Henry Kwong.</figcaption></figure>');
markers.push(eb1);

let l199 = L.marker([40.721469061560114, -73.99781341755894], { title: "l199" }).addTo(map2)
    .bindPopup('<strong>199 Lafayette Street</strong><br>The new location that Basement Workshop expanded to in 1975.<br>' +
        '<figure><iframe src="https://cdn.glitch.com/a5f0c00e-9553-4227-a327-3d110df5082e%2FBW%20Calendar%201976.pdf?v=1632815430707" frameborder="0" height="300px" width="auto"></iframe><figcaption>Artists at the Basement Workshop produce a 1976 calendar with original artwork showcasing examples of worker movements. 1975. MSS 292, Box 53, folder 3. Courtesy of Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Dance_Flyer_for_Chin_Young_Legal_Fund_1976_page-0001.jpg" alt="black & white poster for a dance party" onclick="zoomImage(this.src)"><figcaption>A flyer for a dance party at Basement benefitting the legal fund for defending Basement members, Elizabeth Young and Kenny Chin, in their wrongful accusation of an assassination attempt and illegal search & seizure. November 1976. MSS 292, Box 1, folder 20. Courtesy of Fales Library and Special Collections, New York University. </figcaption></figure>'
        + '<figure><img src="https://cdn.glitch.com/a5f0c00e-9553-4227-a327-3d110df5082e%2FWe%20Wont%20Move%20Photo%20Exhibit%20Information%201977_page-0001.jpg?v=1632465930431" alt="a flyer with text describing information about a photo exhibit" onclick="zoomImage(this.src)"><figcaption>A flyer chronicling the joint collaboration between the Basement Workshop and San Francisco\'s Kearny Street Workshop in producing a photo exhibit examining the fight for the International Hotel in SF. December 15, 1977. MSS 292, Box 1, folder 20. Courtesy of Fales Library and Special Collections, New York University. </figcaption></figure>'
        + '<figure><iframe src="https://cdn.glitch.com/a5f0c00e-9553-4227-a327-3d110df5082e%2FBasement%20Editions%20Ad%201978.pdf?v=1633113153781&embedded=true" frameborder="0" height="300px" width="auto"></iframe><figcaption>A mailer advertisement for purchasing poetry series publications from contemporary Asian American poets, Mei-mei Berssenbrugge, Lawson Fusao Inada, Jessica Hagedorn, and Ntozake Shange. Summer 1978. MSS 292, Box 1, folder 19. Courtesy of Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><img src="https://cdn.glitch.com/a5f0c00e-9553-4227-a327-3d110df5082e%2FAmerican%20Born%20and%20Foreign%20Flyer%201979_page-0001.jpg?v=1633111820819" alt="a black & white flyer" onclick="zoomImage(this.src)"><figcaption>A flyer for the release party for Asian American poetry anthology, American Born and Foreign. May 19, 1979. MSS 292, Box 1, folder 19. Courtesy of Fales Library and Special Collections, New York University.</figcaption></figure>');
markers.push(l199);

let b26 = L.marker([40.71513634882788, -73.99729058832119], { title: "b26" }).addTo(map3)
    .bindPopup('<strong>26 Bowery</strong><br>'
        + '<figure><img src="assets/1986_AAAC_Sign.jpg" alt="a sign that says Asian American Arts Centre" onclick="zoomImage(this.src)"><figcaption>Bob Lee opens the Asian American Arts Centre (AAAC) in a 2,500 sq ft loft space operating as a dance studio art school, gallery, studio, and research area. Photo shot in 1986. From AAAC Flickr.</figcaption></figure>');
markers.push(b26);

let c22d = L.marker([40.713193857598824, -73.99733957337108], { title: "c22d" }).addTo(map3)
    .bindPopup('<strong>22 Catherine Street</strong><br>'
        + '<figure><img src="assets/1976_TREE_Performance_Practice_from_Henry_Kwong.jpg" alt="two people in costumes, sitting" onclick="zoomImage(this.src)"><figcaption>Two members of TREE (The Rouge on the Elephant\'s Ear), a theatre group at Basement Workshop, prepare for a performance. Photo from Henry Kwong and Marina Yu.</figcaption></figure>');
markers.push(c22d);

let b26a = L.marker([40.71513634882788, -73.99729058832119], { title: "b26a" }).addTo(map3)
    .bindPopup('<strong>26 Bowery</strong><br>'
        + '<figure><img src="" alt="" onclick="zoomImage(this.src)"><figcaption>Flyer for a presentation by Basement Workshop\'s Bridge Magazine, hosted at the Asian American Dance Theater, located inside the Asian American Arts Centre. March 18, 1978. NYU Tamiment Archives - Boxes 1, 127, and 71.</figcaption></figure>');
markers.push(b26a);

let c22b = L.marker([40.713193857598824, -73.99733957337108], { title: "c22b" }).addTo(map3)
    .bindPopup('<strong>22 Catherine Street</strong><br>Basement Workshop closed Lafayette St location in 1980 and returned solely to their second location.'
        + '<figure><img src="https://cdn.glitch.com/a5f0c00e-9553-4227-a327-3d110df5082e%2FBW%20Group%20Photo%201986.jpg?v=1633110644623" alt="a black & white group photo" onclick="zoomImage(this.src)"><figcaption>Members of the Basement Workshop pose for a group photo. 1986. Found in Basement Workshop 1986 yearbook.</figcaption></figure>');
markers.push(c22b);

let m70 = L.marker([40.71621651371639, -73.9990194733756], { title: "m70" }).addTo(map3)
    .bindPopup('<strong>70 Mulberry St</strong><br>The location where New York Chinatown History Project (formerly Basement Workshop, eventually MOCA) took place.');
markers.push(m70);

let e176 = L.marker([40.72047834465167, -73.99052708686779], { title: "e176" }).addTo(map3)
    .bindPopup('<strong>176-180 Eldridge Street</strong><br>The location of Asian Americans for Equality offices.<br>');
markers.push(e176);

let c22e = L.marker([40.713193857598824, -73.99733957337108], { title: "c22e" }).addTo(map4)
    .bindPopup('<strong>22 Catherine Street</strong><br>'
        + '<figure><img src="assets/19820917_BW_Catherine_St_Artist_Project_Mailer.jpg" alt="a mail with exhibition information and list of artist names printed on it" onclick="zoomImage(this.src)"><figcaption>Basement Workshop\'s Catherine Street Artists Project coordinated by John Woo highlighted work by Asian and Asian American artists in their gallery space every month. This September 1982 exhibit showcased a group of 12 artists, some of whom had been involved from Basement\'s early days. From John Allen\'s personal files.</figcaption></figure>');
markers.push(c22e);

let c22f = L.marker([40.71376170147968, -73.99728054266383], { title: "c22f" }).addTo(map4)
    .bindPopup('<strong>22 Catherine Street</strong><br>'
        + '<figure><img src="assets/19850401_BW_Newsletter_Mailer_Page_1_from_John_Allen_Page_1.jpg" alt="a flyer detailing a list of events" onclick="zoomImage(this.src)"><figcaption>Basement Workshop\'s newsletter advertising a works-in-progress play reading, free poetry readings, a gallery exhibit, and performance poetry workshops. April 1985. From John Allen\'s personal files.</figcaption></figure>');
markers.push(c22f);

let wow = L.marker([40.715369107153165, -73.9988424613742], { title: "wow" }).addTo(map5)
    .bindPopup('<strong>26 Mott St</strong><br><br>Wing On Wo & Co, the location of the W.O.W. Project.<br><iframe width="560" height="315" src="https://www.youtube.com/embed/i8TJ7RgimNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
markers.push(wow);

let g466 = L.marker([40.71602721207435, -73.98380221120885], { title: "g466" }).addTo(map3)
    .bindPopup('<strong>466 Grand St</strong><br><figure><img src="https://cdn.glitch.com/a5f0c00e-9553-4227-a327-3d110df5082e%2FNeglected%20Past%20Program%201978_page-0001%20(1).jpg?v=1633113381733" alt="a black & white flyer" onclick="zoomImage(this.src)"><figcaption>A photo exhibit produced by the Basement Workshop\'s Asian American Resource Center (AARC) highlighting the work and culture of Chinese immigrants to the United States with aims to "counter historic racism. April 7, 1978. MSS 292, Box 1, Folder 19. Courtesy of Fales Library and Special Collections, New York University."</figcaption></figure>');
markers.push(g466);

let henryst = L.marker([40.71343248127916, -73.98972896868358], { title: "henryst" }).addTo(map1)
    .bindPopup('<strong>Henry St</strong><br><figure><img src="https://cdn.glitch.com/a5f0c00e-9553-4227-a327-3d110df5082e%2FCharlie%20Chin%20Playing%20Flute%201972.jpg?v=1633174517396" alt="image of a man playing the flute" onclick="zoomImage(this.src)"><figcaption>Charlie Chin plays the flute while people pass by during the Henry Street Fair. 1972. NYU A/P/A Collection; photos by Henry Chu.</figcaption></figure>'
        + '<figure><img src="https://cdn.glitch.com/a5f0c00e-9553-4227-a327-3d110df5082e%2FChildren%20at%20Henry%20St%20Fair%201972.jpg?v=1633174504885" alt="image of children drawing on the road with chalk" onclick="zoomImage(this.src)"><figcaption>Children draw with chalk on wide streets during the Henry Street Fair. 1972. NYU A/P/A Collection; photos by Henry Chu.</figcaption></figure>');
markers.push(henryst);

let hcst = L.marker([40.712815265364235, -73.99711496415289], { title: "hcst" }).addTo(map1)
    .bindPopup('<strong>Intersection of Henry St. and Catherine St.</strong><br><figure><img src="https://cdn.glitch.com/a5f0c00e-9553-4227-a327-3d110df5082e%2FCharlie%20Chin%20and%20Chris%20Iijima%20Perform%201972.jpg?v=1633175004477" alt="image of three people performing live with guitar, mics, and drum set" onclick="zoomImage(this.src)"><figcaption>Charlie Chin and Chris Iijima perform live during the Henry Street Fair. 1972. NYU A/P/A Collection; photos by Henry Chu.</figcaption></figure>');
markers.push(hcst);

let lg566 = L.marker([40.73002089595453, -73.99775210238515], { title: "lg566" }).addTo(map1)
    .bindPopup('<strong>566 Laguardia Place</strong><figure><img src="https://cdn.glitch.com/a5f0c00e-9553-4227-a327-3d110df5082e%2FMusic%20Benefit%20Flyer%20for%20Basement%20nd_page-0001.jpg?v=1633175051251" alt="a black & white flyer about a concert" onclick="zoomImage(this.src)"><figcaption>A flyer advertising a concert with performances by Charlie Chin and Chris Iijima, Warriors of the Rainbow, and the Morita Dance Company. Funds raised benefit children\'s programs at the Basement Workshop. No date. MSS 292, Box 1, Folder 20. Courtesy of Fales Library and Special Collections, New York University.</figcaption></figure>');
markers.push(lg566);

function markerFunction(id) {
    for (var i in markers) {
        var markerID = markers[i].options.title;
        if (markerID == id) {
            markers[i].openPopup();
        };
    }
}

$("div").click(function () {
    markerFunction($(this)[0].id);
});

let histEventBtns = document.getElementsByClassName("histEvent");
let selectedItem;

//TODO - fix when clicking on time, event is not detected
//TODO - add autoscroll to each last timeline section, vertical also

// for (let i = 0; i < histEventBtns.length; i++) {
//     histEventBtns[i].addEventListener('click', event => {
//         if (selectedItem) {
//             selectedItem.style.backgroundColor = "#FFF";
//         }
//         let clicked = event.target.querySelector("time");
//         // console.log(parseInt(clicked.innerHTML.match(/\d+/)[0],10));
//         let clickedYear = parseInt(clicked.innerHTML.match(/\d+/)[0], 10);
//         // event.target.style.backgroundColor = "palegoldenrod";//have them move to center too
//         selectedItem = event.target;
//         if (clickedYear <= 1972) {
//             //console.log("here");
//             document.getElementById('btn1').click();
//         } else if (clickedYear > 1972 && clickedYear <= 1975) {
//             document.getElementById('btn2').click();
//             // console.log("here2");
//         } else if (clickedYear > 1975 && clickedYear <= 1980) {
//             document.getElementById('btn3').click();
//         } else if (clickedYear > 1980 && clickedYear <= 1986) {
//             document.getElementById('btn4').click();
//         } else {
//             document.getElementById('btn5').click();
//         }
//     });
// }

document.addEventListener("DOMContentLoaded", function () {
    var myitem = document.querySelectorAll(".histEvent");
    for (var h = 0; h < myitem.length; h++) {
        myitem[h].addEventListener("click", function (e) {
            for (h = 0; h < myitem.length; h++) {
                myitem[h].classList.remove("selected");
            }

            this.classList.add("selected");

        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var btnlist = document.querySelectorAll(".mapbtn");
    for (var h = 0; h < btnlist.length; h++) {
        btnlist[h].addEventListener("click", function (e) {
            for (h = 0; h < btnlist.length; h++) {
                btnlist[h].classList.remove("selected");
            }
            this.classList.add("selected");
            setScroll();
        });
    }
});

// START
window.addEventListener("load", init);

function init() {
    setScroll();
}

function setScroll() {
    let TL1 = document.getElementById('t7072');
    let TL2 = document.getElementById('t7375');
    let TL3 = document.getElementById('t7680');
    let TL4 = document.getElementById('t8185');
    let TL5 = document.getElementById('t8621');

    // VARIABLES
    const elH = document.querySelectorAll(".timeline li > div"),
        arrows = document.querySelectorAll(".timeline .arrows .arrow"),
        arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
        arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
        xScrolling = 280,
        disabledClass = "disabled";
    let timeline = null;
    let firstItem = null;
    let lastItem = null;

    if (window.getComputedStyle(TL1).display == "block") {
        // console.log(document.querySelector(".timeline li:first-child"));
        console.log(TL1);
        timeline = TL1;
        firstItem = TL1.querySelector("li:first-child");
        lastItem = TL1.querySelector("li:last-child");
    } else if (window.getComputedStyle(TL2).display == "block") {
        console.log("tl2 displayed");
        timeline = TL2;
        firstItem = TL2.querySelector("li:first-child");
        lastItem = TL2.querySelector("li:last-child");
    } else if (window.getComputedStyle(TL3).display == "block") {
        timeline = TL3;
        firstItem = TL3.querySelector("li:first-child");
        lastItem = TL3.querySelector("li:last-child");
    } else if (window.getComputedStyle(TL4).display == "block") {
        timeline = TL4;
        firstItem = TL4.querySelector("li:first-child");
        lastItem = TL4.querySelector("li:last-child");
    } else if (window.getComputedStyle(TL5).display == "block") {
        timeline = TL5;
        firstItem = TL5.querySelector("li:first-child");
        lastItem = TL5.querySelector("li:last-child");
    }

    // // START
    // window.addEventListener("load", init);

    // function init() {
    setEqualHeights(elH);
    console.log("here!!!!");
    setBtnState(arrowPrev);
    setBtnState(arrowNext, false);
    animateTl(xScrolling, arrows, timeline);
    setSwipeFn(timeline, arrowPrev, arrowNext);
    setKeyboardFn(arrowPrev, arrowNext);
    // }

    // SET EQUAL HEIGHTS
    function setEqualHeights(el) {
        let counter = 0;
        for (let i = 0; i < el.length; i++) {
            const singleHeight = el[i].offsetHeight;

            if (counter < singleHeight) {
                counter = singleHeight;
            }
        }

        for (let i = 0; i < el.length; i++) {
            el[i].style.height = `${counter}px`;
        }
    }

    // CHECK IF AN ELEMENT IS IN VIEWPORT
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // SET STATE OF PREV/NEXT ARROWS
    function setBtnState(el, flag = true) {
        if (flag) {
            el.classList.add(disabledClass);
        } else {
            if (el.classList.contains(disabledClass)) {
                el.classList.remove(disabledClass);
            }
            el.disabled = false;
        }
    }

    // ANIMATE TIMELINE
    function animateTl(scrolling, el, tl) {
        let counter = 0;
        for (let i = 0; i < el.length; i++) {
            console.log(el);

            el[i].addEventListener("click", function () {
                if (!arrowPrev.disabled) {
                    arrowPrev.disabled = true;
                }
                if (!arrowNext.disabled) {
                    arrowNext.disabled = true;
                }
                console.log("here");

                const sign = (this.classList.contains("arrow__prev")) ? "" : "-";//prev positive, next negative
                if (counter === 0) {
                    tl.style.transform = `translateX(-${scrolling}px)`;
                } else {
                    const tlStyle = getComputedStyle(tl);
                    // add more browser prefixes if needed here
                    const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
                    const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
                    tl.style.transform = `translateX(${values}px)`;
                }
                setTimeout(() => {
                    isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
                    isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
                    console.log(isElementInViewport(firstItem));
                    console.log(isElementInViewport(lastItem));
                }, 1100);
                counter++;
            });
        }
    }

    // ADD SWIPE SUPPORT FOR TOUCH DEVICES
    function setSwipeFn(tl, prev, next) {
        const hammer = new Hammer(tl);
        hammer.on("swipeleft", () => next.click());
        hammer.on("swiperight", () => prev.click());
    }

    // ADD BASIC KEYBOARD FUNCTIONALITY
    function setKeyboardFn(prev, next) {
        document.addEventListener("keydown", (e) => {
            if ((e.which === 37) || (e.which === 39)) {
                const timelineOfTop = timeline.offsetTop;
                const y = window.pageYOffset;
                if (timelineOfTop !== y) {
                    window.scrollTo(0, timelineOfTop);
                }
                if (e.which === 37) {
                    prev.click();
                } else if (e.which === 39) {
                    next.click();
                }
            }
        });
    }

};
