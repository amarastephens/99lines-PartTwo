let button = document.createElement('button');
button.innerHTML = "Sing!";
document.body.appendChild(button);



button.addEventListener("click", function() {

    let div1 = document.createElement('div');
    let heading1 = document.createElement('h3');
    let name1 = heading1.textContent = "Ryan";
    div1.className = "friend";
    div1.appendChild(heading1);
    document.body.appendChild(div1)

let div2 = document.createElement('div');
    let heading2 = document.createElement('h3');
    let name2 = heading2.textContent = "Autumn";
    div2.className = "friend";
    div2.appendChild(heading2);
    document.body.appendChild(div2)

let div3 = document.createElement('div');
    let heading3 = document.createElement('h3');
    let name3 = heading3.textContent = "Ella";
    div3.className = "friend";
    div3.appendChild(heading3);
    document.body.appendChild(div3)

let div4 = document.createElement('div');
    let heading4 = document.createElement('h3');
    let name4 = heading4.textContent = "Zac";
    div4.className = "friend";
    div4.appendChild(heading4);
    document.body.appendChild(div4)

let div5 = document.createElement('div');
    let heading5 = document.createElement('h3');
    div5.className = "friend";
    div5.appendChild(heading5);
    document.body.appendChild(div5)
let name5 = heading5.textContent = "Meghan";


    let friends =[name1, name2, name3, name4, name5];

    for(let i = 0; i<friends.length; i++) {
    for (let j = 99; j > 0; j--) {
        if (j > 2) {
            let paragraph = document.createElement('p'); 
            document.querySelector(".friend").appendChild(paragraph); 
            paragraph.textContent = j + " lines of code in the file, " + j + " lines of code, " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file."
        
        } else if (j == 2) {
            let paragraph = document.createElement('p');
            document.querySelector(".friend").appendChild(paragraph); 
            paragraph.textContent = j + " lines of code in the file, " + j + " lines of code, " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file."
        
        } else {
            let paragraph = document.createElement('p');
            document.querySelector(".friend").appendChild(paragraph); 
            paragraph.textContent = j + " line of code in the file, " + j + " line of code, " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file."
        }

    }
}

})

