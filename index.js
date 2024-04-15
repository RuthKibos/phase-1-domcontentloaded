// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    // Code inside this function will run when the DOMContentLoaded event is triggered
    // Replace the text content of the paragraph with id="text" with "This is really cool!"
    const paragraph = document.querySelector("#text");
    if (paragraph) {
      paragraph.textContent = "This is really cool!";
    }
    });