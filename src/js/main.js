// valueの受け取り
const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('value');
const value2 = value;
console.log('受け取った値:', value);

// SkyWay SDKから必要なモジュールをインポート
const { nowInSec, SkyWayAuthToken, SkyWayContext, SkyWayStreamFactory, SkyWayRoom, uuidV4 } = skyway_room;
let meid;

var FirstLat;
var FirstLong;
var CurLat;
var CurLong;
var dLat;
var dLon;
var distance;

document.addEventListener('DOMContentLoaded', () => {
    getFirstLocation();
});



// 位置情報取得
function getFirstLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showFirstPosition, handleLocationError);
    } else {
        document.getElementById("result").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showFirstPosition(position) {
    FirstLat = position.coords.latitude;
    FirstLong = position.coords.longitude;

    console.log(FirstLat);
    console.log(FirstLong);

    setInterval(KeiLatLang, 5000);
}

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function KeiLatLang() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showCurPosition, handleLocationError);
    } else {
        document.getElementById("result").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showCurPosition(position) {
    CurLat = position.coords.latitude;
    CurLong = position.coords.longitude;

    console.log(CurLat);
    console.log(CurLong);

    degreesToRadians();
    calculateDistance();
    stop();
}

function calculateDistance() {
    const R = 6371000; // Earth radius in meters

    dLat = degreesToRadians(CurLat - FirstLat);
    dLon = degreesToRadians(CurLong - FirstLong);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degreesToRadians(FirstLat)) * Math.cos(degreesToRadians(CurLat)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    distance = R * c; // Distance in meters
}

function stop() {
    if (distance.toFixed(2) > 5) {
        //ゲーム止める
        console.log("tomaru");
        // alert("歩きスマホはやめましょう");

        document.getElementById('btn_audio_tyuui').currentTime = 0; //連続クリックに対応
        document.getElementById('btn_audio_tyuui').play(); //クリックしたら音を再生

    } else {
        //続行
        console.log("keizoku");
    }
}

function handleLocationError(error) {
    console.error("Error getting location:", error.message);
}


// 認証のためのSkyWayAuthTokenを作成
const token = new SkyWayAuthToken({
    jti: uuidV4(),
    iat: nowInSec(),
    exp: nowInSec() + 60 * 60 * 24,
    scope: {
        app: {
            id: 'cfa04cbf-2888-4109-bafe-de47d2cf4699',
            turn: true,
            actions: ['read'],
            channels: [
                {
                    id: '*',
                    name: '*',
                    actions: ['write'],
                    members: [
                        {
                            id: '*',
                            name: '*',
                            actions: ['write'],
                            publication: {
                                actions: ['write'],
                            },
                            subscription: {
                                actions: ['write'],
                            },
                        },
                    ],
                    sfuBots: [
                        {
                            actions: ['write'],
                            forwardings: [
                                {
                                    actions: ['write'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
}).encode('0mNQLVQNXYRIFUmU8k9g/NEy/t1oghmt4GfTAK0kavM=');






// ビデオ会議のセットアップを行う非同期関数
(async () => {
    // DOM要素を取得

    const myId = document.getElementById('my-id');
    // const joinButton = document.getElementById('join');
    const time = document.getElementById('timer-display');

    // 合計参加者数を表示する要素
    const totalParticipantsDisplay = document.getElementById('total-participants');

    // SkyWayStreamFactoryを使用してオーディオおよびビデオストリームを作成
    const { audio, video } = await SkyWayStreamFactory.createMicrophoneAudioAndCameraStream();





    // SkyWayContextおよびSkyWayRoomを作成
    const context = await SkyWayContext.Create(token);
    const room = await SkyWayRoom.FindOrCreate(context, {
        type: 'p2p',
        name: value || 'defaultRoom', // URLパラメータから取得した値でルーム名を設定（デフォルト値も設定可能）
    });


    // ルームに参加し、ユーザー情報を取得
    meid = await room.join();


    // ユーザーのビデオストリームを公開

    await meid.publish(video);



    // 合計参加者数を表示する関数
    const updateTotalParticipantsDisplay = () => {
        totalParticipantsDisplay.textContent = `参加人数: ${room.publications.length}`;
    };


    // // カウントダウンタイマーの秒数
    var countdownSeconds = 0;

    let array1 = new Array();
    let valuestamp = value + 1;
    let valueK = value + "keisan";


    //タイマーを表示する関数
    const updateTimer = () => {
        time.textContent = `${countdownSeconds}`;
    };

    async function deletedata() {



        //ポイントを追加
        var docRef = firestore.collection(valueK).doc(meid.id);
        // --- Firestoreに登録する ---
        docRef.set({
            // set関数に対し、引数として「キー：値」の形式で
            // ドキュメントに登録するデータを指定し、set関数を実行する
            date: points,
        }).then(() => {
            // 先の処理が成功した場合、こちらの処理が実行される
            console.log("ファイアベースに格納完了");
        }).then(() => {

            // 関数を呼び出す
            waitThreeSeconds();


        }).catch((error) => {
            // 先の処理が失敗した場合、こちらの処理が実行される
            // 今回はalertでエラーメッセージを表示する
            alert("Firestore Got an error:", error);
        });


    }



    // カウントダウン用のタイマー関数
    const countdownjikan = () => {
        const intervalId = setInterval(function () {
            if (countdownSeconds >= 0) {


                updateTimer();
                countdownSeconds--;

            } else {

                deletedata();

                clearInterval(intervalId); // タイマー停止 

            }
        }, 1000);
    }



    // 初期合計参加者数を表示
    updateTotalParticipantsDisplay();

    // タイムスタンプ
    var docRef = firestore.collection(valuestamp).doc('stamp');

    docRef.get().then(function (doc) {
        if (doc.exists) {

            var currentDate = new Date();
            var timestamp = currentDate.getTime();
            var mydata = doc.data();
            var curStamp = mydata.time;
            countdownSeconds = Math.floor(curStamp / 1000 - timestamp / 1000);



            console.log(curStamp);
            console.log(countdownSeconds);


            countdownjikan();


        } else {
            // ない場合
            //タイマー呼び出す関数
            countdownSeconds = 30;
            countdownjikan();
            //タイムスタンプ+タイマーの時間分の処理
            var currentDate = new Date();
            var timestamp = currentDate.getTime();
            var curStamp = timestamp + countdownSeconds * 1000;
            //firebaseに格納する場所
            var docRef = firestore.doc(valuestamp + "/stamp");
            // --- Firestoreに登録する ---
            docRef.set({
                //stampの値が入ってる変数を:の後に書いてね
                time: curStamp,

            });
            console.log(curStamp)



        }
    });




    // リモートストリームを購読およびアタッチする関数
    const subscribeAndAttach = (publication) => {
        // 現在のユーザーの発行物であればスキップ
        if (publication.publisher.id === meid.id) return;

        updateTotalParticipantsDisplay();
    };



    // 既存の発行物を購読およびアタッチ
    room.publications.forEach(subscribeAndAttach);
    console.log(subscribeAndAttach + "です");
    console.log(room.publications);



    // 新しいストリームが発行されたときのイベントリスナを設定
    room.onStreamPublished.add((e) => subscribeAndAttach(e.publication));



})();
//firebaseとの紐づけ
const firebaseConfig = {
    apiKey: "AIzaSyCY_ov4lmtL4m2g1q-6nIAeO03aUx9LVTA",
    authDomain: "hosting-75e13.firebaseapp.com",
    projectId: "hosting-75e13",
    storageBucket: "hosting-75e13.appspot.com",
    messagingSenderId: "656533366110",
    appId: "1:656533366110:web:d9c8aab06373ceb39f9bcf",
    measurementId: "G-66JHM7NZQG"
};

//firestore DBとの連結
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
const saveButton = document.querySelector("#saveButton");
const checkColorTypeMatch = document.querySelector("#checkColorTypeMatch");

//変数の定義
let userColorTypeValue;
let timer;
let countdown = 10;

//点数の変数
let points = 0;


document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const colorDisplay = document.getElementById('color-display');
    const ctx = canvas.getContext('2d');
    const zoomControl = document.getElementById('zoomControl');


    // ズームコントロールのイベントリスナー
    zoomControl.addEventListener('input', () => {
        const scale = zoomControl.value;
        video.style.transform = `scale(${scale})`;
    });


    // 背面カメラ
    navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: { exact: 'environment' } // 'environment' は背面カメラを指定します
        }
    })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((error) => {
            console.error('カメラのアクセスエラー: ', error);
        });

    video.addEventListener('loadedmetadata', () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    });

    video.addEventListener('play', () => {
        function processFrame() {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(canvas.width / 4, canvas.height / 4, canvas.width / 2, canvas.height / 2);
            const pixelData = imageData.data;
            const averageColor = getAverageColor(pixelData);

            colorDisplay.style.backgroundColor = `rgb(${averageColor.r}, ${averageColor.g}, ${averageColor.b})`;

            requestAnimationFrame(processFrame);
        }

        processFrame();
    });




    // 色
    function getAverageColor(pixelData) {
        let totalR = 0;
        let totalG = 0;
        let totalB = 0;

        for (let i = 0; i < pixelData.length; i += 4) {
            totalR += pixelData[i];
            totalG += pixelData[i + 1];
            totalB += pixelData[i + 2];
        }

        const numPixels = pixelData.length / 4;
        const avgR = Math.round(totalR / numPixels);
        const avgG = Math.round(totalG / numPixels);
        const avgB = Math.round(totalB / numPixels);

        return { r: avgR, g: avgG, b: avgB };
    }
    const colorTypes = ['赤', '緑', '青', '黒'];
    let randomColorType = colorTypes[Math.floor(Math.random() * colorTypes.length)];
    const randomColor = {
        赤: [255, 0, 0],
        緑: [0, 255, 0],
        青: [0, 0, 255],
        黒: [0, 0, 0],
    }[randomColorType];
    userColorTypeValue = randomColorType;
    document.getElementById('iroValue').innerText = randomColorType;

    document.getElementById('color-display').style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
    document.getElementById('iro').style.borderBottom = `6px solid rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;



});


// スキャンボタンをクリックしたとき
checkColorTypeMatch.addEventListener("click", function () {

    const colorDisplay = document.getElementById('color-display');

    // Validate and compare user-specified color type with camera-detected color type
    const style = getComputedStyle(colorDisplay);
    const backgroundColor = style.backgroundColor;
    const cameraColorType = getClosestColorType(backgroundColor);

    if (userColorTypeValue === cameraColorType) {

        //ポイント＋
        incrementPoints();
        seikai();
        // 一致した場合は再度ランダムな色を設定
        setRandomColor();

    } else {
        miss();
    }
});

// ポイント増
function incrementPoints() {
    points++;
    document.getElementById('pointValue').innerText = points;
}
// 正解
function seikai() {
    document.body.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
    colorTime();
}
// 不正解
function miss() {
    document.body.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    colorTime();
}

// ０．３秒間
function colorTime() {
    setTimeout(function () {
        document.body.style.backgroundColor = "white";
    }, 300);
}
// ランダムな色をセット
function setRandomColor() {

    const colorTypes = ['赤', '緑', '青', '黒'];
    let randomColorType = colorTypes[Math.floor(Math.random() * colorTypes.length)];
    const randomColor = {
        赤: [255, 0, 0],
        緑: [0, 255, 0],
        青: [0, 0, 255],
        黒: [0, 0, 0],
    }[randomColorType];
    userColorTypeValue = randomColorType;
    document.getElementById('iroValue').innerText = randomColorType;

    document.getElementById('color-display').style.borderBottom = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
    document.getElementById('iro').style.borderBottom = `6px solid rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;

}



function getClosestColorType(rgbColor) {
    const colorTypes = {
        赤: [255, 0, 0],
        緑: [0, 255, 0],
        青: [0, 0, 255],
        黒: [0, 0, 0],
        // Add more color types as needed
    };

    const rgbMatch = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    const r = parseInt(rgbMatch[1]);
    const g = parseInt(rgbMatch[2]);
    const b = parseInt(rgbMatch[3]);

    let closestColorType = '';
    let closestColorTypeDistance = Infinity;

    for (const type in colorTypes) {
        const typeColor = colorTypes[type];
        const distance = getColorDistance(typeColor, [r, g, b]);

        if (distance < closestColorTypeDistance) {
            closestColorType = type;
            closestColorTypeDistance = distance;
        }
    }

    return closestColorType;
}

function getColorDistance(color1, color2) {
    const squaredDist = color1.reduce((acc, val, index) => acc + Math.pow(val - color2[index], 2), 0);
    return Math.sqrt(squaredDist);
}

// x秒待つ関数
function waitThreeSeconds() {
    //x秒待機する
    setTimeout(function () {
        // ここに1.5秒後に実行したいコード
        window.location.href = `https://it222103.web.app/src/Ranking.html?value=${value2}`;
    }, 1500);
}
