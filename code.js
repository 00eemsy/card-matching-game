var prev = {class: "", src: ""};
var curr = {class: ""};
var round = 1;

var score = 0;

function imgClicked(event) {

    let suite = event.target.className;

    if (suite === "headphones") {
        event.target.src = "https://i.pinimg.com/564x/41/bb/8a/41bb8ac6926de03470ac8ca5a89884e8.jpg";
    } else if (suite === "tulip") {
        event.target.src = "https://i.pinimg.com/564x/d8/49/68/d8496885cde471470faa0861bd5d2b28.jpg";
    } else if (suite === "baobing") {
        event.target.src = "https://i.pinimg.com/564x/3e/7b/5c/3e7b5cf42914a09ae14478327eca5272.jpg";
    }

    if (round === 1) {
        prev.class = `${suite}`;
        prev.src = event.target;
        round ++; 
    } else { // round 2!
        curr.class = `${suite}`;

        // FIXME: to del later
        document.getElementById("pc").innerHTML = `${prev.class}`;
        document.getElementById("cc").innerHTML = `${curr.class}`;

        if (prev.class === curr.class) {
            score ++;
            document.getElementById("myScore").innerHTML = `${score}`;

            event.target.setAttribute("onclick", null);
            prev.src.setAttribute("onclick", null);

            prev.class = "";
            prev.src = undefined;
            curr.class = "";
        } else {
            setTimeout(function() {
                event.target.src = "https://i.pinimg.com/564x/ed/96/04/ed96049b1ce8286865d69cf59c321488.jpg";
                prev.src.src = "https://i.pinimg.com/564x/ed/96/04/ed96049b1ce8286865d69cf59c321488.jpg";
                }, 2000); // 2000 milliseconds = 2 seconds
        }
        
        round = 1;
        
    }

}

function shuffleDeck() {
    let suites = ['headphones', 'headphones', 'tulip', 'tulip', 'baobing', 'baobing'];

    for (let i of document.querySelectorAll('img')) {
        let suite_rand = Math.floor(Math.random() * suites.length);

        i.setAttribute("class", `${suites[suite_rand]}`);
        suites.splice(suite_rand, 1);
    }
}

addEventListener('load', shuffleDeck);

const i = document.querySelector('img');
i.addEventListener('click', imgClicked);

