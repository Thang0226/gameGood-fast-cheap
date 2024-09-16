const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");

function change_slider1() {
  if (slider1.value == 1) {
    slider1.value = 2;
  } else if (slider1.value == 2) {
    slider1.value = 1;
  }

  if (slider1.value == 2 && slider2.value == 2 && slider3.value == 2) {
    if (Math.floor(Math.random() * 2)) {
      slider2.value = 1;
    } else {
      slider3.value = 1;
    }
  }
}

function change_slider2() {
  if (slider2.value == 1) {
    slider2.value = 2;
  } else if (slider2.value == 2) {
    slider2.value = 1;
  }

  if (slider1.value == 2 && slider2.value == 2 && slider3.value == 2) {
    if (Math.floor(Math.random() * 2)) {
      slider1.value = 1;
    } else {
      slider3.value = 1;
    }
  }
}

function change_slider3() {
  if (slider3.value == 1) {
    slider3.value = 2;
  } else if (slider3.value == 2) {
    slider3.value = 1;
  }

  if (slider1.value == 2 && slider2.value == 2 && slider3.value == 2) {
    if (Math.floor(Math.random() * 2)) {
      slider1.value = 1;
    } else {
      slider2.value = 1;
    }
  }
}
