'use strict';
function words(wordString) {
	var wordCounts = {};
	var allWords = wordString.split(/\s+/);
	for (var i = 0; i < allWords.length; i++) {
		wordCounts[allWords[i]] = (!wordCounts.hasOwnProperty(allWords[i]) ? 1 : wordCounts[allWords[i]] + 1);
	}
	return wordCounts;
}
