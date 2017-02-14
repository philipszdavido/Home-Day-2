'use strict';
function words(string) {//defined my words function here.
	var wordCounts = {};
	var allWords = string.split(/\s+/);
	for (var i = 0; i < allWords.length; i++) {
		wordCounts[allWords[i]] = (!wordCounts.hasOwnProperty(allWords[i]) ? 1 : wordCounts[allWords[i]] + 1);
	}
	return wordCounts;
}
