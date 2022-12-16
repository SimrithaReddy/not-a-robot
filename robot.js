let grid = document.querySelector(".grid-container");
let pics = ["./images/img1.jpg", "./images/logo.png", "./images/img3.jpg", "./images/img4.jpg", "./images/img5.jpg"];
let robo = document.querySelector(".robo")
robo.addEventListener("click", showImage)
let btn1 = document.querySelector(".btn1")
let res = document.querySelector(".result");
let first = document.querySelector("#first");
let second = document.querySelector("#second");

robo.addEventListener('click',()=>{
    first.style = "visibility:hidden"
    second.style = "visibility:visible"
})

//------------>addEventListener CallBack Function
function showImage() {
    robo.style = "visibility:hidden"
    let arr = [0, 1, 2, 3, 4];
    let arr1 = getRandomNumbers(arr)
    //----------->assigning images 5 randomly 
    for (let i = 0; i < arr1.length; i++) {
        document.getElementById("img" + (i + 1)).setAttribute("src", pics[arr1[i]]);
        document.getElementById("img" + (i + 1)).setAttribute("data-ns-test", arr1[i] + 1);
    }
    //------------->assigning 6th image and styling of atrributes
    let x = Math.floor((Math.random() * 4) + 1);
    let six = document.getElementById("img6")
    let testAttribute = document.createAttribute("data-ns-test");
    testAttribute.value = x + 1;
    six.setAttributeNode(testAttribute)
    six.setAttribute("src", pics[x])
    six.style = "visibility:visible"
    grid.style = "visibility:visible"
}

function reset() {
    window.location.reload();
}

const wanted = Array.from(document.querySelectorAll("img"))
let clickedArr = [];

wanted.forEach((tag) => {
    tag.addEventListener('click', function (e) {
        let n = e.target.dataset.nsTest;
        clickedArr.push(n)
        if (clickedArr.length == 1) {
            e.target.style.border = "2px solid gray";
            e.target.style["pointer-events"] = "none";
            btn1.innerHTML = `<button id="reset" onclick="reset()">Reset</button>`
        }
        else if (clickedArr.length == 2) {
            e.target.style.border = "2px solid gray";
            e.target.style["pointer-events"] = "none";
            btn1.innerHTML = `<button id="reset" onclick="reset()">Reset</button><button id="verify" onclick="verify()">Verify</button>`
        } else if (res.innerHTML = "") {
            alert(`Select two Images only`)
        }
    })
})


function verify() {
    btn1.innerHTML = "";
    if (clickedArr[0] == clickedArr[1]) {
        res.innerText = "You are a human.Congratulations!"
    } else {
        res.innerText = "We can't verify you as a human."
    }
    btn1.innerHTML = `<button id="reset" onclick="reset()">Reset</button>`
}

function getRandomNumbers(arr) {
    // For getting a random shuffle array--------->
    for (let i = 4; i >= 0; i--) {
        let randomPos = Math.floor(Math.random() * (i + 1));
        let tmp = arr[i]
        arr[i] = arr[randomPos]
        arr[randomPos] = tmp;
    }
    return arr;
}



