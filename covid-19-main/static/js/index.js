fetch('https://covid19.th-stat.com/api/open/today')
.then((response) => {
return response.json();
})
.then((data) => {
console.log(data);
document.getElementById("Confirmed").innerHTML = data.Confirmed.toLocaleString();
document.getElementById("Recovered").innerHTML = data.Recovered.toLocaleString();
document.getElementById("Deaths").innerHTML = data.Deaths.toLocaleString();
document.getElementById("UpdateDate").innerHTML = data.UpdateDate.toLocaleString();
});  