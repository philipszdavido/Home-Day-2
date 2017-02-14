var reverseString = function(string) {//defined my function here.
	//checks if the string parameter is a string object
	if(typeof(string)=="string"){
	if (string.length === 0) {//checks if the string parameter is zero.
		return null;
	}
	else {
		//where the actual reversing is done.
		var gnirts = string.split('').reverse().join('');
		//checks for palindromes .ie if the reversed string is the same as the the actual string eg anna gives anna
		if (string === gnirts) {
			return true;
		}
		else return gnirts;
	}
}else{
	return "Please ,input a string.";

}
}
