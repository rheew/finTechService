var url = 'https://developers.nonghyup.com/OpenFinAccountDirect.nh';
var urlGetnum = ''
//20200526000000433
var button = document.querySelector('.Rgno');
var ApiNm = '';//API명
var Tsymd = ''; // 전송 일자
var Trtm = ''; //전송시각
var Iscd = '000279'; // 기관 코드
var FintechApsno = '001'; // 핀테크 앱 일련번호
var ApiSvcCd = 'DrawingTransferA';// API 서비스코드
var IsTuno = '';//random value 기관거래고유번호 
var AccessToken = '84f9b616e8839cbc35243dc720bd004ed3aab36558493af87ac243a51a441c8e';
var Bncd = '';//은행코드 011
var Acno = '';//계좌번호 3020000001168
var DrtrRgyn = ''; //출금이체 등록여부
var BrdtBrno = ''; // 생년월일(사업자번호)

button.addEventListener("click", evt =>{
  ApiNm = 'OpenFinAccountDirect';
  Bncd = document.querySelector('.Bncd').value;
  Acno = document.querySelector('.Acno').value;
  DrtrRgyn = document.querySelector('.DrtrRgyn').value;
  BrdtBrno = document.querySelector('.BrdtBrno').value;

  var param = document.querySelectorAll('.parameter');

  param.forEach(data =>{
    //data.value = '';
  })
  makeDate();
  insertValue();
  console.log(data);
  sendAjax();

})
function insertValue(){
  data.Bncd = Bncd;
  data.Acno = Acno;
  data.DrtrRgyn = DrtrRgyn;
  data.BrdtBrno = BrdtBrno;
  data.Header.Tsymd = Tsymd;
  data.Header.Trtm = Trtm;
  data.Header.IsTuno = Trtm;
}
function makeDate(){
  var today = new Date();

  var year = String(today.getFullYear());
  var month = ''+(today.getMonth()+1);
  var date = ''+(today.getDate());
  var hours = ''+today.getHours();
  var minutes = ''+today.getMinutes();
  var seconds = ''+today.getSeconds();
  
  if(minutes.length === 1) minutes = 0 + minutes;
  if(month.length === 1) month = 0 + month;
  
  Tsymd = year+month+date;
  Trtm = hours+minutes+seconds;

}

function getAccount(num){
  var Rgno = document.querySelector('.Rgno');
  Rgno.value = num;
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
    "DrtrRgyn": DrtrRgyn,
    "BrdtBrno": BrdtBrno,
    "Bncd": Bncd,
    "Acno": Acno
  }
function sendAjax(){
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function(){

    var data = JSON.parse(xhr.responseText);
    console.log(data);
    getAccount(data.Rgno);
    
  })
  xhr.open("POST", url,true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(data));
  
}

