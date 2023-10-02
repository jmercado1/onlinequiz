form.addEventListener('submit', function (e) {
    e.preventDefault();
    let score = 0;

    // Check answers and calculate the score
    const answers = ["andover", "wichita", "lincoln", "thebigshow", "35.5%"];
    for (let i = 1; i <= 5; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === answers[i - 1]) {
                score++;
            }
        }
    }

    // Display the score
    resultsDiv.innerHTML = `Your score: ${score} out of 5`;
});