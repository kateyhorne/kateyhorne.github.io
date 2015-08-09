// comments

function askQuestions(){
		var firstName = prompt ('what is your first name?');
		var lastName = prompt ('what is your last name?');

		var fullName = firstName + ' ' + lastName;
		$ ('h2').text ('hello ' + fullName);

		var userAge = prompt ('How old are you?');
		userAge = parseInt (userAge);

		if (userAge >= 18) {
			//do something
			console.log ('user is an adult');
		} else if (userAge >= 13) {
			console.log ('user is a teenager');
		} else {
		$ ('h2').text ('hello ' + fullName + ' you rock');
		}

		if (firstName.toLowerCase () == "katey" && lastName.toLowerCase() !== "horne") {
			$ ('h2').text ('hello ' + fullName + ' you\'re not the general');
			console.log ('general');
		}
		else {
		$ ('h2').text ('hello ' + fullName + ' You are the general');
		console.log ('general - no')
		}

		var faveColour = prompt ('what is your favourite colour?').toLowerCase();
		if (faveColour === 'red'||
			faveColour === 'green'||
			faveColour === 'blue'||
			faveColour === 'yellow'){
		$('h2').css('background-color', faveColour);

			}
		}







//when the page has loaded 

$(function() {
	$('img').on ('click', askQuestions);

//create a list of sections
	var sections = $('h3').next();


	//hide all the sections
	sections.hide();

	//when the user clicks an h3
	$('h3').on('click', function(){
		//remembber this section the user wants to see
		var thisSection = $ (this).next();

		//hide all the sections except the one the user wants to drrr
		sections.not(thisSection).slideUp(2000);

		//toggle the one the user wants to see
		thisSection.slideToggle(2000);


	});



});