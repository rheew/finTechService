var url = 'https://developers.nonghyup.com/InquireDepositorAccountNumber.nh';
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

