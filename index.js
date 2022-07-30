//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
document.querySelector("button").addEventListener("click",reverseWords)

function reverseWords(str) {
    str = document.querySelector("input").value
    document.querySelector("h2").innerText = str.split('').reverse().join('').split(' ').reverse().join(' ')
    }