let array1 = new Array();
let array2 = new Array();

//値受け取り
const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('value');
console.log('受け取った値:', value);

let valuetotal = value + "ranking";
let valuestamp;
let valueK = value + "keisan"
var total;

// Firebaseとの連携
const firebaseConfig = {
    apiKey: "AIzaSyCY_ov4lmtL4m2g1q-6nIAeO03aUx9LVTA",
    authDomain: "hosting-75e13.firebaseapp.com",
    projectId: "hosting-75e13",
    storageBucket: "hosting-75e13.appspot.com",
    messagingSenderId: "656533366110",
    appId: "1:656533366110:web:d9c8aab06373ceb39f9bcf",
    measurementId: "G-66JHM7NZQG"
};

// Firestoreデータベースとの連携
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();



async function goukeiten() {
    //合計点を出す
    await firestore.collection(valueK)
        .get()
        .then((snapShot) => {
            if (snapShot.docs.length == 0) {
                console.log('データないよ')
            } else {
                snapShot.forEach(doc => {
                    array1.push(doc.data().date);
                    // array1 = doc.data()
                    console.log(array1);
                });
            }

        })
    total = array1.reduce(function (sum, element) {
        return sum + element;

    }, 0);
    total = String(total);
    console.log(total)

    //合計点を格納

    valuetotal = String(valuetotal);
    var docRef = firestore.collection(valuetotal).doc(total);
    // --- Firestoreに登録する ---
    docRef.set({
        // set関数に対し、引数として「キー：値」の形式で
        // ドキュメントに登録するデータを指定し、set関数を実行する
        date: total,
    }).then(() => {
        // 先の処理が成功した場合、こちらの処理が実行される
    }).catch((error) => {
        // 先の処理が失敗した場合、こちらの処理が実行される
        // 今回はalertでエラーメッセージを表示する
        alert("Firestore Got an error:", error);
    });



    //消す作業
    const collectionRef2 = firestore.collection(valuestamp);

    // コレクション内の全てのドキュメントを取得
    const querySnapshot2 = await collectionRef2.get();

    // ドキュメントを削除
    querySnapshot2.forEach((doc) => {
        doc.ref.delete();
    });
    const collectionRef3 = firestore.collection(valueK);

    // コレクション内の全てのドキュメントを取得
    const querySnapshot3 = await collectionRef3.get();

    // 関数
    waitThreeSeconds()


    // x秒待つ関数
    function waitThreeSeconds() {
        //x秒待機する
        setTimeout(function () {

            // ドキュメントを削除
            querySnapshot3.forEach((doc) => {
                doc.ref.delete();
            });

        }, 1500);
    }
    set();
}

document.addEventListener('DOMContentLoaded', () => {
    valuestamp = value + 1;
    var docRef = firestore.collection(valuestamp);
    docRef
        .get()
        .then(function (doc) {
            if (doc.exists) {
                set();
                console.log("true")

            } else {
                // ない場合
                console.log("false")

                goukeiten();
            }

        });
})

// データをセット
async function set() {
    await firestore.collection(valuetotal)
        .get()
        .then((snapShot) => {
            if (snapShot.docs.length == 0) {
                console.log('データないよ')
            } else {
                snapShot.forEach(doc => {
                    array2.push(doc.data().date);
                });
            }
        })

    function compareFunc(a, b) {
        return b - a;
    }

    document.getElementById('team-point').innerText = total;

    // 配列の降順
    array2.sort(compareFunc);
    document.getElementById('1st').innerText = array2[0];
    document.getElementById('2nd').innerText = array2[1];
    document.getElementById('3rd').innerText = array2[2];



}

