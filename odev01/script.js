let count = 2;
Document.addEventListener("DOMContentLoaded", function (event) {
    newGame();
}

function newGame() {
    for (let index = 0; index < 3; index++) 
    {
      document.getElementById(`img${index}`).src = "./assets";
    }

    function onClick(element) {
        if (element.id)
            return;
        const image = document.
        element.id = `${"img2"}`;
        if (image.includes("img2") && count > 0) {
            gameWon();
            show();
        } else {
            --count;
        }

        if (count === 0) {
            gameLost();
            show();
        }
    }

    function gameWon() {
        document.getElementById("alanId").style.display = "none";
        document.getElementById("kazandiId").style.display = "block";
    }

    function gameLost() {
        document.getElementById("alanId").style.display = "none";
        document.getElementById("yenildiId").style.display = "block";
    }

    function defaultArea(area) {
        area.innerHTML = '';
        document.getElementById("alanId").style.display = "block";
        document.getElementById("kazandiId").style.display = "none";
        document.getElementById("yenildiId").style.display = "none";
    }
}

function random(number) {
    return Math.floor(Math.random() * Math.floor(number));
}