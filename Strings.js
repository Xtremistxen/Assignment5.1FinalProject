function concatenateStrings() // The user will be able to type in anything and it will put both strings together
{
    var string1 = document.getElementById("firstString").value;
    var string2 = document.getElementById("secondString").value;
    var str1 = string1 + string2;
    document.getElementById("updates").innerHTML = "Concatenated string = " + str1;
}

function concatenateLength() // The user will put in anything and get the length of the word
{
    var string3 = document.getElementById("thirdString").value;
    var string4 = document.getElementById("fourthString").value;
    var str2 = string3 + string4;
    var len = str2.length;
    document.getElementById("update1").innerHTML = "Length of concatenated string = " + len;
}

function substringStrings() // This will remove the first and third letter and replace with what is left
{
    var string5 = document.getElementById("fifthString").value;
    var string6 = document.getElementById("sixthString").value;
    var str3 = string5 + string6;
    var subS = str3.substring(1, 3);
    document.getElementById("update2").innerHTML = "Substring (1, 3) = " + subS;
}

function replaceVowels() // This will remove all vowels AIOU and replace them with 1's
{
    var string7 = document.getElementById("seventhString").value;
    var string8 = document.getElementById("eigthString").value;
    var str4 = string7 + string8;
    var lowerC = str4.toLowerCase();
    lowerC = lowerC.replace(/[aiou]/g, "1"); // Replacing vowels with '1'
    document.getElementById("update3").innerHTML = "Replaced vowels with 1: " + lowerC;
}

function checkPalindrome() //  The user can check to see what is a palindrome dog is not, dad is 
{
    var string9 = document.getElementById("ninthString").value;
    var splitStr = string9.split("");
    var reverseStr = splitStr.reverse();
    var joinStr = reverseStr.join("");
    if (string9 === joinStr) {
        document.getElementById("update4").innerHTML = "Palindrome";
    } else {
        document.getElementById("update4").innerHTML = "Not a palindrome";
    }
}
