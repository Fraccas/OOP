

//#region Button Clicks
$('#rectB').click(function () {
    let rW = $('#rectWidth').val();
    let rH = $('#rectHeight').val();
    
    if (rW && rH) {let nRect = new Rectangle(rW, rH);} 
    else NoValue();
});

$('#sqB').click(function() {
    let sL = $('#sqLength').val();
    if (sL) {let nSquare = new Square(sL);}
    else NoValue();
});

$('#cirB').click(function() {
    let cR = $('#cirRadius').val();
    if (cR) {let nCir = new Circle(cR);}
    else NoValue();
});

$('#triB').click(function() {
    let tH = $('#triHeight').val();
    if (tH) {let nTri = new Triangle(tH);}
    else NoValue();
});

// User entered no value
function NoValue() {
    alert('Please enter the required value(s)!');
}
//#endregion 

//#region Parent Class
class Shape {
    constructor(name, width, height, rad, area, perimeter) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.radius = rad;
        this.area = area;
        this.perimeter = perimeter;
    }

    Draw (shape) {
        // set location random
        let x = Math.floor(Math.random() * 500);
        if (x + this.width > 600) x -= this.width;
        if (x < 0) x = 0;

        let y = Math.floor(Math.random() * 600);
        if (y + this.height > 600) y -= this.height;
        if (y < 0) y = 0;

        shape.css('margin-left', x + 'px');
        shape.css('margin-top', y + 'px');
        $('#draw-box').append(shape);

        var self = this;
        shape.click(function () {
            self.Describe();
        });
    }

    Describe() {
        // Add text to stats side bar
        $('#sName').text(`Shape Name: ${this.name}`);
        $('#sWidth').text(`Width: ${this.width}`);
        $('#sHeight').text(`Height: ${this.height}`);
        $('#sRadius').text(`Radius: ${this.radius}`);
        // round to two decs
        $('#sArea').text(`Area: ${Math.round(this.area*100) / 100}`);
        $('#sPerimeter').text(`Perimeter: ${Math.round(this.perimeter * 100) / 100}`);
    }
}
//#endregion

//#region Child Classes
class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle", width, height, 0, 0, 0);
        this.Setup();
    }

    Setup() {
        let nRect = $('<div class="shape rectangle"></div>')
        nRect.css('height', this.height);
        nRect.css('width', this.width);

        // calculate stats for rect
        this.area = this.width * this.height;
        this.perimeter = 2 * (this.width + this.height);

        this.Draw(nRect);
    }
}

class Square extends Shape {
    constructor(sLen) {
        super("Square", sLen, sLen, 0, 0, 0);
        this.sideLength = sLen;
        this.Setup();
    }

    Setup() {
        let nSq = $('<div class="shape square"></div>')
        nSq.css('height', this.sideLength);
        nSq.css('width', this.sideLength);

        // calculate stats for square
        this.area = this.sideLength^2;
        this.perimeter = 4 * this.sideLength

        this.Draw(nSq);
    }
}

class Circle extends Shape {
    constructor(rad) {
        super("Circle", 0, 0, rad, 0, 0);
        this.height = this.radius*2;
        this.width = this.radius*2;
        this.Setup(); 
    }

    Setup() {
        let nCir = $('<div class="shape circle"></div>')
        nCir.css('height', this.height);
        nCir.css('width', this.width);

        // calculate stats for circle
        this.area = Math.PI * (this.radius^2);
        this.perimeter = 2 * Math.PI * this.radius;

        this.Draw(nCir);
    }
}

class Triangle extends Shape {
    // right triangle, height/width/base equal
    constructor(height) {
        super("Triangle", height, height, 0, 0, 0);
        this.base = height; 
        this.Setup();
    }

    Setup() {
        let nTri = $('<div class="shape triangle"></div>')
        nTri.css('border-bottom', this.height + 'px solid yellow');
        nTri.css('border-right', this.width + 'px solid transparent');

        // calculate stats for triangle
        this.area = 0.5 * this.base * this.height;
        this.perimeter = 2 * this.height + (Math.sqrt(2)) * this.height;

        this.Draw(nTri);
    }
}
//#endregion