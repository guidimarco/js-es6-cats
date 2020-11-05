$( document ).ready(function() {
    // VAR ASSIGNMENT
    const cats = [ // cats {name, age, color, gender}
        {
            name: "Aston",
            age: 0.8,
            color: "green",
            gender: "male"
        },
        {
            name: "Shelly",
            age: 0.7,
            color: "purple",
            gender: "female"
        },
        {
            name: "Willoby",
            age: 1.3,
            color: "red",
            gender: "male"
        },
        {
            name: "Poppy",
            age: 0.2,
            color: "blue",
            gender: "female"
        }
    ];
    console.log(cats);

    // FUNCTION
    const printCat = (cat, container) => { // create a new-cat-card
        // LOCAL VAR
        let {name, color} = cat; // destructuration

        container.append(`
            <div class="cat-card">
                <h2>${name}</h2>
                <i class="fas fa-cat fa-3x" style="color: ${color}"></i>
            </div>
        `);
    };
    const printRibbon = (cat, container) => { // create a new-cat-card
        // LOCAL VAR
        let {color, opacity} = cat.ribbon; // destructuration

        container.append(`
            <div class="ribbon">
                <i class="fas fa-ribbon fa-2x" style="color: ${color}; opacity: ${opacity}"></i>
            </div>
        `);
    };

    // ALGORITHM
    // milestone 1
    cats.forEach((cat) => {
        let container = $("#cat-container");
        printCat(cat, container);
    });

    // milestone 2
    // filter: gender == female
    let femaleCats = cats.filter((cat) => {
        let {gender} = cat;
        return gender == "female";
    });
    console.log(femaleCats);

    // print-out: card and ribbon
    femaleCats.forEach((cat, i) => {
        let container = $("#female-container");
        printCat(cat, container);

        // CREATE RIBBON - LOCAL VAR
        let color = "pink"; // set the female-color
        let opacity = cat.age; // set the opacity
        // console.log(color);
        // console.log(opacity);

        cat.ribbon = { // add new property
            color,
            opacity
        };
        // console.log(cat.ribbon);

        let ribbonContainer = $("#female-container .cat-card:nth-of-type(" + (i+1) + ")");
        // console.log(ribbonContainer);
        printRibbon(cat, ribbonContainer);
    });

    // filter: gender == male
    let maleCats = cats.filter((cat) => {
        let {gender} = cat;
        return gender == "male";
    });
    console.log(maleCats);

    // print-out: card and ribbon
    maleCats.forEach((cat, i) => {
        let container = $("#male-container");
        printCat(cat, container);

        // CREATE RIBBON - LOCAL VAR
        let color = "blue"; // set the female-color
        let opacity = cat.age; // set the opacity
        // console.log(color);
        // console.log(opacity);

        cat.ribbon = { // add new property
            color,
            opacity
        };
        // console.log(cat.ribbon);

        let ribbonContainer = $("#male-container .cat-card:nth-of-type(" + (i+1) + ")");
        // console.log(ribbonContainer);
        printRibbon(cat, ribbonContainer);
    });

    // milestone 3
    const copyOfCats = [];
    // console.log(copyOfCats);

    femaleCats.forEach((cat) => {
        let {name, color, ribbon} = cat;
        // console.log(name);
        // console.log(color);
        // console.log(ribbon);

        let cloneCat = {
            name,
            color,
            ribbon
        };
        // console.log(cloneCat);

        copyOfCats.push(cloneCat); // push
    });

    maleCats.forEach((cat) => {
        let {name, color, ribbon} = cat;
        // console.log(name);
        // console.log(color);
        // console.log(ribbon);

        let cloneCat = {
            name,
            color,
            ribbon
        };
        // console.log(cloneCat);

        copyOfCats.push(cloneCat); // push
    });
    console.log(copyOfCats);

});
