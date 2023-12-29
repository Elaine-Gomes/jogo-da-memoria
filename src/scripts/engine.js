document.addEventListener('DOMContentLoaded', function() {
    const emojis = [
        "🎈", "🎈", "🎹", "🎹", "😂", "😂", "🎁", "🎁",
        "💋", "💋", "💻", "💻", "🐶", "🐶", "👨‍👩‍👧", "👨‍👩‍👧"

    ];

    let openCards = [];
    
    // embaralha os elementos do array de forma aleatória.
    let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

    for (let i = 0; i < emojis.length; i++) {
        let box = document.createElement('div');
        box.className = "item";
        box.innerHTML = shuffleEmojis[i];
        box.onclick = handleClick;
        document.querySelector('.game').appendChild(box);
    }

    function handleClick() {
        // Verifica se a carta já está virada
        if (this.classList.contains("boxOpen")) {
            return;
        }

        if (openCards.length < 2) {
            this.classList.add("boxOpen");
            openCards.push(this);
        }

        if (openCards.length === 2) {
            setTimeout(function() {
                checkMatch();
            }, 500);
        }
    }

    function checkMatch() {
        if (openCards[0] && openCards[1]) {
            if (openCards[0].innerHTML === openCards[1].innerHTML) {
                console.log(openCards);
                openCards[0].classList.add("boxMatch");
                openCards[1].classList.add("boxMatch");

            } else {
                openCards[0].classList.remove("boxOpen");
                openCards[1].classList.remove("boxOpen");

            }

            if (document.querySelectorAll(".boxMatch").length === emojis.length) {
                alert('Você venceu');

            }

            openCards = [];
        }
    }
});
