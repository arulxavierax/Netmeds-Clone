//---- navbar js starts  ---//

function navbar() {
  return `
    <!--Nav Section Starts -->
    <nav class="nav">
      <div class="nav1 center">
        <img
          src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg"
          alt=""
          onclick="window.location.href='index.html'"
        />
      </div>
      <div class="nav2 flex">
        <select id="">
          <option value="">Deliver to <strong>110008</strong></option>
          s
          <option value="">Pune</option>
          <option value="">Mumbai</option>
          <option value="">Delhi</option>
          <option value="">Banglore</option>
        </select>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search for medicine & wellness products..."
        />
      </div>
      <div class="flex nav3">
        <p><i class="fa-solid fa-file-arrow-up"></i>Upload</p>
        <p onclick="window.location.href='cart.html'">
          <i class="fa fa-cart-plus"></i> Cart
        </p>
        <p>
          <i class="fa fa-user-circle"></i>
          <span onclick="window.location.href='../sign_Up/signup.html'">Sign In</span> /
          <span onclick="window.location.href='signup.html'"> Sign up</span>
        </p>
      </div>
    </nav>
    <nav>
      <!-- 2nd nav section start-->
      <section class="flex nav-section-2">
        <div onclick="window.location.href='Medicine.html'">
          <img
            src="https://www.netmeds.com/assets/version1653998784/gloryweb/images/icons/medicine.svg"
            alt=""
          />
          Medicine
        </div>
        <div onclick="window.location.href='well.html'">
          <img
            src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"
            alt=""
          />
          Wellness
        </div>
        <div onclick="window.location.href='labtest.html'">
          <img
            src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg"
            alt=""
          />
          Lab Tests
        </div>
        <div onclick="window.location.href= '../products/personalCare.html'">
          <img
            src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg"
            alt=""
          />
          Beauty
        </div>
        <div>
          <img
            src="https://www.netmeds.com/assets/version1653998784/gloryweb/images/icons/health-library.svg"
            alt=""
          />
          Health Corner
        </div>
      </section>
      <!-- 2nd nav section end -->
    </nav>
    <!-- nav section end -->
    `;
}

export default navbar;

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


