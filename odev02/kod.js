
document.addEventListener("DOMContentLoaded", function (event) {
    playGame();
});

function playGame() {
    let heartCount = 2;
    let cards = document.getElementById("cards");
    clearArea(cards);

    const shuffledImages = shuffleArray(["cat.png", "dog1.png", "dog2.png"]);
    for (let i = 0; i < shuffledImages.length; i++) {
        const imgElement = document.createElement("img");
        imgElement.id = `img${i}`;
        imgElement.className = "kart";
        imgElement.onclick = () => onClick(imgElement, i);
        cards.append(imgElement);
    }

    function onClick(element, i) {
        if (element.src)
            return;

        const image = shuffledImages[i];
        element.src = `./assets/${image}`;
        if (image.includes("cat") && heartCount > 0) {
            won();
            showAll();
        } else {
            --heartCount;
        }

        if (heartCount === 0) {
            lost();
            showAll();
        }
    }

    function showAll() {
        let cardImages = document.getElementsByClassName("kart");
        for (let i = 0; i < shuffledImages.length; i++) {
            cardImages[i].src = `./assets/${shuffledImages[i]}`;
        }
    }

    function won() {
        document.getElementById("alanId").style.display = "none";
        document.getElementById("kazandiId").style.display = "block";
    }

    function lost() {
        document.getElementById("alanId").style.display = "none";
        document.getElementById("yenildiId").style.display = "block";
    }

    function clearArea(area) {
        area.innerHTML = '';
        document.getElementById("alanId").style.display = "block";
        document.getElementById("kazandiId").style.display = "none";
        document.getElementById("yenildiId").style.display = "none";
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}