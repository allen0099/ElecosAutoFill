// ==UserScript==
// @name        TKU EleCos auto fillin
// @description auto fill in the verifi code
// @match       https://www.ais.tku.edu.tw/EleCos/login.aspx
// @grant       none
// @author      @allen0099, @isekai at Telegram
// ==/UserScript==

mapping = {
  'b6589fc6ab0dc82cf12099d1c2d40ab994e8410c': '0',
  '356a192b7913b04c54574d18c28d46e6395428ab': '1',
  'da4b9237bacccdf19c0760cab7aec4a8359010b0': '2',
  '77de68daecd823babbb58edb1c8e14d7106e83bb': '3',
  '1b6453892473a467d07372d45eb05abc2031647a': '4',
  'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4': '5',
  'c1dfd96eea8cc2b62785275bca38ac261256e278': '6',
  '902ba3cda1883801594b6e1b452790cc53948fda': '7',
  'fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f': '8',
  '0ade7c2cf97f75d009975f4d720d1fa6c19f4897': '9'
}


$.ajax({
  dataType: "json",
  url: "Handler1.ashx",
  type: 'post',
  success: function (voice){
    let t = document.getElementById("txtCONFM");
    t.value = voice.map(x => mapping[x]).join('');
  }
});


document.getElementById("txtStuNo").value = "12345678";
document.getElementById("txtPSWD").value = "amazingPassword";
