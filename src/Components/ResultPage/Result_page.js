import $ from 'jquery'
import collapse from "bootstrap/js/src/collapse";
import tooltip from "bootstrap/js/src/tooltip";
import DataTable from 'datatables.net';

export function changeBtnTxt () {
    $ ('#filterbar').collapse (true);
    count ++;
    if (count % 2 !== 0) {
        filterAngle.classList.add ("fa-angle-right");
        btnTxt.innerText = "show filters"
        filterBtn.style.backgroundColor = "#36a31b";
    } else {
        filterAngle.classList.remove ("fa-angle-right")
        btnTxt.innerText = "hide filters"
        filterBtn.style.backgroundColor = "#ff935d";
    }

}

export function chnageIcon () {
    count2 ++;
    if (count2 % 2 !== 0) {
        icon.innerText = "";
        icon.innerHTML = '<span class="far fa-times-circle" style="width:100%"></span>';
        icon.style.paddingTop = "5px";
        icon.style.paddingBottom = "5px";
        icon.style.fontSize = "1.8rem";


    } else {
        icon.innerText = "";
        icon.innerHTML = '<span class="navbar-toggler-icon"></span>';
        icon.style.paddingTop = "5px";
        icon.style.paddingBottom = "5px";
        icon.style.fontSize = "1.2rem";
    }
}

let filterBtn;
let btnTxt;
let filterAngle;
let count;
let count2;
let icon;

// For Filters
setTimeout(()=>{
    try{
        filterBtn = document.getElementById ('filter-btn');
        btnTxt = document.getElementById ('btn-txt');
        filterAngle = document.getElementById ('filter-angle');

        $ ('#filterbar').collapse (false);
        count = 0;
        count2 = 0;


// For Applying Filters
        $ ('#inner-box').collapse (false);
        $ ('#inner-box2').collapse (false);

// For changing NavBar-Toggler-Icon
        icon = document.getElementById ('icon');


// Showing tooltip for AVAILABLE COLORS
        $ (function () {
            $ ('[data-tooltip="tooltip"]').tooltip ()
        })

// For Range Sliders
        let inputLeft = document.getElementById ("input-left");
        let inputRight = document.getElementById ("input-right");

        let thumbLeft = document.querySelector (".slider > .thumb.left");
        let thumbRight = document.querySelector (".slider > .thumb.right");
        let range = document.querySelector (".slider > .range");

        let amountLeft = document.getElementById ('amount-left')
        let amountRight = document.getElementById ('amount-right')

        function setLeftValue () {
            let _this = inputLeft,
                min = parseInt (_this.min),
                max = parseInt (_this.max);

            _this.value = Math.min (parseInt (String(_this.value)), parseInt (String(inputRight.value)) - 1);

            let percent = ((_this.value - min) / (max - min)) * 100;

            thumbLeft.style.left = percent + "%";
            range.style.left = percent + "%";
            amountLeft.innerText =String(parseInt(String(percent * 100)));
        }

        setLeftValue ();

        function setRightValue () {
            let _this = inputRight,
                min = parseInt (_this.min),
                max = parseInt (_this.max);

            _this.value = Math.max (parseInt (String(_this.value)), parseInt (String(inputLeft.value)) + 1);

            let percent = ((_this.value - min) / (max - min)) * 100;

            amountRight.innerText = String(parseInt(String(percent * 100)));
            thumbRight.style.right = (100 - percent) + "%";
            range.style.right = (100 - percent) + "%";
        }

        setRightValue ();

        inputLeft.addEventListener ("input", setLeftValue);
        inputRight.addEventListener ("input", setRightValue);

        inputLeft.addEventListener ("mouseover", function () {
            thumbLeft.classList.add ("hover");
        });
        inputLeft.addEventListener ("mouseout", function () {
            thumbLeft.classList.remove ("hover");
        });
        inputLeft.addEventListener ("mousedown", function () {
            thumbLeft.classList.add ("active");
        });
        inputLeft.addEventListener ("mouseup", function () {
            thumbLeft.classList.remove ("active");
        });

        inputRight.addEventListener ("mouseover", function () {
            thumbRight.classList.add ("hover");
        });
        inputRight.addEventListener ("mouseout", function () {
            thumbRight.classList.remove ("hover");
        });
        inputRight.addEventListener ("mousedown", function () {
            thumbRight.classList.add ("active");
        });
        inputRight.addEventListener ("mouseup", function () {
            thumbRight.classList.remove ("active");
        });
    }catch (err){
        console.log(err)
    }
}, 2000)