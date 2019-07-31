let diceContainer = $('.dice-container');
let diceCount = 0;
let diceHolder = [];
let diceUni = ['', '\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];


// Button Clicks
$('#genB').click(function () {
    let d = new Dice(diceCount);
    diceHolder.push(d);
    diceCount++;
});

$('#rollB').click(function () {
    for (d of diceHolder) {
        d.Roll();
    }
});

$('#sumB').click(function () {
    let sum = diceHolder.reduce((acc, val) => {
        return acc + val.num;
    }, 0);
    alert(`The total sum is ${sum}`);
});

// Dice Object
class Dice {
    constructor(dCount) {
        this.id = dCount;
        this.num = Math.floor(Math.random() * 6) + 1;
        let dDiv = $(`<div class="diceDiv" id="d${this.id}">${diceUni[this.num]}</div>`);
        diceContainer.append(dDiv);
   
        // Single click to roll individual dice
        dDiv.click(function() { // Roll() undefined here
            this.num = Math.floor(Math.random() * 6) + 1;
            dDiv.text(diceUni[this.num]);

            // Update array value for Sum to work properly
            for (let di of diceHolder) {
                if ('d' + di.id == this.id) {
                    di.num = this.num;
                }
            }
        });

        // Double click to remove individual dice 
        dDiv.dblclick(function () {
            // update removal in array
            let count = 0; // number of index in array
            for (let di of diceHolder) {
                if ('d' + di.id == this.id) {
                    diceHolder.splice(count, 1);
                }
                count++;
            }
            // remove div from page
            dDiv.remove();
        });
    }

    // Set number value to dice 1-6
    Roll() {
        this.num = Math.floor(Math.random() * 6) + 1;
        $('#d' + this.id).text(diceUni[this.num]);
    }
}