function callApi(currency) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://free.currconv.com/api/v7/convert?q=USD_VND&compact=y&apiKey=do-not-use-this-key');
    xhr.onload = function() {
        if (xhr.status === 200) {
            updateResults(JSON.parse(xhr.responseText));
            console.log(JSON.parse(xhr.responseText))
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
  }
  
  function updateResults(response) {
    console.log(response);
  }

function clickConvert() {
    document.getElementById("amount")
    let result = 0;
    
    if(document.getElementById('checkUSD').checked == true){
        result = parseInt(document.getElementById("amount").value) *23.220
        callApi(parseInt(document.getElementById("amount").value));
        document.getElementById("result").innerHTML = result + " vnđ"
        console.log("checkUSD"+ result)
    }else if(document.getElementById('checkEUR').checked == true){
        result = parseInt(document.getElementById("amount").value) *26049.42
        document.getElementById("result").innerHTML = result+ " vnđ"
        console.log("checkEUR"+ result)
    }
}