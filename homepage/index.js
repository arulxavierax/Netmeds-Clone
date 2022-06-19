//---- navbar js starts  ---//



//--- navbar js end  ---//

//--- trending js starts  ---//
let span2 = document.querySelectorAll("#trend > span");
let div2 = document.querySelectorAll("#trend > section > div");
let len2 = 0;
span2[1].onclick = () => {
  len2++;
  for (let i of div2) {
    if (len2 == 0) {
      i.style.left = "0px";
    }
    if (len2 == 1) {
      i.style.left = "-740px";
    }
    if (len2 == 2) {
      i.style.left = "-1480px";
    }
    if (len2 == 3) {
      i.style.left = "-2220px";
    }
    if (len2 == 4) {
      i.style.left = "-2960px";
    }
    if (len2 > 4) {
      len2 == 4;
    }
  }
};
span2[0].onclick = () => {
  len2--;
  for (let i of div2) {
    if (len2 == 0) {
      i.style.left = "0px";
    }
    if (len2 == 1) {
      i.style.left = "-740px";
    }
    if (len2 == 2) {
      i.style.left = "-1480px";
    }
    if (len2 == 3) {
      i.style.left = "-2220px";
    }
    if (len2 < 0) {
      len2 == 0;
    }
  }
};

//--- trending js starts  ---//


