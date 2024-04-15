import { clickSquareDivId } from "./mainevent.js";

let clickhappened = false;
console.log(clickhappened);
let blackdot = document.createElement("div");
blackdot.id = "beAblackDot";
let dot1;
let dot2;

function whitepawnActivate() {
    if (clickhappened == false) {
        if (clickSquareDivId[0] == "2") {
            dot1 = document.getElementById((Number(clickSquareDivId[0]) + 1) + clickSquareDivId[1]);
            dot2 = document.getElementById((Number(clickSquareDivId[0]) + 2) + clickSquareDivId[1]);
            dot1.append(blackdot.cloneNode(true)); // Clone blackdot before appending
            dot2.append(blackdot.cloneNode(true)); // Clone blackdot before appending
            clickhappened = true;
            console.log(clickhappened);
        } else {
            console.log(clickSquareDivId[1] + (Number(clickSquareDivId[0]) + 1));
        }
    } else if (clickhappened == true) {
        let identBlackDot1 = dot1.querySelector('#beAblackDot'); // Find blackdot in d1
            dot1.removeChild(identBlackDot1); // Remove blackdot from d1 if found
        
        let identBlackDot2 = dot2.querySelector('#beAblackDot'); // Find blackdot in d2
            dot2.removeChild(identBlackDot2); // Remove blackdot from d2 if found


            //alternative code...

            // let identBlackDot = document.querySelectorAll('#beAblackDot');
            // identBlackDot.forEach((blackDot) => {
            //     if (dot1.contains(blackDot)) {
            //         dot1.removeChild(blackDot);
            //     }
            //     if (dot2.contains(blackDot)) {
            //         dot2.removeChild(blackDot);
            //     }
            // });

        clickhappened=false;
    }
}

export { whitepawnActivate };
 