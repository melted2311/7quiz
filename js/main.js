var questions = [
	{
		question: "Name the primary colors?",
		answer: "red, yellow, blue"
	},
	{
		question: "Where did coffee originate from?",
		answer: "ethiopia"
	},
	{
		question: "Name the largest ocean?",
		answer: "pacific"
	},
	{
		question: "Name the world's biggest island?",
		answer: "greenland"
	},
	{
		question: "What does the term 'Piano' mean?",
		answer: "played softly"
	},
	{
		question: "Name the seventh planet from the sun?",
		answer: "uranus"
	},
	{
		question: "Whis is the computer named after a fruit?",
		answer: "apple"
	}
]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}
