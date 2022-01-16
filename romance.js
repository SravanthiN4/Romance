
//function to parse through the text to remove punctuation marks

function parseText(text) {
	//default text to lowercase
	text = text.toLowerCase();
	//use replace function to replace the punctuation with a ""
	text = text.split("'").join('').split(',').join('');

	//convert the text to array
	const wordsArray = text.split(' ');
	return wordsArray;
}



//function to create word pairs with key and values
function generateWordPairs(text) {
	//declare an empty object
	let newObj = {};
	//invoke the function to parse the text passed into this
	let words = parseText(text);
	//loop through the length of the array ignoring the last word array to create key value pairs
	for (let i = 0; i < words.length - 1; i++) {
		//capture currElement as key
		let currElement = words[i];
		//capture nextElement as array
		let nextElement = words[i + 1];
		
		if (!newObj[currElement]) {
			newObj[currElement] = [ nextElement ];
			//else currElement value is equal to next element then create an array of same elements  and send it as values to the respective key
		} else {
			newObj[currElement].push(nextElement);
		}
	}
	return newObj;
}

//helper function to generate random words
function generateRandomWord(random) {
	return random[Math.floor(Math.random() * random.length)];
}

//function to write a line that takes the object created above and returns a line
function writeLine(obj, n) {
	//create a line
	let newLine = '';
	//generatewordpairs object
	let wordPairs = generateWordPairs(obj);

	//get all the values through the wordpairs
	let values = Object.values(wordPairs);
	//console.log(values);

	//loop through the values and generate random words
	for (let i = 0; i < values.length; i++) {
		if (values.length < n) {
			break;
		}
		newLine += generateRandomWord(values) + ' ';
	}

	return newLine;
}

//function to create poem with specified number of lines

function generatePoem(corpus, numLines) {
	let n = Math.floor(Math.random() * 10);
	for (let i = 0; i < numLines; i++) {
		 writeLine(corpus, n);
		console.log(writeLine(corpus, n));
	}
}
