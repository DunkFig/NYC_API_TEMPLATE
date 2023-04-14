
// The reference to the section in our HTML
let parentElement = document.getElementById('parent')

//This is some of the JQUERY code that will easily let use use this API. 
	$.ajax({
		url: "YOUR API LINK",
		type: "GET",
		data: {
		  "$limit" : 5000,
		  "$$app_token" : "YOUR APP TOKEN"
		}
	}).done(function(data) {
		for(let i =0; i < data.length; i++){

			let newDiv = document.createElement('div')
	
			newDiv.innerHTML =` 
			<section>
				<div> </div>
			<section>
			`
			parentElement.append(newDiv)
		}
	});
