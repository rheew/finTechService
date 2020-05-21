var url = 'https://developers.nonghyup.com/InquireDepositorAccountNumber.nh';

var button = document.querySelector('.submit');
var ApiNm = 'InquireDepositorAccountNumber';//API명
var Tsymd = ''; // 전송 일자
var Trtm = ''; //전송시각
var Iscd = '000279'; // 기관 코드
var FintechApsno = '001'; // 핀테크 앱 일련번호
var ApiSvcCd = 'DrawingTransferA';// API 서비스코드
var IsTuno = '';//random value 기관거래고유번호 
var AccessToken = '84f9b616e8839cbc35243dc720bd004ed3aab36558493af87ac243a51a441c8e';
var Bncd = '';//은행코드 011
var Acno = '';//계좌번호 3020000001168
var getData = [];
button.addEventListener("click", evt =>{
  Bncd = document.querySelector('.Bncd').value;
  Acno = document.querySelector('.Acno').value;
  
  var param = document.querySelectorAll('.parameter');

  param.forEach(data =>{
    //data.value = '';
  })
  makeDate();
  insertValue();
  sendAjax();

})
function insertValue(){
  data.Bncd = Bncd;
  data.Acno = Acno;
  data.Header.Tsymd = Tsymd;
  data.Header.Trtm = Trtm;
  data.Header.IsTuno = Trtm;
}
function makeDate(){
  var today = new Date();

  var year = String(today.getFullYear());
  var month = ''+(today.getMonth()+1);
  var date = ''+(today.getDay()+17);
  var hours = ''+today.getHours();
  var minutes = ''+today.getMinutes();
  var seconds = ''+today.getSeconds();
  
  if(minutes.length === 1) minutes = 0 + minutes;
  if(month.length === 1) month = 0 + month;
  
  Tsymd = year+month+date;
  Trtm = hours+minutes+seconds;
  //console.log(Tsymd+" "+Trtm)
}

function getName(name){
  var Dpnm = document.querySelector('.name');
  Dpnm.value = name;
}

var data = {
    "Header": {
      "ApiNm": ApiNm,
      "Tsymd": Tsymd,
      "Trtm": Trtm,
      "Iscd": Iscd,
      "FintechApsno": FintechApsno,
      "ApiSvcCd": ApiSvcCd,
      "IsTuno": IsTuno,
      "AccessToken": AccessToken
    },
    "Bncd": Bncd,
    "Acno": Acno
  }
function sendAjax(){
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function(){
    if(xhr.readystate === 4 && xhr.status === 200){
        alert(xhr.responseText);
    }
    var data = JSON.parse(xhr.responseText);
    getName(data.Dpnm);
    console.log(data.Dpnm);
  })
  xhr.open("POST", url,true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(data));
  
}

var xhr = new XMLHttpRequest();

var header = {
    "Header": {
      "ApiNm": "InquireDepositorAccountNumber",
      "Tsymd": "20200517",
      "Trtm": "112428",
      "Iscd": "000279",
      "FintechApsno": "001",
      "ApiSvcCd": "DrawingTransferA",
      "IsTuno": "1100",
      "AccessToken": "84f9b616e8839cbc35243dc720bd004ed3aab36558493af87ac243a51a441c8e"
    },
    "Bncd": "011",
    "Acno": "3020000001170"
  }
  
xhr.open("POST", url,true);
xhr.onreadystatechange = function(){
  if(xhr.readystate === 4 && xhr.status === 200){
      alert(xhr.reponseText);
  }
  console.log(xhr.responseText);
}
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(JSON.stringify(header));
console.log("hellow");


