//firebaseとの紐づけ
var firebaseConfig = {
    apiKey: "AIzaSyBGJVAFeJaVkbygNQpcXHTAmxu6mqnWvaY",
    authDomain: "web-auth-da36c.firebaseapp.com",
    projectId: "web-auth-da36c",
    storageBucket: "web-auth-da36c.appspot.com",
    messagingSenderId: "808812900786",
    appId: "1:808812900786:web:f2650f74c3df72caed74ab",
    measurementId: "G-L7LBLSEQBS"
};
//firestore DBとの連結
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
const saveButton = document.querySelector("#saveButton");
//変数の定義
let userColorTypeValue;
let timer;
let countdown = 10;
//点数の変数
let points = 0;
document.addEventListener("DOMContentLoaded", ()=>{
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    const colorDisplay = document.getElementById("color-display");
    const ctx = canvas.getContext("2d");
    navigator.mediaDevices.getUserMedia({
        video: true
    }).then((stream)=>{
        video.srcObject = stream;
    }).catch((error)=>{
        console.error("Error accessing camera: ", error);
    });
    video.addEventListener("loadedmetadata", ()=>{
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    });
    video.addEventListener("play", ()=>{
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
    function getAverageColor(pixelData) {
        let totalR = 0;
        let totalG = 0;
        let totalB = 0;
        for(let i = 0; i < pixelData.length; i += 4){
            totalR += pixelData[i];
            totalG += pixelData[i + 1];
            totalB += pixelData[i + 2];
        }
        const numPixels = pixelData.length / 4;
        const avgR = Math.round(totalR / numPixels);
        const avgG = Math.round(totalG / numPixels);
        const avgB = Math.round(totalB / numPixels);
        return {
            r: avgR,
            g: avgG,
            b: avgB
        };
    }
    const colorTypes = [
        "\u8D64",
        "\u7DD1",
        "\u9752",
        "\u9ED2"
    ];
    let randomColorType = colorTypes[Math.floor(Math.random() * colorTypes.length)];
    const randomColor = {
        "\u8D64": [
            255,
            0,
            0
        ],
        "\u7DD1": [
            0,
            255,
            0
        ],
        "\u9752": [
            0,
            0,
            255
        ],
        "\u9ED2": [
            0,
            0,
            0
        ]
    }[randomColorType];
    userColorTypeValue = randomColorType;
    document.getElementById("iroValue").innerText = randomColorType;
    document.getElementById("color-display").style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
});
// function Start() {
// //     timer = setInterval(() => {
// //     // カウントダウンを減らす
// //     countdown--;
// //     // カウントダウンを画面に表示
// //     document.getElementById('timer-display').innerText = `Time: ${countdown} seconds`;
// //     if (countdown <= 0) {
// //         // タイマーが切れたときのアクション
// //         alert("時間切れです！");
// //         clearInterval(timer); // タイマーを停止
// //         resetGame(); // ゲームをリセットする関数を呼び出す（必要に応じて実装）
// //     }
// // }, 1000); // 1000ミリ秒 = 1秒
//     setRandomColor();
// }
function checkColorTypeMatch() {
    const colorDisplay = document.getElementById("color-display");
    // Validate and compare user-specified color type with camera-detected color type
    const style = getComputedStyle(colorDisplay);
    const backgroundColor = style.backgroundColor;
    const cameraColorType = getClosestColorType(backgroundColor);
    if (userColorTypeValue === cameraColorType) {
        // alert('Color type matched!');
        incrementPoints();
        // 一致した場合は再度ランダムな色を設定
        setRandomColor();
    }
}
function incrementPoints() {
    points++;
    document.getElementById("pointValue").innerText = points;
}
function setRandomColor() {
    const colorTypes = [
        "\u8D64",
        "\u7DD1",
        "\u9752",
        "\u9ED2"
    ];
    let randomColorType = colorTypes[Math.floor(Math.random() * colorTypes.length)];
    const randomColor = {
        "\u8D64": [
            255,
            0,
            0
        ],
        "\u7DD1": [
            0,
            255,
            0
        ],
        "\u9752": [
            0,
            0,
            255
        ],
        "\u9ED2": [
            0,
            0,
            0
        ]
    }[randomColorType];
    userColorTypeValue = randomColorType;
    document.getElementById("iroValue").innerText = randomColorType;
    document.getElementById("color-display").style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
}
function getClosestColorType(rgbColor) {
    const colorTypes = {
        "\u8D64": [
            255,
            0,
            0
        ],
        "\u7DD1": [
            0,
            255,
            0
        ],
        "\u9752": [
            0,
            0,
            255
        ],
        "\u9ED2": [
            0,
            0,
            0
        ]
    };
    const rgbMatch = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    const r = parseInt(rgbMatch[1]);
    const g = parseInt(rgbMatch[2]);
    const b = parseInt(rgbMatch[3]);
    let closestColorType = "";
    let closestColorTypeDistance = Infinity;
    for(const type in colorTypes){
        const typeColor = colorTypes[type];
        const distance = getColorDistance(typeColor, [
            r,
            g,
            b
        ]);
        if (distance < closestColorTypeDistance) {
            closestColorType = type;
            closestColorTypeDistance = distance;
        }
    }
    return closestColorType;
}
function getColorDistance(color1, color2) {
    const squaredDist = color1.reduce((acc, val, index)=>acc + Math.pow(val - color2[index], 2), 0);
    return Math.sqrt(squaredDist);
}
saveButton.addEventListener("click", function() {
    var docRef = firestore.doc("samples/" + points);
    // --- Firestoreに登録する ---
    docRef.set({
        // set関数に対し、引数として「キー：値」の形式で
        // ドキュメントに登録するデータを指定し、set関数を実行する
        date: points
    }).then(()=>{
        // 先の処理が成功した場合、こちらの処理が実行される
        // 今回はalertで成功のメッセージを表示する
        alert("Status saved!");
    }).catch((error)=>{
        // 先の処理が失敗した場合、こちらの処理が実行される
        // 今回はalertでエラーメッセージを表示する
        alert("Firestore Got an error:", error);
    });
});

//# sourceMappingURL=index.579125c3.js.map
