document.getElementById("btn").addEventListener("click", getApi)
let request = false
function getApi() {
	request = true
	console.log(request)
	let foodName = document.getElementById("phrase").value;
	let parameter = document.getElementById("fields").value;
	let answrField = document.getElementById("responseApi");
	let parameterField = parameter;
	parameterField = parameterField.replace(/^"(.*)"$/, '$1');
	console.log(parameterField)
    if (request == true) {
		let settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://nutritionix-api.p.rapidapi.com/v1_1/search/" + foodName + "?fields=" + parameter,
			"method": "GET",
			"headers": {
				"X-RapidAPI-Key": "1661ca73b7mshbf37585e5b7fe43p140a04jsnbf8755f744f7",
				"X-RapidAPI-Host": "nutritionix-api.p.rapidapi.com"
			}
	
		};
	
	
		
		$.ajax(settings).done(function (response) {
			
			answrField.innerHTML = "";
			$.each(response.hits[0].fields.parameterGet, function (key, value) {
				console.log(response.hits[0].fields.parameterGet);
				$(answrField).append(key + ": " + value + '<br>');
			})
	
	
	
	
	
			console.log(response.hits[]);
			answrField.innerHTML = response; 
		});
	}
	
}
