"use strict";

var zoomImage = function (_src) {
    var src = _src;
    var modal;

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
let languageButton = document.getElementById("language");

function switch_lang() {

    if (languageButton.innerHTML === 'Japanese') {
        console.log("here");
        languageButton.href = 'index_japanese.html';
        // languageButton.innerHTML = 'English';
    } else if (languageButton.innerHTML === "English") {
        languageButton.href = 'index.html';
        // languageButton.innerHTML = 'Japanese';
    }
}

//popup for embedding
$(".open").on("click", function () {
    $(".popup, .popup-overlay").addClass("active");
    $(".popup, .blur").addClass("active");
});
$(".close, .popup").on("click", function () {
    $(".popup, .popup-overlay").removeClass("active");
    $(".popup, .blur").removeClass("active");
});

function togglePopup() {

    document.getElementById("intro-popup").classList.toggle("active");
}

let map1 = L.map('mapid1').setView([40.78348090367126, -73.9695765463863], 12);//need to tweak the zoom
let map2 = L.map('mapid2').setView([40.71952149071173, -73.99906679108679], 15);
let map3 = L.map('mapid3').setView([40.71839931388107, -73.99358322467984], 15);
let map4 = L.map('mapid4').setView([40.712, -74.006], 13);

let mapButton1 = document.getElementById('btn1');
let mapButton2 = document.getElementById('btn2');
let mapButton3 = document.getElementById('btn3');
let mapButton4 = document.getElementById('btn4');

let mapDiv1 = document.getElementById('mapid1');
let mapDiv2 = document.getElementById('mapid2');
let mapDiv3 = document.getElementById('mapid3');
let mapDiv4 = document.getElementById('mapid4');

let TL1 = document.getElementById('t7072');
let TL2 = document.getElementById('t7375');
let TL3 = document.getElementById('t7680');
let TL4 = document.getElementById('t8185');

mapButton1.addEventListener('click', () => {
    mapDiv1.style.display = 'block';
    mapDiv2.style.display = 'none';
    mapDiv3.style.display = 'none';
    mapDiv4.style.display = 'none';
    map1.invalidateSize();
    TL1.style.display = 'block';
    TL2.style.display = 'none';
    TL3.style.display = 'none';
    TL4.style.display = 'none';
});

mapButton2.addEventListener('click', () => {
    mapDiv1.style.display = 'none';
    mapDiv2.style.display = 'block';
    mapDiv3.style.display = 'none';
    mapDiv4.style.display = 'none';
    map2.invalidateSize();
    TL1.style.display = 'none';
    TL2.style.display = 'block';
    TL3.style.display = 'none';
    TL4.style.display = 'none';
});

mapButton3.addEventListener('click', () => {
    mapDiv1.style.display = 'none';
    mapDiv2.style.display = 'none';
    mapDiv3.style.display = 'block';
    mapDiv4.style.display = 'none';
    map3.invalidateSize();
    TL1.style.display = 'none';
    TL2.style.display = 'none';
    TL3.style.display = 'block';
    TL4.style.display = 'none';
});

mapButton4.addEventListener('click', () => {
    mapDiv1.style.display = 'none';
    mapDiv2.style.display = 'none';
    mapDiv3.style.display = 'none';
    mapDiv4.style.display = 'block';
    map4.invalidateSize();
    TL1.style.display = 'none';
    TL2.style.display = 'none';
    TL3.style.display = 'none';
    TL4.style.display = 'block';
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

//TODO - check italics capitalization - publications, etc.
let markers = [];

let redIcon = L.icon({
    iconUrl: 'assets/pin.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

//Map1 70-72
let columbia = L.marker([40.80805168110775, -73.96308628414795], { icon: redIcon, title: "columbia" }).addTo(map1)
    .bindPopup('<strong>Columbia Graduate School</strong><br>' + '<figure><iframe src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Chinatown_Report_1969_Danny_Yung_1970.pdf" alt="the scan of the full "Chinatown Report"" frameborder="0" height="300px" width="auto"></iframe><figcaption>Under the guidance of Danny Yung and colleagues from Columbia University\'s Urban Center, the Chinatown Study Group was formed in 1969. The group set out to survey the needs of Chinatown residents. In 1970, the results of this preliminary study were published and fostered the generation of what would soon be known as the Basement Workshop. 1970. Courtesy of Bob Lee and Eleanor Yung.</figcaption></figure>');
markers.push(columbia);

let e54 = L.marker([40.717220253986945, -73.99636624792628], { icon: redIcon, title: "e54" }).addTo(map1)
    .bindPopup('<strong>54 Elizabeth Street</strong><br>The first location of Basement Workshop.<br><figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Amerasia_Song_And_Poetry.jpg" alt="a letter with illustrations and the title "Amerasia Song and Poetry Project"" onclick="zoomImage(this.src)"><figcaption>A letter from Basement members seeking financial support and artistic contributions for the <i>Amerasia Song and Poetry Project</i>, which became <i>Yellow Pearl</i>. <i>Amerasia Song and Poetry Project</i> Letter, 1971; Yoshio Kishi and Irene Yah-Ling Sun Collection; MSS.292; Box 1; Folder 20; Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Yellow_Pearl_Excerpt_1972.png" alt="a page containing a poem and an illustration of a puppet playing the guitar" onclick="zoomImage(this.src)"><figcaption>An excerpt from Basement\'s arts anthology, <i>Yellow Pearl</i>. Poem by Takashi Yanagida, illustration by Larry Hama. 1972. Courtesy of Museum of Chinese in America (MOCA) Basement Workshop Collection.</figcaption></figure>');
markers.push(e54);

let a613 = L.marker([40.79019689284264, -73.97315536954741], { icon: redIcon, title: "a613" }).addTo(map1)
    .bindPopup('<strong>613 Amsterdam Ave</strong><br>The location of community gathering and performance space Chickens Come Home to Roost Storefront.');
markers.push(a613);

let rockefeller = L.marker([40.758874270103725, -73.97870578862735], { icon: redIcon, title: "rockefeller" }).addTo(map1)
    .bindPopup('<strong>Rockefeller Center</strong><br>' + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/BW+eleanor036a.jpg" alt="a man and a woman handing out brochures to passersby" onclick="zoomImage(this.src)"><figcaption>Basement Workshop members, including Eleanor Yung, handing out brochures to passersby at Rockefeller Center. Part of a campaign called "New York: The Chinese Way" to promote tourism to Chinatown. 1971. Courtesy of Asian American Arts Centre.</figcaption></figure>');
markers.push(rockefeller);

let e54b = L.marker([40.717220253986945, -73.99636624792628], { icon: redIcon, title: "e54b" }).addTo(map1)
    .bindPopup('<strong>54 Elizabeth Street</strong><br>' + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1971_BW+New+York+Chinese+Way+Brochure+Page+1_NYU+Tamiment.jpeg" alt="a cover page with lion dance imagery and the text "New York: the Chinese Way"" onclick="zoomImage(this.src)"><figcaption>Front cover of the travel guide brochure, "New York: The Chinese Way," a project to "inform New Yorkers about Chinese eating, our festivals, our operas, our social issues..." New York: The Chinese Way Brochure, 1971; Asian American Arts Centre Records; TAM.613; Box 1; Tamiment Library/ Robert F. Wagner Labor Archives, New York University.</figcaption></figure>');
markers.push(e54b);

// Adding marker cluster for E54 on map1
let markers_e54 = new L.MarkerClusterGroup();
markers_e54.addLayer(e54);
markers_e54.addLayer(e54b);

map1.addLayer(markers_e54);

let c22a = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22a" }).addTo(map1)
    .bindPopup('<strong>22 Catherine Street</strong><br>Basement Workshop\'s new location in 1972.'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Chinatown_Coloring_Book_Excerpt_1973.jpg" alt="two blank pages in a coloring book with turtle and umbrella graphics" onclick="zoomImage(this.src)"><figcaption>Two pages from the Chinatown Coloring Book project coordinated by Susan Yung which included drawings and sketches from Chinatown youth. 2,000 copies were distributed for free to children in Chinatown. Basement members, Tomie Arai illustrated page 32 and Karl Matsuda illustrated page 33 shown here. Chinatown Coloring Book Exceprt, 1973; Tomie Arai and Karl Matsuda; Asian/Pacific/American Institute at New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/American_Born_and_Foreign_Order_Form_1979_page-0001.jpg" alt="a blank form" onclick="zoomImage(this.src)"><figcaption>An order form for purchasing copies of the <i>American Born and Foreign</i> poetry anthology, produced by the Basement Workshop and published by Sunbury Press. American Born and Foreign Order Form, 1979; MSS.292; Box 1; Folder 19. Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Linda_Lew_and_William_Leung_nd.jpg" alt="image of kids with paper cups sitting in a circle looking at an illustrated page" onclick="zoomImage(this.src)"><figcaption>Linda Lew and William Leung in an Amerasia Creative Arts meeting. Untitled, 1973; Henry Chu; Asian/Pacific/American Institute at New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Fay_Chiang_and_Peter_Pan_nd.jpg" alt="image of two people standing in front of a message board"><figcaption>Fay Chiang and Peter Pan stand near the message board at Basement Workshop. Untitled, 1973; Henry Chu; Asian/Pacific/American Institute at New York University.</figcaption></figure>');
markers.push(c22a);

let c22c = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22c" }).addTo(map1)
    .bindPopup('<strong>22 Catherine Street</strong><br>' + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/19721001_Bridge+Info+Brochure+Pg+1_NYU+Tamiment.jpeg" alt="a page with text stating the aims of "Bridge Magazine"" onclick="zoomImage(this.src)"><figcaption>Page 1 of a brochure detailing the mission of Basement Workshop\'s <i>Bridge Magazine</i> which called itself "the Magazine for Asians in America." October 1, 1972.</figcaption ></figure > ');
markers.push(c22c);

// Adding marker cluster for C22 on map1
let markers_c22 = new L.MarkerClusterGroup();
markers_c22.addLayer(c22a);
markers_c22.addLayer(c22c);

map1.addLayer(markers_c22);

//Map2 73-75
let eb32 = L.marker([40.71394508120349, -73.99650475988331], { icon: redIcon, title: "eb32" }).addTo(map2)
    .bindPopup('<strong>32 East Broadway</strong><br>Danny Yung\'s loft, which became Asian Cine-Vision, an organization that showcases and preserves films created by or feature peoples of Asian descent.');
markers.push(eb32);

let eb33 = L.marker([40.71352469221002, -73.99653744599264], { icon: redIcon, title: "eb33" }).addTo(map2)
    .bindPopup('<strong>Chatham Square Library - 33 East Broadway</strong><br>' + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1986_AADT+Event+Eleanor+Performance.jpg" alt="a woman dancing in traditional clothing" onclick="zoomImage(this.src)"><figcaption>One of the first performances of Asian American Dance Theatre was held in the Chatham Square Library on East Broadway in the fourth floor area in 1974. Courtesy of Asian American Arts Centre.</figcaption></figure>');
markers.push(eb33);

let b17 = L.marker([40.71477514624291, -73.99684571755508], { icon: redIcon, title: "b17" }).addTo(map2)
    .bindPopup('<strong>Bowery and Division Streets</strong><br>(Location not exact. Showing the current site of Confucius Plaza.)' + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/19740531_Confucius+Plaza+Protest_Mary+Uyematsu+Kao.jpg" alt="a group of protesters holding signs and megaphones" onclick="zoomImage(this.src)"><figcaption>At Confucius Plaza, community protesters demonstrated against discriminatory hiring practices by the DeMatteis Corporation, which refused to hire Asian construction workers for a new high-rise affordable housing apartment complex in the heart of Chinatown. Basement Workshop\'s Kin Wah Chin (in black frame glasses) holds the amplifier for the megaphone. May 31, 1974. Photo by Mary Uyematsu Kao.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/19740416_Confucius+Plaza+Silkscreen+Poster_Mary+Uyematsu+Kao.jpg" alt="a silkscreen poster with Chinese and English words calling for people to unite and fight discrimination in the construction industry" onclick="zoomImage(this.src)"><figcaption>Poster advertising the rally for jobs at Confucius Plaza, silkscreened by Basement Workshop artists. Hundreds of these posters were seen everywhere in Chinatown, helping to create community-wide demonstrations that shut down the construction site. Image of AAFEE workers confronting DeMatteis contractors by Mary Uyematsu Kao.</figcaption></figure>');
markers.push(b17);

let eb1 = L.marker([40.71348705365983, -73.9979242175551], { icon: redIcon, title: "eb1" }).addTo(map2)
    .bindPopup('<strong>1 East Broadway</strong><br>Michio Kaku\'s loft, which was Basement Workshop\'s Community Planning Workshop arm.'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/CPW_May_1977.jpg" alt="photo of a group of people sitting in front of a wall covered in some posters" onclick="zoomImage(this.src)"><figcaption>Members of the Community Planning Workshop arm of the Basement Workshop pose for a group photo as a farewell to two departing members, as indicated by the cutouts in the center of the top row. Spring 1977. Courtesy of Marina Yu and Henry Kwong. Photo by Henry Kwong.</figcaption></figure>');
markers.push(eb1);

let l199 = L.marker([40.721469061560114, -73.99781341755894], { icon: redIcon, title: "l199" }).addTo(map2)
    .bindPopup('<strong>199 Lafayette Street</strong><br>The new location that Basement Workshop expanded to in 1975.<br>' +
        '<figure><iframe src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/BW_Calendar_1976.pdf" frameborder="0" height="300px" width="auto" alt="scan of a black & white calendar for 1976, with hand-drawn illustrations about worker movements"></iframe><figcaption>Artists at the Basement Workshop produce a 1976 calendar with original artwork showcasing examples of worker movements. Silkscreen Calendar, 1975; Yoshio Kishi and Irene Yah-Ling Sun Collection; MSS.292, Box 53; Folder 3; Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Dance_Flyer_for_Chin_Young_Legal_Fund_1976_page-0001.jpg" alt="black & white poster with illustration of a phoenix" onclick="zoomImage(this.src)"><figcaption>A flyer for a dance party at Basement benefitting the legal fund for defending Basement members, Elizabeth Young and Kenny Chin, who were wrongfully accused of an assassination attempt and having been victim to an illegal search & seizure. Flyer, November 1976; Yoshio Kishi and Irene Yah-Ling Sun Collection; MSS.292; Box 1; Folder 20; Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/We_Wont_Move_Photo_Exhibit_Information_1977_page-0001.jpg" alt="a flyer with text describing information about a photo exhibit" onclick="zoomImage(this.src)"><figcaption>A flyer chronicling the joint collaboration between the Basement Workshop and San Francisco\'s Kearny Street Workshop in producing a photo exhibit detailing the fight for the International Hotel in San Francisco. Flyer, December 15, 1977; Yoshio Kishi and Irene Yah-Ling Sun Collection; MSS.292; Box 1; Folder 20; Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><iframe src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Basement_Editions_Ad_1978.pdf" alt="a mailer titled Basement Editions advertising the publication of a poetry series" frameborder="0" height="300px" width="auto"></iframe><figcaption>A mailer advertisement for purchasing poetry series publications from contemporary Asian American poets, Mei-mei Berssenbrugge, Lawson Fusao Inada, Jessica Hagedorn, and Ntozake Shange. Mailing Advertisement, Summer 1978; Yoshio Kishi and Irene Yah-Ling Sun Collection; MSS.292; Box 1; Folder 19; Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/American_Born_and_Foreign_Flyer_1979_page-0001.jpg" alt="a black & white flyer with the title "American Born and Foreign"" onclick="zoomImage(this.src)"><figcaption>A flyer for the release party for Asian American poetry anthology, <i>American Born and Foreign</i>. Flyer, May 19, 1979. Yoshio Kishi and Irene Yah-Ling Sun Collection; MSS.292; Box 1, Folder 19; Fales Library and Special Collections, New York University.</figcaption></figure>');
markers.push(l199);

let c22g = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22g" }).addTo(map2)
    .bindPopup('<strong>22 Catherine Street</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1975_Children+Arts+and+Crafts+Workshop+English+Flyer_From+Jeannie+Chiang.jpeg" alt="black & white flyer with handwritten information about Children\'s Arts and Crafts Workshop and hand-drawn illustrations" onclick="zoomImage(this.src)"><figcaption>Basement Workshop\'s Children\'s Arts and Crafts Workshop was a free eight-week program designed to help children in Chinatown "become aware of their own individuality and creativity" and "develop a sense of self esteem." The program was launched by co-directors, Jeannie Chiang and Linda Lew. Nancy Gim served as a staff person from 1973-1976. June 1975. Flyer designed by Jeannie Chiang. Courtesy of Jeannie Chiang.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1975_Children+Arts+and+Crafts+Workshop+Chinese+Flyer_From+Jeannie+Chiang.jpeg" alt="Chinese version of the flyer" onclick="zoomImage(this.src)"><figcaption>The Chinese language flyer for Basement Workshop\'s Children\'s Arts and Crafts Workshop. June 1975. Courtesy of Jeannie Chiang.</figcaption></figure>');
markers.push(c22g);

//Map3 76-80
let b26 = L.marker([40.71495057838956, -73.99725503215082], { icon: redIcon, title: "b26" }).addTo(map3)
    .bindPopup('<strong>26 Bowery</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/AAAC_Sign_walnut+copy.jpg" alt="a walnut sign that says Asian American Dance Theatre and Asian Arts Institute" onclick="zoomImage(this.src)"><figcaption>Eleanor Yung opens the Asian American Dance Theatre (AADT) in 1974 and moves into the third floor of 26 Bowery in 1976. In 1983, AADT included a visual arts program, calling it the Asian Arts Institute. A large full length walnut sign was created to mark its location. Courtesy of Asian American Arts Centre.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Elainefrontdoor1986.jpg" alt="a woman standing in front of a door with the signs 26, Asian American Dance Theatre, and Asian Arts Institute" onclick="zoomImage(this.src)"><figcaption>AADT\'s school administrator stands in front of the building on 26 Bowery. Courtesy of Asian American Arts Centre.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1986_AAAC+Sign.jpg" alt="a sign that says Asian American Arts Centre" onclick="zoomImage(this.src)"><figcaption>Later when McDonalds rented the ground and second floors of 26 Bowery, construction changed the facade of the building. AADT and the Asian Arts Institute name was then consolidated to the Asian American Arts Centre (AAAC). A new, smaller plexi sign was created to fit on the building\'s marble facade in 1987. In its 2,500 sq ft loft space, AAAC operated as a dance studio, a performance space, a regular art gallery with art discussions, a weekend art and dance school, and an office area. Courtesy of Asian American Arts Centre.</figcaption></figure>');
markers.push(b26);

let c22d = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22d" }).addTo(map3)
    .bindPopup('<strong>22 Catherine Street</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1976_TREE+Performance+Practice_from+Henry+Kwong.jpg" alt="two people in costumes, sitting" onclick="zoomImage(this.src)"><figcaption>Laura Moy and Jeff Jung, two members of TREE (The Rouge on the Elephant\'s Ear) Children\'s Street Theater, a theatre group at Basement Workshop, prepare for a performance called, \'I Met a Penguin.\' Courtesy of Henry Kwong and Marina Yu.</figcaption></figure>');
markers.push(c22d);

let b26b = L.marker([40.71495057838956, -73.99725503215082], { icon: redIcon, title: "b26b" }).addTo(map3)
    .bindPopup('<strong>26 Bowery</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/AADTchilddanceclasses.jpg" alt="a group of children dancing in a room with wooden floor" onclick="zoomImage(this.src)"></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/AADTdanceclasses++copy.jpg" alt="a group of adults dancing in a room with wooden floor" onclick="zoomImage(this.src)"><figcaption>The Asian American Dance Theatre hosted creative dance classes for adults and children alike. Classes included ballet for children and traditional Asian dance. AADT operated as both a performance and teaching space. Courtesy of Asian American Arts Centre.</figcaption></figure>');
markers.push(b26b)

let b26a = L.marker([40.71495057838956, -73.99725503215082], { icon: redIcon, title: "b26a" }).addTo(map3)
    .bindPopup('<strong>26 Bowery</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/19780318_Bridge_Presentation+Flyer.jpeg" alt="a flyer with the Bridge Magazine Logo and invitation information for the presentation" onclick="zoomImage(this.src)"><figcaption>Flyer for a presentation by Basement Workshop\'s <i>Bridge Magazine</i> on Asian American arts and media, hosted at the Asian American Dance Theater. Flyer, March 18, 1978; Asian CineVision Records; TAM.416; Box 127; Tamiment Library/Robert F. Wagner Labor Archives, New York University.</figcaption></figure>');
markers.push(b26a);

// Adding marker cluster for B26 on map3
let markers_b26 = new L.MarkerClusterGroup();
markers_b26.addLayer(b26a);
markers_b26.addLayer(b26b);
markers_b26.addLayer(b26);

map3.addLayer(markers_b26);

let c22b = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22b" }).addTo(map3)
    .bindPopup('<strong>22 Catherine Street</strong><br>Basement Workshop closed Lafayette St. location in 1980 and returned solely to their second location.'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/BW_Group_Photo_1986.jpg" alt="a black & white group photo" onclick="zoomImage(this.src)"><figcaption>Members of the Basement Workshop pose for a group photo. 1986. Found in Basement Workshop 1986 yearbook.</figcaption></figure>');
markers.push(c22b);

// Adding marker cluster for C22 on map3
let markers_c22_2 = new L.MarkerClusterGroup();
markers_c22_2.addLayer(c22b);
markers_c22_2.addLayer(c22d);

map3.addLayer(markers_c22_2);

let m70 = L.marker([40.71621651371639, -73.9990194733756], { icon: redIcon, title: "m70" }).addTo(map3)
    .bindPopup('<strong>70 Mulberry St</strong><br>The location where New York Chinatown History Project (formerly Basement Workshop, eventually MOCA) took place.');
markers.push(m70);

let e176 = L.marker([40.72047834465167, -73.99052708686779], { icon: redIcon, title: "e176" }).addTo(map3)
    .bindPopup('<strong>176-180 Eldridge Street</strong><br>The location of Asian Americans for Equality offices.<br>');
markers.push(e176);

//Map4 81-85
let c22e = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22e" }).addTo(map4)
    .bindPopup('<strong>22 Catherine Street</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/19820917_BW+Catherine+St+Artist+Project+Mailer.jpg" alt="mail with exhibition information and list of artist names printed on it" onclick="zoomImage(this.src)"><figcaption>Basement Workshop\'s Catherine Street Artists Project coordinated by John Woo highlighted work by Asian and Asian American artists in their gallery space every month. This September 1982 exhibit showcased a group of 12 artists, some of whom had been involved from Basement\'s early days. September 1982. Courtesy of John Allen.</figcaption></figure>');
markers.push(c22e);

let c22h = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22h" }).addTo(map4)
    .bindPopup('<strong>22 Catherine Street</strong><br>Basement Workshop\'s space also served as a space for artists to perform original pieces. In February 1983, "Peachfish," a collaborative performance piece, opened to the public. Written by Jessica Hagedorn with set design by Helen Oji, choreography and directing by Ching Valdes-Aran, and featuring acting by Laurie Carlos, "Peachfish" celebrated the interaction between artists using visual mediums, spoken text, and movement.'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1983_Peachfish+Set+Design+Study.jpg" alt="a colored draft illustrating various set designs" onclick="zoomImage(this.src)"><figcaption>Helen Oji\'s set design studies for Peachfish. February 1983. Courtesy of Helen Oji.</figcaption></figure>')
markers.push(c22h);

let c22f = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22f" }).addTo(map4)
    .bindPopup('<strong>22 Catherine Street</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/19850401_BW+Newsletter+Mailer+Page+1_from+John+Allen_Page_1.jpg" alt="a flyer detailing a list of events" onclick="zoomImage(this.src)"><figcaption>Basement Workshop\'s newsletter advertising a works-in-progress play reading, free poetry readings, a gallery exhibit, and performance poetry workshops. April 1985. Courtesy of John Allen.</figcaption></figure>');
markers.push(c22f);

// Adding marker cluster for C22 on map4
let markers_c22_3 = new L.MarkerClusterGroup();
markers_c22_3.addLayer(c22e);
markers_c22_3.addLayer(c22h);
markers_c22_3.addLayer(c22f);

map4.addLayer(markers_c22_3);

// Prompt popup when respective event is clicked on, making sure clustered markers work well too
function markerFunction(id) {
    for (var i in markers) {
        var markerID = markers[i].options.title;
        if (markerID == id) {
            markers[i].openPopup();
            if (["e54", "e54b"].includes(id)) {
                let cluster = markers_e54.getVisibleParent(e54);
                cluster.spiderfy();
                markers[i].openPopup();
            } else if (["c22a", "c22c"].includes(id)) {
                let cluster = markers_c22.getVisibleParent(c22a);
                cluster.spiderfy();
                markers[i].openPopup();
            } else if (["b26", "b26a", "b26b"].includes(id)) {
                let cluster = markers_b26.getVisibleParent(b26);
                cluster.spiderfy();
                markers[i].openPopup();
            } else if (["c22b", "c22d"].includes(id)) {
                let cluster = markers_c22_2.getVisibleParent(c22b);
                cluster.spiderfy();
                markers[i].openPopup();
            } else if (["c22e", "c22h", "c22f"].includes(id)) {
                let cluster = markers_c22_3.getVisibleParent(c22e);
                cluster.spiderfy();
                markers[i].openPopup();
            }
        };
    }
}

$("div").click(function () {
    markerFunction($(this)[0].id);
});

let histEventBtns = document.getElementsByClassName("histEvent");
let selectedItem;

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
