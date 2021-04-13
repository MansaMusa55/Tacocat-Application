function reverseString(){
    // Get the user's word
    let userWord = document.getElementById("tacoCat").value;
    let cleanedWord = userWord.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    //Do something here with it
    let start = cleanedWord.length - 1;
    let reverseWord = "";
    //frank.length - 1
    //F, R, A, N, K
    //{0, 1, 2, 3, 4}
    //For loop
    for(let i = start; i >= 0; i--){
        reverseWord += cleanedWord[i];
    }
    // output for reversered string
    let output = document.getElementById("tacoOutput");
    output.innerHTML = reverseWord;
    //Loop 1 - i = 4: userWord[4] = k 
    //Loop 2 - i = 3: userWord[3] = n
    //Loop 3 - i = 2: userWord[2] = a
    //Loop 4 - i = 1: userWord[1] = r
    //Loop 5 - i = 0: userWord[0] = F

    //palendrome
    let trueFalseOutput = document.getElementById("palOutput");
    if (cleanedWord === reverseWord) {
        trueFalseOutput.innerText = "Yes, this is a Palindrome";
    } else {
        trueFalseOutput.innerText = "No, this is not a Palindrome";
    }
}
 

