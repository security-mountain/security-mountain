function onload() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-300px";
  }
  prevScrollpos = currentScrollPos;
}


//Query selectors for modal buttons
var modalBg = document.querySelector('modal-bg'); // (Ed, 2018)
var modalClose = document.querySelector('close-btn');

//Adding event listeners for if buttons are clicked
modalClose.addEventListener('click', function () {
  modalBg.classList.remove('.bg-active');
});

function openModal() {
  let modal = document.getElementById("modal");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal() {
  let modal = document.getElementById("modal");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal1b() {
  let modal = document.getElementById("modal1b");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal1b() {
  let modal = document.getElementById("modal1b");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal1c() {
  let modal = document.getElementById("modal1c");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal1c() {
  let modal = document.getElementById("modal1c");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal1d() {
  let modal = document.getElementById("modal1d");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal1d() {
  let modal = document.getElementById("modal1d");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal1e() {
  let modal = document.getElementById("modal1e");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal1e() {
  let modal = document.getElementById("modal1e");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal1f() {
  let modal = document.getElementById("modal1f");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal1f() {
  let modal = document.getElementById("modal1f");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal1g() {
  let modal = document.getElementById("modal1g");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal1g() {
  let modal = document.getElementById("modal1g");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal1h() {
  let modal = document.getElementById("modal1h");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal1h() {
  let modal = document.getElementById("modal1h");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal1i() {
  let modal = document.getElementById("modal1i");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal1i() {
  let modal = document.getElementById("modal1i");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal1j() {
  let modal = document.getElementById("modal1j");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal1j() {
  let modal = document.getElementById("modal1j");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal1k() {
  let modal = document.getElementById("modal1k");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal1k() {
  let modal = document.getElementById("modal1k");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal2a() {
  let modal = document.getElementById("modal2a");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal2a() {
  let modal = document.getElementById("modal2a");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal2b() {
  let modal = document.getElementById("modal2b");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal2b() {
  let modal = document.getElementById("modal2b");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal2c() {
  let modal = document.getElementById("modal2c");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal2c() {
  let modal = document.getElementById("modal2c");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal2d() {
  let modal = document.getElementById("modal2d");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal2d() {
  let modal = document.getElementById("modal2d");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal2e() {
  let modal = document.getElementById("modal2e");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal2e() {
  let modal = document.getElementById("modal2e");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal2f() {
  let modal = document.getElementById("modal2f");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal2f() {
  let modal = document.getElementById("modal2f");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal2g() {
  let modal = document.getElementById("modal2g");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal2g() {
  let modal = document.getElementById("modal2g");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal2h() {
  let modal = document.getElementById("modal2h");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal2h() {
  let modal = document.getElementById("modal2h");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal2i() {
  let modal = document.getElementById("modal2i");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal2i() {
  let modal = document.getElementById("modal2i");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal2j() {
  let modal = document.getElementById("modal2j");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal2j() {
  let modal = document.getElementById("modal2j");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal2k() {
  let modal = document.getElementById("modal2k");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal2k() {
  let modal = document.getElementById("modal2k");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal3a() {
  let modal = document.getElementById("modal3a");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal3a() {
  let modal = document.getElementById("modal3a");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal3b() {
  let modal = document.getElementById("modal3b");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal3b() {
  let modal = document.getElementById("modal3b");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal3c() {
  let modal = document.getElementById("modal3c");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal3c() {
  let modal = document.getElementById("modal3c");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal3d() {
  let modal = document.getElementById("modal3d");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal3d() {
  let modal = document.getElementById("modal3d");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal3e() {
  let modal = document.getElementById("modal3e");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal3e() {
  let modal = document.getElementById("modal3e");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal3f() {
  let modal = document.getElementById("modal3f");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal3f() {
  let modal = document.getElementById("modal3f");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal3g() {
  let modal = document.getElementById("modal3g");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal3g() {
  let modal = document.getElementById("modal3g");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal3h() {
  let modal = document.getElementById("modal3h");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal3h() {
  let modal = document.getElementById("modal3h");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal3i() {
  let modal = document.getElementById("modal3i");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal3i() {
  let modal = document.getElementById("modal3i");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal3j() {
  let modal = document.getElementById("modal3j");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal3j() {
  let modal = document.getElementById("modal3j");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModal3k() {
  let modal = document.getElementById("modal3k");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}

function closeModal3k() {
  let modal = document.getElementById("modal3k");
  //if closeModal function is called, bg active class is removed which closes modal
  modal.classList.remove("bg-active");
}


function openModalWelcome() {
  let modal = document.getElementById("modalWelcome");
  //if openModal function is called, bg active class is added which opens modal
  modal.classList.add("bg-active");
}
