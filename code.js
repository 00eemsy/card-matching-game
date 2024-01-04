var prev = {class: "", id: ""};
var curr = {class: "", id: ""};
var round = 1;

var score = 0;

function buttonClicked(event) {

    let suite = event.target.className;

    // "flip over" card

    if (suite === "club") {
        event.target.querySelector("img").src = "https://i.pinimg.com/736x/2e/c2/7e/2ec27e16f730308d3fdd58a824341afb.jpg";
    } else if (suite === "spade") {
        event.target.querySelector("img").src = "https://i.pinimg.com/736x/88/c8/ac/88c8acf22b16900e5202a29250841e03.jpg";
    } else if (suite === "diamond") {
        event.target.querySelector("img").src = "https://i.pinimg.com/736x/9b/6d/c0/9b6dc0fa6f198d0e3ec3e61abed20ea4.jpg";
    }

    if (round === 1) {
        prev.class = `${suite}`;
        prev.id = `${event.target.id}`;

        document.getElementById("prevID").innerHTML = prev.id;

        round ++; 
    } else { // round 2!
        curr.class = `${suite}`;
        curr.id = `${event.target.id}`;

        document.getElementById("currID").innerHTML = curr.id;

        if ((prev.class === curr.class) && (prev.id != curr.id)) {
            score ++;
            document.getElementById("myScore").innerHTML = `${score}`;

            prev = {class: "", id: ""};
            curr = {class: "", id: ""};
        } else {
            prev.class = `${curr.class}`;
            prev.id = `${curr.id}`;
        }

        round = 1;
    }

}


const but = document.querySelector('button');
but.addEventListener('click', buttonClicked);

