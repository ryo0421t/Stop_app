
var map;
// 現在地取得
var marker0;
var circle0;
var id;

// 交差点のオレンジ円のマーカー
var OrangeMarker = [];
var infoWindowOrange = [];
var currentInfoWindowOrange = null;  // ここでcurrentInfoWindow変数を宣言
// 円の場所名・緯度・経度
var OrangeCircleData = [
   {
      name: '高岳交差点',
      lat: 35.17421054899321,    //緯度
      lng: 136.9142778  //経度
   }, {
      name: '折戸交差点',
      lat: 35.066008199736466,
      lng: 136.92873383374362,
   }, {
      name: '東新町北交差点',
      lat: 35.17040589922423,
      lng: 136.91452294121612
   }, {
      name: '平和公園口交差点',
      lat: 35.16057193025298,
      lng: 136.9763860462269
   }, {
      name: '名古屋駅桜通口前交差点（大名古屋ビルヂング前）',
      lat: 35.17175298134471,
      lng: 136.88382650246186
   }, {
      name: '名古屋駅桜通口前交差点（名古屋駅交番、ミットランドスクエア・オフィス棟前）',
      lat: 35.170754142963446,
      lng: 136.88432827306397
   }, {
      name: '名古屋駅名鉄百貨店差点（名鉄百貨店、ミットランドスクエア・ショッピングモール前）',
      lat: 35.169991212376544,
      lng: 136.88457078823362
   }, {
      name: '千早南交差点１',
      lat: 35.16074014376639,
      lng: 136.92020549570245
   }, {
      name: '千早南交差点２',
      lat: 35.16106906493914,
      lng: 136.92043616565078
   }, {
      name: '山王交差点',
      lat: 35.152140498139254,
      lng: 136.89275105681003

   }, {
      name: '椿町北交差点（名古屋駅太閤通口：ビックカメラ名古屋駅西店前）',
      lat: 35.170162576750926,
      lng: 136.8801257431749
   }, {
      name: '中島橋西交差点',
      lat: 35.12412091267649,
      lng: 136.8545825692331
   }, {
      name: '笹島交差点',
      lat: 35.167700337673274,
      lng: 136.88528620413908
   }, {
      name: '太閤通3丁目交差点',
      lat: 35.167665645285545,
      lng: 136.87241963722903
   }, {
      name: '西大須交差点点',
      lat: 35.15818863213256,
      lng: 136.89842551443962
   }

];








// 交差点のイエロー円のマーカー
var YellowMarker = [];
var infoWindowYellow = [];
var currentInfoWindowYellow = null;  // ここでcurrentInfoWindow変数を宣言
// 円の場所名・緯度・経度
var YellowCircleData = [
   {
      name: 'ジュンク堂書店：名古屋店前交差点',
      lat: 35.17186737854141,     //緯度
      lng: 136.88581451961224,    //経度
   }, {
      name: 'ファミリーマート：名駅桜通店前交差点',
      lat: 35.17195080571971,
      lng: 136.8869790356228
   }, {
      name: '国際センター前交差点',
      lat: 35.17221283979088,
      lng: 136.88988543158587
   }, {
      name: '株式会社フジフォーム前交差点',
      lat: 34.726976184453804,
      lng: 137.43585480697413
   }, {
      name: '梅田川：桜橋前交差点',
      lat: 34.72458568965427,
      lng: 137.43840271784197
   }, {
      name: '河合製菓前交差点',
      lat: 34.72469500887908,
      lng: 137.44730627227798
   }, {
      name: 'トライデントコンピュータ専門学校前交差点',
      lat: 35.17266979361072,
      lng: 136.88584278472314
   },

];







// 信号のマーカー
var Signal = [];
var infoWindowMarker = [];
var currentInfoWindowSignal = null;  // ここでcurrentInfoWindow変数を宣言
// 信号の場所名・緯度・経度
var SignalData = [

   // 高岳交差点
   {
      name: '高岳交差点：北',
      lat: 35.174473549912385,   //緯度
      lng: 136.91427703256753    //経度
   }, {
      name: '高岳交差点：東',
      lat: 35.17417914722794,
      lng: 136.91467330808416
   }, {
      name: '高岳交差点：西',
      lat: 35.17413625933805,
      lng: 136.91392509530104
   }, {
      name: '高岳交差点：南',
      lat: 35.173862282111386,
      lng: 136.91432310428078
   },

   // 折戸交差点
   {
      name: '折戸交差点：東',
      lat: 35.06613337273598,
      lng: 136.9289541595325
   }, {
      name: '折戸交差点：西',
      lat: 35.0658815732474,
      lng: 136.92850332365214
   }, {
      name: '折戸交差点：南',
      lat: 35.06587937787972,
      lng: 136.92878093227972
   },

   // 東新町北交差点
   {
      name: '東新町北交差点：北',
      lat: 35.17058802467142,  //緯度
      lng: 136.91450485627996 //経度
   }, {
      name: '東新町北交差点：東',
      lat: 35.170423685849336,
      lng: 136.91477417462724
   }, {
      name: '東新町北交差点：西',
      lat: 35.17039887996055,
      lng: 136.91423743454075
   }, {
      name: '東新町北交差点：南',
      lat: 35.170210908996594,
      lng: 136.91454927160203
   },

   // 平和公園口交差点
   {
      name: '平和公園口交差点：北',
      lat: 35.160699968302254, //緯度
      lng: 136.97640203736094//経度
   }, {
      name: '平和公園口交差点：東',
      lat: 35.160548587780475,
      lng: 136.9768243888578
   }, {
      name: '平和公園口交差点：西',
      lat: 35.16050345473923,
      lng: 136.97620585722765
   }, {
      name: '平和公園口交差点：南',
      lat: 35.160362632237714,
      lng: 136.97670467351844
   },

   // 名古屋駅桜通口前交差点
   {
      name: '名古屋駅桜通口前交差点（大名古屋ビルヂング前）：北',
      lat: 35.171752638708746,
      lng: 136.88382577142875
   }, {
      name: '名古屋駅桜通口前交差点（大名古屋ビルヂング前）：西',
      lat: 35.17149977591237,
      lng: 136.88359861902563
   }, {
      name: '名古屋駅桜通口前交差点（名古屋駅交番、ミットランドスクエア・オフィス棟前）：南',
      lat: 35.17077965062846,
      lng: 136.88434326918772
   }, {
      name: '名古屋駅桜通口前交差点（名古屋駅交番、ミットランドスクエア・オフィス棟前）：西',
      lat: 35.170806514403914,
      lng: 136.8839258914304
   }, {
      name: '名古屋駅名鉄百貨店差点（名鉄百貨店、ミットランドスクエア・ショッピングモール前）：南',
      lat: 35.169984693847944,
      lng: 136.88457876248827
   }, {
      name: '名古屋駅名鉄百貨店差点（名鉄百貨店、ミットランドスクエア・ショッピングモール前）：西',
      lat: 35.17006161245225,
      lng: 136.88429487902184
   },

   // 千早南交差点１
   {
      name: '千早南交差点１：東',
      lat: 35.1604985733811,
      lng: 136.9204984587674
   }, {
      name: '千早南交差点１：西',
      lat: 35.16060677749718,
      lng: 136.91978551403648
   }, {
      name: '千早南交差点１：南',
      lat: 35.16039072793611,
      lng: 136.91999987227797
   },

   // 千早南交差点２
   {
      name: '千早南交差点２：北',
      lat: 35.16133127109282,
      lng: 136.9203352685456
   }, {
      name: '千早南交差点２：北東',
      lat: 35.161274871200845,
      lng: 136.92080264736546
   }, {
      name: '千早南交差点２：東',
      lat: 35.16109419768158,
      lng: 136.92090406931646
   }, {
      name: '千早南交差点２：西',
      lat: 35.16117286235183,
      lng: 136.91999301633987
   },

   // 山王交差点
   {
      name: '山王交差点：北',
      lat: 35.15240279312045,  //緯度
      lng: 136.89263311391878  //経度
   }, {
      name: '山王交差点：東',
      lat: 35.15213808731275,
      lng: 136.8929618708506
   }, {
      name: '山王交差点：西',
      lat: 35.15219894334788,
      lng: 136.89227846651636
   }, {
      name: '山王交差点：南',
      lat: 35.15193603255064,
      lng: 136.89268090402578
   },

   // トライデントコンピュータ専門学校前交差点
   {
      name: 'トライデントコンピュータ専門学校前交差点：北',
      lat: 35.172760366593224,
      lng: 136.88584519332704
   }, {
      name: 'トライデントコンピュータ専門学校前交差点：東',
      lat: 35.17265921797614,
      lng: 136.88592606600088
   }, {
      name: 'トライデントコンピュータ専門学校前交差点：西',
      lat: 35.17267059121107,
      lng: 136.88573736309633
   }, {
      name: 'トライデントコンピュータ専門学校前交差点：南',
      lat: 35.172572497007586,
      lng: 136.88584084533431
   },

   // 椿町北交差点 
   {
      name: '椿町北交差点（名古屋駅太閤通口：ビックカメラ名古屋駅西店前）',
      lat: 35.170162576750926,
      lng: 136.8801257431749
   },

   // 中島橋西交差点
   {
      name: '中島橋西交差点：北',
      lat: 35.12431725745763,
      lng: 136.85454099500143
   }, {
      name: '中島橋西交差点：東',
      lat: 35.1241479838871,
      lng: 136.85487979736658
   }, {
      name: '中島橋西交差点：西',
      lat: 35.12411510768449,
      lng: 136.85432143197636
   }, {
      name: '中島橋西交差点：南',
      lat: 35.12390340578707,
      lng: 136.85464463814785
   },

   // 笹島交差点
   {
      name: '笹島交差点：北',
      lat: 35.167995379465985,
      lng: 136.88518632190986
   }, {
      name: '笹島交差点：東',
      lat: 35.16775889365588,
      lng: 136.88567830021663
   }, {
      name: '笹島交差点：西',
      lat: 35.16763989734875,
      lng: 136.88489150345302
   }, {
      name: '笹島交差点：南',
      lat: 35.167378597942616,
      lng: 136.8853206202806
   },

   // 太閤通3丁目交差点
   {
      name: '太閤通3丁目交差点：北',
      lat: 35.16785859610549,
      lng: 136.8724625525709
   }, {
      name: '太閤通3丁目交差点：東',
      lat: 35.16764810427921,
      lng: 136.8727790532174
   }, {
      name: '太閤通3丁目交差点：西',
      lat: 35.167672223161944,
      lng: 136.87210045437368
   }, {
      name: '太閤通3丁目交差点：南',
      lat: 35.1674463824344,
      lng: 136.8723874507226
   },

   // 西大須交差点
   {
      name: '西大須交差点：北',
      lat: 35.158386266616745,
      lng: 136.89841670429686
   }, {
      name: '西大須交差点：東',
      lat: 35.15808301973112,
      lng: 136.89875443195166
   }, {
      name: '西大須交差点点：西',
      lat: 35.15819155032468,
      lng: 136.89813558996448
   }, {
      name: '西大須交差点：南',
      lat: 35.15790745522909,
      lng: 136.89841279993982
   }

];



function initMap() {
   // マップの初期化
   var myLatlng = new google.maps.LatLng(35.683755, 139.745625);
   var mapOptions = {
      zoom: 14,
      center: myLatlng
   }
   map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);


   // 位置情報の取得に成功した場合の処理
   function success(pos) {
      var crd = pos.coords;
      // アイコンの設定（白い枠線のある青い円）
      var blueCircleIcon = {
         path: google.maps.SymbolPath.CIRCLE,
         fillColor: 'blue',
         fillOpacity: 1,
         scale: 10,  // アイコンのサイズを調整
         strokeColor: 'white',
         strokeOpacity: 1,
         strokeWeight: 2,
         ZINDEX: 10
      };

   
      var currentPos = new google.maps.LatLng(crd.latitude, crd.longitude);

      // 既存のマーカーと円を削除
      if (marker0 != undefined) marker0.setMap(null);
      if (circle0 != undefined) circle0.setMap(null);

      /* 現在位置にマーカーを設定 */
      marker0 = new google.maps.Marker({
         position: currentPos,
         map: map,
         icon: blueCircleIcon  // アイコンの指定 
      });

      // 自分の場所にズーム
      map.setCenter(currentPos);
      map.setZoom(18);
   }



   // 位置情報の取得に失敗した場合の処理
   function error(err) {
      console.error('Error getting current position:', err);
   }

   // 位置情報の取得を試みる
   navigator.geolocation.getCurrentPosition(success, error);


   // オレンジマーカー：毎回の処理
   for (var i = 0; i < OrangeCircleData.length; i++) {
      markerLatLng = new google.maps.LatLng({ lat: OrangeCircleData[i]['lat'], lng: OrangeCircleData[i]['lng'] }); // 緯度経度のデータ作成
      OrangeMarker[i] = new google.maps.Marker({ // マーカーの追加
         position: markerLatLng, // マーカーを立てる位置を指定
         map: null // マーカーを立てる地図を指定
      });

      // マーカーの周りに円を作成
      CircleOrange = new google.maps.Circle({
         strokeColor: "#FD7E00",  // 枠線の色（オレンジ）
         strokeOpacity: 0.8,
         strokeWeight: 2,
         fillColor: "#FD7E00",    // 円の塗りつぶしの色（オレンジ）
         fillOpacity: 0.35,
         map: map,
         center: markerLatLng,    // 円の中心をマーカーの位置に設定
         radius: 45, // 円の半径(m)
      });
   }



   // イエローマーカー：毎の処理
   for (var i = 0; i < YellowCircleData.length; i++) {
      markerLatLng = new google.maps.LatLng({ lat: YellowCircleData[i]['lat'], lng: YellowCircleData[i]['lng'] }); // 緯度経度のデータ作成
      YellowMarker[i] = new google.maps.Marker({ // マーカーの追加
         position: markerLatLng, // マーカーを立てる位置を指定
         map: null // マーカーを立てる地図を指定
      });

      // マーカーの周りに円を作成
      CircleYellow = new google.maps.Circle({
         strokeColor: "#FFDC00",  // 枠線の色（イエロー）
         strokeOpacity: 0.8,
         strokeWeight: 2,
         fillColor: "#FFDC00",    // 円の塗りつぶしの色（イエロー）
         fillOpacity: 0.35,
         map: map,
         center: markerLatLng,    // 円の中心をマーカーの位置に設定
         radius: 30  // 円の半径(m)
      });
   }






   // 緑のアイコン
   // マーカー毎の処理
   for (var i = 0; i < SignalData.length; i++) {
      markerLatLng = new google.maps.LatLng({ lat: SignalData[i]['lat'], lng: SignalData[i]['lng'] }); // 緯度経度のデータ作成

      // アイコンの設定（緑の円）
      var greenCircleIcon = {
         path: google.maps.SymbolPath.CIRCLE,
         fillColor: 'green',
         fillOpacity: 0.8,
         scale: 9,  // アイコンのサイズを調整
         strokeColor: 'green',
         strokeWeight: 2
      };
      Signal[i] = new google.maps.Marker({ // マーカーの追加
         position: markerLatLng, // マーカーを立てる位置を指定
         map: map, // マーカーを立てる地図を指定
         icon: greenCircleIcon  // アイコンの指定
      });

      infoWindowMarker[i] = new google.maps.InfoWindow({ // 吹き出しの追加
         content: SignalData[i]['name']// 吹き出しに表示する内容
      });

      // マーカーにクリックイベントを追加
      markerEvent(i);
   }


}


// マーカーにクリックイベントを追加
function markerEvent(i) {

   Signal[i].addListener('click', function () { // マーカーをクリックしたとき
      infoWindowMarker[i].open(map, Signal[i]); // 吹き出しの表示
      console.log(infoWindowMarker[i].content);

      // 現在開いている吹き出しの値があれば閉じる
      if (currentInfoWindowSignal) {
         currentInfoWindowSignal.close();
      }


      infoWindowMarker[i].open(map, Signal[i]); // クリックしたマーカーの吹き出しを開く
      currentInfoWindowSignal = infoWindowMarker[i];   // 現在開いている吹き出しを更新

      // マーカーをクリックしたときにそのマーカーを地図の中心にする
      map.setCenter(Signal[i].getPosition());

      // マップをズームイン
      map.setZoom(19); // 適切なズーム レベルを指定


      // グローバルナビゲーション
      $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
      console.log("set");

      $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
         $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
         console.log("remove");

      });



      //room-name設定
      var roomNameInput = document.getElementById('room-name');
      console.log(roomNameInput + "roomNameInput");
      // 'room-name' 要素が存在しない場合は作成する
      if (!roomNameInput) {
         roomNameInput = document.createElement('input');
         roomNameInput.type = 'text';
         roomNameInput.id = 'room-name';
         document.body.appendChild(roomNameInput);
      }

      roomNameInput.value = i;
   });

}

// スタートボタンが押されたら
function Start() {
   const value = document.getElementById('room-name').value;
   window.location.href = `https://it222103.web.app/src/index.html?value=${value}`;
}

// 戻るボタンが押されたら
function MapReturn() {
   if (currentInfoWindowSignal) {
      currentInfoWindowSignal.close();
   }
   // マップをズームイン
   map.setZoom(18); // 適切なズーム レベルを指定
}

// 位置情報の取得に成功した場合の処理
function success(pos) {
   var crd = pos.coords;
   var timeStamp = pos.timestamp;

   var currentPos = new google.maps.LatLng(crd.latitude, crd.longitude);

   // 既存のマーカーと円を削除
   if (marker0 != undefined) marker0.setMap(null);
   if (circle0 != undefined) circle0.setMap(null);

   /* 現在位置にマーカーを設定 */
   marker0 = new google.maps.Marker({ position: currentPos, map: map });

   /* 位置の誤差領域 */
   circle0 = new google.maps.Circle({
      strokeColor: "#3333FF",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#3333FF",
      fillOpacity: 0.35,
      map: map,
      draggable: false,
      center: currentPos,
      radius: crd.accuracy   /* 位置の誤差(m)を半径とする */
   });
   map.setCenter(currentPos);
   map.setZoom(14);
   setInfo(timeStamp, crd);
}

function error(err) {
   // 位置情報の取得に失敗した場合の処理
   document.getElementById('tdErrCd').innerHTML = err.code;
   document.getElementById('tdErrMg').innerHTML = err.message;
}

function setInfo(timeStamp, crd) {
   // テーブルにGPS情報を表示
   var tableRef = document.getElementById('tblGps');
   var newRow = tableRef.insertRow(1);
   var newCellTime = newRow.insertCell(0);
   var newCellLat = newRow.insertCell(1);
   var newCellLng = newRow.insertCell(2);
   var newCellAcr = newRow.insertCell(3);
   newCellTime.innerHTML = timeStamp;
   newCellLat.innerHTML = crd.latitude;
   newCellLng.innerHTML = crd.longitude;
   newCellAcr.innerHTML = crd.accuracy + 'm';
}


document.addEventListener('DOMContentLoaded', function () {
    var popupCheckbox = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    var btnShowPopup = document.getElementById('btn_show_popup'); // ボタンの要素を追加

    // チェックボックスの状態に基づいてポップアップの表示/非表示を切り替えるイベントリスナー
    popupCheckbox.addEventListener('change', function () {
        if (popupCheckbox.checked) {
            overlay.style.display = 'block';
        } else {
            overlay.style.display = 'none';
        }
    });

    // ウィンドウ外をクリックしたときにポップアップを閉じるイベントリスナー
    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            popupCheckbox.checked = false;
            overlay.style.display = 'none';
        }
    });

    // ボタンクリックでポップアップを表示するイベントリスナー
    btnShowPopup.addEventListener('click', function () {
        popupCheckbox.checked = true;
        overlay.style.display = 'block';
    });
});



