document.addEventListener("DOMContentLoaded", function() {
    // Get the element containing the sentiment text
    var sentimentText = document.getElementById("sentimentText");
    
    // Initial text
    var initialText = "{{ sentiment }}";
    sentimentText.textContent = initialText;

    // Start animation
    animateText(initialText, "Positive", 0);
});

function animateText(initialText, finalText, index) {
    // Base case: If all characters are replaced, stop animation
    if (index >= finalText.length) return;

    // Delay between character replacements
    var delay = 100;

    // Get the element containing the sentiment text
    var sentimentText = document.getElementById("sentimentText");

    // Replace the character at the current index with the corresponding character from finalText
    var currentText = initialText.slice(0, index) + finalText.charAt(index);
    sentimentText.textContent = currentText;

    // Recursive call to continue animation
    setTimeout(function() {
        animateText(initialText, finalText, index + 1);
    }, delay);
}
