// reverse each word
function reverse_word(word) {
    if (word === "") {
        return "";
    } else {
        return reverse_word(word.substr(1)) + word[0];
    }
}

// reverse a string
function reverse_string(string) {
    let result = "", word = "";
    let index = 0;

    // iterate every characters of the string
    while(string[index]) {
        // if current char is a white space,
        // add the reverse of last word and the whitespace to the result
        if (string[index] === ' ') {
            result += reverse_word(word) + ' '
            word = "";
        } else { // if current char is not a white space, add it to current word
            word += string[index];
        }

        index++;
    }

    result += reverse_word(word)

    return result;
}


function main() {
    console.log(reverse_string(""));
    console.log(reverse_string("cat"));
    console.log(reverse_string("cat and dog"));
    console.log(reverse_string("Cat and dog"));
    console.log(reverse_string("  cat   and   dog  "));
}

main()