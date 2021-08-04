var baseURL = "https://api.coingecko.com/api/v3";
var exchangeDataURL = "/exchanges?per_page=100";
var url2 = baseURL + exchangeDataURL;

fetch(url2)
.then(res =>{
  res.json().then(data =>{
    for(i=0; i<50; i++){
      let rank = data[i].trust_score_rank;
      let pic = data[i].image;
      let exchange = data[i].name;
      let exchangeVol = new Intl.NumberFormat('en-US', {style: 'decimal'}).format(data[i].trade_volume_24h_btc)+ " ";

      $("#tableBody2").append("<tr><td>"+ rank + "</td>"+ "<td><img class='image' src= "+ pic + "/>"+ exchange + "</td>"+ "<td class='volume'>"+ exchangeVol + "BTC</td></tr>");
    }
  })
})
.catch(err =>{
  $("#tableBody2").html(err);
});
