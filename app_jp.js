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
    .bindPopup('<strong>コロンビア大学大学院</strong><br>' + '<figure><iframe src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Chinatown_Report_1969_Danny_Yung_1970.pdf" alt="the scan of the full "Chinatown Report"" frameborder="0" height="300px" width="auto"></iframe><figcaption>1969年、コロンビア大学アーバン・センターのダニー・ユンらの指導のもと、チャイナタウン研究会が結成されました。このグループは、チャイナタウン住民のニーズを調査することを目的とし、1970年に予備調査の結果を発表しました。ベースメント・ワークショップとして知られるようになる組織は、ここから育ちました。1970. Courtesy of Bob Lee and Eleanor Yung.</figcaption></figure>');
markers.push(columbia);

let e54 = L.marker([40.717220253986945, -73.99636624792628], { icon: redIcon, title: "e54" }).addTo(map1)
    .bindPopup('<strong>エリザベス・ストリート54番地</strong><br>ベースメント・ワークショップの最初の所在地。<br><figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Amerasia_Song_And_Poetry.jpg" alt="a letter with illustrations and the title "Amerasia Song and Poetry Project"" onclick="zoomImage(this.src)"><figcaption>ベースメント・ワークショップのメンバーが「アメラジア・ソング＆ポエトリー・プロジェクト」のための資金援助と芸術的貢献を求める手紙。これによって『イエロー・パール（黄色い真珠）』が作られました。Amerasia Song and Poetry Project Letter, 1971; Yoshio Kishi and Irene Yah-Ling Sun Collection; MSS.292; Box 1; Folder 20; Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Yellow_Pearl_Excerpt_1972.png" alt="a page containing a poem and an illustration of a puppet playing the guitar" onclick="zoomImage(this.src)"><figcaption>ベースメント・ワークショップのポートフォリオ『イエロー・パール』からの抜粋。詩：タカシ・ヤナギダ、イラスト：ラリー・ハマ。1972. Museum of Chinese in America (MOCA) Basement Workshop Collection.</figcaption></figure>');
markers.push(e54);

let a613 = L.marker([40.79019689284264, -73.97315536954741], { icon: redIcon, title: "a613" }).addTo(map1)
    .bindPopup('<strong>アムステルダム・アベニュー613番地</strong><br>コミュニティの集会やパフォーマンスのスペース「チキンズ・カム・ホーム・トゥ・ルースト・ストアフロント」の所在地。');
markers.push(a613);

let rockefeller = L.marker([40.758874270103725, -73.97870578862735], { icon: redIcon, title: "rockefeller" }).addTo(map1)
    .bindPopup('<strong>ロックフェラー・センター</strong><br>' + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/BW+eleanor036a.jpg" alt="a man and a woman handing out brochures to passersby" onclick="zoomImage(this.src)"><figcaption>ロックフェラー・センターで通行人にパンフレットを配るエレノア・ユンらベースメント・ワークショップのメンバー。「ニューヨーク：ザ・チャイニーズ・ウェイ」と名付けられたチャイナタウンへの観光客誘致キャンペーンの一環。1971. Courtesy of Asian American Arts Centre.</figcaption></figure>');
markers.push(rockefeller);

let e54b = L.marker([40.717220253986945, -73.99636624792628], { icon: redIcon, title: "e54b" }).addTo(map1)
    .bindPopup('<strong>エリザベス・ストリート54番地</strong><br>' + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1971_BW+New+York+Chinese+Way+Brochure+Page+1_NYU+Tamiment.jpeg" alt="a cover page with lion dance imagery and the text "New York: the Chinese Way"" onclick="zoomImage(this.src)"><figcaption>ニューヨークの住民に中華料理、お祭り、歌劇、社会問題などを紹介するプロジェクト「ニューヨーク：ザ・チャイニーズ・ウェイ」のための旅行案内パンフレットの表紙。1971; Asian American Arts Centre Records; TAM.613; Box 1; Tamiment Library/ Robert F. Wagner Labor Archives, New York University.</figcaption></figure>');
markers.push(e54b);

// Adding marker cluster for E54 on map1
let markers_e54 = new L.MarkerClusterGroup();
markers_e54.addLayer(e54);
markers_e54.addLayer(e54b);

map1.addLayer(markers_e54);

let c22a = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22a" }).addTo(map1)
    .bindPopup('<strong>キャサリン・ストリート22番地</strong><br>1972年、ベースメント・ワークショップの新拠点'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Chinatown_Coloring_Book_Excerpt_1973.jpg" alt="two blank pages in a coloring book with turtle and umbrella graphics" onclick="zoomImage(this.src)"><figcaption>スーザン・ユンがチャイナタウンの若者たちのドローイングやスケッチを含めて制作した「チャイナタウンぬり絵本」から抜粋した2ページ。2,000部がチャイナタウンの子どもたちに無料で配布されました。ここに紹介するイラストは、ベースメント・ワークショップのメンバーのトミエ・アライ（左ページ）とカール・マツダ（右ページ）が描いたもの。Chinatown Coloring Book Exceprt, 1973. Tomie Arai and Karl Matsuda; Asian/Pacific/American Institute at New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/American_Born_and_Foreign_Order_Form_1979_page-0001.jpg" alt="a blank form" onclick="zoomImage(this.src)"><figcaption>ベースメント・ワークショップが制作し、サンベリー・プレスから出版された『アメリカン・ボーン・アンド・フォーリン（アメリカ生まれの外国人）』と題する詩集を購入するための注文書。American Born and Foreign Order Form, 1979; MSS.292; Box 1; Folder 19. Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Linda_Lew_and_William_Leung_nd.jpg" alt="image of kids with paper cups sitting in a circle looking at an illustrated page" onclick="zoomImage(this.src)"><figcaption>リンダ・リュウとウィリアム・リョン、アメラジア・クリエイティブ・アーツのミーティングにて。Untitled, 1973; Henry Chu; Asian/Pacific/American Institute at New York City.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Fay_Chiang_and_Peter_Pan_nd.jpg" alt="image of two people standing in front of a message board"><figcaption>ベースメント・ワークショップの掲示板のそばに立つフェイ・チェンとピーター・パン。Untitled, 1973; Henry Chu; Asian/Pacific/American Institute at New York City.</figcaption></figure>');
markers.push(c22a);

let c22c = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22c" }).addTo(map1)
    .bindPopup('<strong>キャサリン・ストリート22番地</strong><br>' + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/19721001_Bridge+Info+Brochure+Pg+1_NYU+Tamiment.jpeg" alt="a page with text stating the aims of "Bridge Magazine"" onclick="zoomImage(this.src)"><figcaption>“アメリカのアジア人のための雑誌”を自称するベースメント・ワークショップの『ブリッジマガジン』。パンフレットの1ページ目には、その使命が詳しく述べられています。1972年10月1日。</figcaption></figure>');
markers.push(c22c);

// Adding marker cluster for C22 on map1
let markers_c22 = new L.MarkerClusterGroup();
markers_c22.addLayer(c22a);
markers_c22.addLayer(c22c);

map1.addLayer(markers_c22);

//Map2 73-75
let eb32 = L.marker([40.71394508120349, -73.99650475988331], { icon: redIcon, title: "eb32" }).addTo(map2)
    .bindPopup('<strong>イーストブロードウェイ32番地</strong><br>ダニー・ユンのロフトは、アジア系の人々によって製作された、または彼らを取り上げた映画を紹介・保存する組織「アジアン・シネビジョン」の拠点となりました。');
markers.push(eb32);

let eb33 = L.marker([40.71352469221002, -73.99653744599264], { icon: redIcon, title: "eb33" }).addTo(map2)
    .bindPopup('<strong>チャタム・スクエア図書館‐イーストブロードウェイ33番地</strong><br>' + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1986_AADT+Event+Eleanor+Performance.jpg" alt="a woman dancing in traditional clothing" onclick="zoomImage(this.src)"><figcaption>アジアン・アメリカン・ダンス・シアターの初期の公演の一つは、1974年にイーストブロードウェイにあるニューヨーク公共図書館チャタム・スクエア分館の4階エリアで行われました。Courtesy of Asian American Arts Centre.</figcaption></figure>');
markers.push(eb33);

let b17 = L.marker([40.71477514624291, -73.99684571755508], { icon: redIcon, title: "b17" }).addTo(map2)
    .bindPopup('<strong>バワリー＆ディビジョン・ストリート</strong><br>（場所は正確ではありません。現在の孔子プラザの位置を地図上に表示しています。）' + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/19740531_Confucius+Plaza+Protest_Mary+Uyematsu+Kao.jpg" alt="a group of protesters holding signs and megaphones" onclick="zoomImage(this.src)"><figcaption>チャイナタウン中心部で手頃な家賃の高層集合住宅を建設しているデマティス社は、アジア系建設労働者の雇用を拒み、この差別的雇用慣行に反対する抗議デモが孔子プラザで行われました。メガホンを持っているのは、ベースメント・ワークショップのキン・ワー・チン。1974年5月31日。Photo by Mary Uyematsu Kao.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/19740416_Confucius+Plaza+Silkscreen+Poster_Mary+Uyematsu+Kao.jpg" alt="a silkscreen poster with Chinese and English words calling for people to unite and fight discrimination in the construction industry" onclick="zoomImage(this.src)"><figcaption>孔子プラザの雇用を求める集会の宣伝ポスター。ベースメント・ワークショップのアーティストがシルクスクリーンで制作したものです。このポスターはチャイナタウンのあらゆる所に貼られ、建設現場を封鎖する地域全体のデモのきっかけとなりました。 Image of AAFEE workers confronting DeMatteis contractors by Mary Uyematsu Kao.</figcaption></figure>');
markers.push(b17);

let eb1 = L.marker([40.71348705365983, -73.9979242175551], { icon: redIcon, title: "eb1" }).addTo(map2)
    .bindPopup('<strong>イーストブロードウェイ1番地</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/CPW_May_1977.jpg" alt="photo of a group of people sitting in front of a wall covered in some posters" onclick="zoomImage(this.src)"><figcaption>ベースメント・ワークショップの地域計画ワークショップの一部会が行われたミチオ・カクのロフト。メンバー２人の送別会で撮影されたワークショップの集合写真。1977. Courtesy of Marina Yu and Henry Kwong. Photo by Henry Kwong.</figcaption></figure>');
markers.push(eb1);

let l199 = L.marker([40.721469061560114, -73.99781341755894], { icon: redIcon, title: "l199" }).addTo(map2)
    .bindPopup('<strong>ラファイエット・ストリート199番地</strong><br>1975年にベースメント・ワークショップは、新しくこの場所に拠点を拡張。<br>' +
        '<figure><iframe src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/BW_Calendar_1976.pdf" frameborder="0" height="300px" width="auto" alt="scan of a black & white calendar for 1976, with hand-drawn illustrations about worker movements"></iframe><figcaption>ベースメント・ワークショップでは、アーティストたちが、労働運動の事例を描いたオリジナルのアート作品を用いて1976年版カレンダーを制作。シルクスクリーンカレンダー、1975年；Yoshio Kishi and Irene Yah-Ling Sun Collection; MSS.292, Box 53; Folder 3; Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Dance_Flyer_for_Chin_Young_Legal_Fund_1976_page-0001.jpg" alt="black & white poster with illustration of a phoenix" onclick="zoomImage(this.src)"><figcaption>このフライヤーは、ベースメント・ワークショップのメンバーのエリザベス・ヤングとケニー・チンが、暗殺未遂の容疑で不当に告発され違法な捜査・押収を受けているのに対して、その弁護資金の調達を目的として行われるダンス・パーティーを告知するもの。1976年11月のフライヤー；Yoshio Kishi and Irene Yah-Ling Sun Collection; MSS.292; Box 1; Folder 20; Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/We_Wont_Move_Photo_Exhibit_Information_1977_page-0001.jpg" alt="a flyer with text describing information about a photo exhibit" onclick="zoomImage(this.src)"><figcaption>サンフランシスコのインターナショナル・ホテル強制立ち退き闘争を詳述する写真展の開催を、ベースメント・ワークショップとサンフランシスコのカーニー・ストリート・ワークショップが共同で行うことを記したフライヤー。1977年12月15日付フライヤー；Yoshio Kishi and Irene Yah-Ling Sun Collection; MSS.292; Box 1; Folder 20; Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><iframe src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Basement_Editions_Ad_1978.pdf" alt="a mailer titled Basement Editions advertising the publication of a poetry series" frameborder="0" height="300px" width="auto"></iframe><figcaption>現代のアジア系アメリカ人の詩人、メイメイ・バーセンブルッゲ、ローソン・フサオ・イナダ、ジェシカ・ハゲドン、ヌトザケ・シャンゲの詩作シリーズ販売ためのダイレクトメール。1978年夏の郵送広告；Yoshio Kishi and Irene Yah-Ling Sun Collection; MSS.292; Box 1; Folder 19; Fales Library and Special Collections, New York University.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/American_Born_and_Foreign_Flyer_1979_page-0001.jpg" alt="a black & white flyer with the title "American Born and Foreign"" onclick="zoomImage(this.src)"><figcaption>アジア系アメリカ人詩人の作品集『アメリカン・ボーン・アンド・フォーリン（アメリカ生まれの外国人）』発刊記念パーティー（1979年5月19日）のフライヤー。Yoshio Kishi and Irene Yah-Ling Sun Collection; MSS.292; Box 1, Folder 19; Fales Library and Special Collections, New York University.</figcaption></figure>');
markers.push(l199);

let c22g = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22g" }).addTo(map2)
    .bindPopup('<strong>キャサリン・ストリート22番地</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1975_Children+Arts+and+Crafts+Workshop+English+Flyer_From+Jeannie+Chiang.jpeg" alt="black & white flyer with handwritten information about Children\'s Arts and Crafts Workshop and hand-drawn illustrations" onclick="zoomImage(this.src)"><figcaption>ベースメント・ワークショップの「子どもたちのアート&クラフト教室」は、チャイナタウンの子どもたちが「自分の個性や創造性に気づき」「自尊心を育む」ことを目的とした8週間の無料プログラム。1975年6月。ジェニー・チャンのデザインによるフライヤー。Courtesy of Jeannie Chiang.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1975_Children+Arts+and+Crafts+Workshop+Chinese+Flyer_From+Jeannie+Chiang.jpeg" alt="Chinese version of the flyer" onclick="zoomImage(this.src)"><figcaption>The Chinese language flyer for Basement Workshop\'s Children\'s Arts and Crafts Workshop. June 1975. Courtesy of Jeannie Chiang.</figcaption></figure>');
markers.push(c22g);

//Map3 76-80
let b26 = L.marker([40.71495057838956, -73.99725503215082], { icon: redIcon, title: "b26" }).addTo(map3)
    .bindPopup('<strong>バワリー26番地</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/AAAC_Sign_walnut+copy.jpg" alt="a walnut sign that says Asian American Dance Theatre and Asian Arts Institute" onclick="zoomImage(this.src)"><figcaption>エレノア・ユンは、1974年にアジアン・アメリカン・ダンス・シアター（AADT）を開設し、1976年にバワリー26番地の3階に移転。1983年には、AADTは新しく取り組むビジュアルアート事業を「アジアン・アーツ・インスティテュート」と名付け、その場所を示すために、クルミ材の大きな縦長の看板が作られました。Courtesy of Asian American Arts Centre.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/Elainefrontdoor1986.jpg" alt="a woman standing in front of a door with the signs 26, Asian American Dance Theatre, and Asian Arts Institute" onclick="zoomImage(this.src)"><figcaption>バワリー26番地のビルの前に立つAADTの校務担当者。Courtesy of Asian American Arts Centre.</figcaption></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1986_AAAC+Sign.jpg" alt="a sign that says Asian American Arts Centre" onclick="zoomImage(this.src)"><figcaption>その後、マクドナルドがバワリー26番地のビルの1階と2階に入居する際の工事で、建物のファサードが変わりました。AADTとアジアン・アーツ・インスティテュートは名称を統合して「アジアン・アメリカン・アーツ・センター（AAAC）」となり、1987年、大理石のファサードにふさわしい、より小さなアクリル板のサインを新たに作成しました。AAACは2,500平方フィートのロフト空間を、ダンススタジオ、パフォーマンススペース、定期的にアートディスカッションを行うギャラリー、週末のアート＆ダンス教室、そして事務スペースとして運営していました。Courtesy of Asian American Arts Centre.</figcaption></figure>');
markers.push(b26);

let c22d = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22d" }).addTo(map3)
    .bindPopup('<strong>キャサリン・ストリート22番地</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1976_TREE+Performance+Practice_from+Henry+Kwong.jpg" alt="two people in costumes, sitting" onclick="zoomImage(this.src)"><figcaption>ベースメント・ワークショップの演劇グループ「TREE（The Rouge on the Elephant\'s Ear）子ども街頭劇団」のローラ・モイとジェフ・ジュンの2人は、《ペンギンと出会った》という公演の準備に取り掛かっています。Courtesy of Henry Kwong and Marina Yu.</figcaption></figure>');
markers.push(c22d);

let b26b = L.marker([40.71495057838956, -73.99725503215082], { icon: redIcon, title: "b26b" }).addTo(map3)
    .bindPopup('<strong>バワリー26番地</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/AADTchilddanceclasses.jpg" alt="a group of children dancing in a room with wooden floor" onclick="zoomImage(this.src)"></figure>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/AADTdanceclasses++copy.jpg" alt="a group of adults dancing in a room with wooden floor" onclick="zoomImage(this.src)"><figcaption>アジアン・アメリカン・ダンス・シアターは、大人から子どもまでを対象とした創作ダンス教室を開いており、子ども向けのバレエやアジアの伝統的なダンスのクラスも提供していました。AADTは、上演と教育の両方の場として運営されていたのです。Courtesy of Asian American Arts Centre.</figcaption></figure>');
markers.push(b26b)

let b26a = L.marker([40.71495057838956, -73.99725503215082], { icon: redIcon, title: "b26a" }).addTo(map3)
    .bindPopup('<strong>バワリ―26番地</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/19780318_Bridge_Presentation+Flyer.jpeg" alt="a flyer with the Bridge Magazine Logo and invitation information for the presentation" onclick="zoomImage(this.src)"><figcaption>『ブリッジマガジン』に掲載されたアジアン・アメリカン・ダンス・シアターのイベント告知フライヤー。Flyer, March 18, 1978; Asian CineVision Records; TAM.416; Box 127; Tamiment Library/Robert F. Wagner Labor Archives, New York University.</figcaption></figure>');
markers.push(b26a);

// Adding marker cluster for B26 on map3
let markers_b26 = new L.MarkerClusterGroup();
markers_b26.addLayer(b26a);
markers_b26.addLayer(b26b);
markers_b26.addLayer(b26);

map3.addLayer(markers_b26);

let c22b = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22b" }).addTo(map3)
    .bindPopup('<strong>キャサリン・ストリート22番地</strong><br>ベースメント・ワークショップは1980年にラファイエット・ストリートの拠点を閉鎖し、2番目の拠点に戻ってきました。'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/BW_Group_Photo_1986.jpg" alt="a black & white group photo" onclick="zoomImage(this.src)"><figcaption>メンバーたちの集合写真。1986年。ベースメント・ワークショップの1986年版イヤーブックに掲載。</figcaption></figure>');
markers.push(c22b);

// Adding marker cluster for C22 on map3
let markers_c22_2 = new L.MarkerClusterGroup();
markers_c22_2.addLayer(c22b);
markers_c22_2.addLayer(c22d);

map3.addLayer(markers_c22_2);

let m70 = L.marker([40.71621651371639, -73.9990194733756], { icon: redIcon, title: "m70" }).addTo(map3)
    .bindPopup('<strong>マルベリー・ストリート70番地</strong><br>ニューヨーク・チャイナタウン歴史プロジェクトが行われた場所。後にこのプロジェクトは、アメリカ華人博物館（MOCA）となりました。');
markers.push(m70);

let e176 = L.marker([40.72047834465167, -73.99052708686779], { icon: redIcon, title: "e176" }).addTo(map3)
    .bindPopup('<strong>エルドリッジ・ストリート176-180番地</strong><br>アジア系アメリカ人の平等促進を目指す団体「アジアン・アメリカン・フォー・イクオリティ」の事務所所在地。<br>');
markers.push(e176);

//Map4 81-85
let c22e = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22e" }).addTo(map4)
    .bindPopup('<strong>キャサリン・ストリート22番地</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/19820917_BW+Catherine+St+Artist+Project+Mailer.jpg" alt="mail with exhibition information and list of artist names printed on it" onclick="zoomImage(this.src)"><figcaption>ジョン・ウーがコーディネートしたベースメント・ワークショップの「キャサリン・ストリート・アーティスト・プロジェクト」では、毎月アジア人およびアジア系アメリカ人のアーティストの作品をギャラリースペースで展示していました。この1982年9月の展示では、ベースメント・ワークショップの初期から参加していたアーティストを含む12人が紹介されました。1982年9月。Courtesy of John Allen.</figcaption></figure>');
markers.push(c22e);

let c22h = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22h" }).addTo(map4)
    .bindPopup('<strong>キャサリン・ストリート22番地</strong><br>ベースメント・ワークショップのスペースは、アーティストがオリジナル作品を上演する場にもなっていました。1983年2月、コラボレーション・パフォーマンス作品《ピーチフィッシュ》公演が行われました。ジェシカ・ハゲドンが脚本、ヘレン・オジが舞台美術、チン・バルデス・アランが振付・演出を手がけ、ローリー・カルロスが出演した《ピーチフィッシュ》は、視覚媒体、台詞、身体運動を用いてアーティスト間の相互作用を賛美するものでした。'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/1983_Peachfish+Set+Design+Study.jpg" alt="a colored draft illustrating various set designs" onclick="zoomImage(this.src)"><figcaption>《ピーチフィッシュ》のためのヘレン・オッジの舞台美術案。1983年2月。Courtesy of Helen Oji.</figcaption></figure>')
markers.push(c22h);

let c22f = L.marker([40.71304194216185, -73.99735214117389], { icon: redIcon, title: "c22f" }).addTo(map4)
    .bindPopup('<strong>キャサリン・ストリート22番地</strong><br>'
        + '<figure><img src="https://basementworkshopimg.s3.us-east-2.amazonaws.com/19850401_BW+Newsletter+Mailer+Page+1_from+John+Allen_Page_1.jpg" alt="a flyer detailing a list of events" onclick="zoomImage(this.src)"><figcaption>制作中の演劇の台本読み、無料の詩の朗読、ギャラリーでの展示、パフォーマンス・ポエトリーのワークショップをベースメント・ワークショップのニュースレターで宣伝。1985年4月。Courtesy of John Allen</figcaption></figure>');
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
