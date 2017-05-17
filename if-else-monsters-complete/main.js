function monsters() {
	var choice1 = prompt("You are walking in the forest, when a monster jumps out. Do you FIGHT, PAY or RUN?", "Type your answer here").toUpperCase();
	var list
	var result

	if (choice1 === "FIGHT") {
		var choice2 = prompt("Are you strong?", "Yes or No").toUpperCase();
		if (choice2 === "YES") {
			list = document.getElementById('list')
			result = "You beat the monster!"
			list.innerHTML = list.innerHTML + '<li>' + result + '</li>'
		} else {
			var choice3 = prompt("Are you smart?", "Yes or No").toUpperCase();
			if (choice3 === "YES") {
				list = document.getElementById('list')
				result = "I guess that'll do! You beat the monster - nice work!"
				list.innerHTML += '<li>' + result + '</li>'
			} else {
				list = document.getElementById('list')
				result = "You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a monster. You lose!"
				list.innerHTML += '<li>' + result + '</li>'
			}
		}

	} else if (choice1 == "PAY") {
		var choice2 = prompt("Are you rich?", "Yes or No").toUpperCase();
		if (choice2 === "YES") {
			list = document.getElementById('list')
			result = "Well I guess you can afford 100€!"
			list.innerHTML += '<li>' + result + '</li>'
		} else {
			list = document.getElementById('list')
			result = "Too bad! It's human for dinner!"
			list.innerHTML += '<li>' + result + '</li>'
		}
	} else if (choice1 == "RUN") {
		var choice2 = prompt("Are you fast?", "Yes or No").toUpperCase();
		if (choice2 === "YES") {
			list = document.getElementById('list')
			result = "Better get your running shoes on then!"
			list.innerHTML += '<li>' + result + '</li>'
		} else {
			list = document.getElementById('list')
			result = "This doesn't end well for you, tiny human!"
			list.innerHTML += '<li>' + result + '</li>'
		}
	} 
}

document.getElementById("monsters").onclick = monsters;