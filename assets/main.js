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


    // milestone 1
    cats.forEach((cat) => {
        // create a new-cat-card
        let {name, color} = cat; // destructuration

        $("#cat-container").append(`
            <div class="cat-card">
                <h2>${name}</h2>
                <i class="fas fa-cat fa-3x" style="color: ${color}"></i>
            </div>
        `);
    });

    // // PART 2
    // const femaleCats = [];
    // const maleCats = [];
    //
    // cats.forEach( (cat, i) => {
    //     // create a new-cat-card
    //     let thisCard = $(".container").clone(); // clone
    //
    //     let {gender, age} = cat; // destructuration
    //
    //     if (gender == "male") {
    //         // it's male
    //         maleCats.push(cat);
    //         $(thisCard).appendTo(".male-container");
    //     } else {
    //         // it's female
    //         femaleCats.push(cat);
    //         $(thisCard).appendTo(".female-container");
    //     }
    // });
    //
    //
    //
    // console.log(femaleCats);
    // console.log(maleCats);

});
