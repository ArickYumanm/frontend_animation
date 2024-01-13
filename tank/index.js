let A;
let B;
let C;
let D;
let E;
let F;
let AB;
let BC;

// A = 0;
  // B = 0;
  // C = 0;
  // E = 0;
  // F = 0;

let fire_bullet = 1;
function bullet_f() {
  if (fire_bullet == 1) {
    document.getElementById("bf_00").style.transform = "translateX(80rem)";
    document.getElementById("bf_00").style.transition =
      "transform 1700ms ease-in-out";
    fire_bullet = 0;
  } else {
    document.getElementById("bf_00").style.transform = "translateX(0rem)";
    document.getElementById("bf_00").style.transition =
      "transform 1ms ease-in-out";
    fire_bullet = 1;
  }
}

function right() {
  
  D = 1;
  if (AB == 1) {
    document.getElementById("body_00").style.transform =
      "translate(0rem, -10rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    B = 1;
    D = 0;
    AB = 0;
    
  }
  else if (B == 1) {
    document.getElementById("body_00").style.transform =
      "translate(50rem, -10rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    BC = 1;
    B = 0;
    D = 0;
    
  }
  else if (F == 1) {
    document.getElementById("body_00").style.transform =
      "translate(0rem, 0rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    F = 0;
    D = 0;
    
  }
  else if (BC == 1) {
    document.getElementById("body_00").style.transform =
      "translate(50rem, -10rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    }
  else {
    document.getElementById("body_00").style.transform = "translateX(50rem)";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    
  }
}

function left() {
  F = 1;
  if (AB == 1) {
    document.getElementById("body_00").style.transform =
      "translate(-16rem, -10rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    AB = 1;
    B = 0;
    F = 0;
    console.log("A = " + A);
    console.log("B = " + B);
    console.log("C = " + C);
    console.log("D = " + D);
    console.log("E = " + E);
    console.log("F = " + F);
    console.log("AB  = " + AB);
    console.log("BC  = " + BC);
  }
  else if (BC == 1) {
    document.getElementById("body_00").style.transform =
      "translate(0rem, -10rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    B = 1;
    F = 0;
    BC = 0;
    
  }
  else if (D == 1) {
    document.getElementById("body_00").style.transform =
      "translate(0rem, 0rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    D = 0;
    F = 0;
    
  }
  else if (B == 1) {
    document.getElementById("body_00").style.transform =
      "translate(-16rem, -10rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    F = 0;
    B = 0;
    AB = 1;
    
    }
  else {
    document.getElementById("body_00").style.transform = "translateX(-16rem)";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    
  }
}

function up() {
  B = 1;
  if (F == 1) {
    document.getElementById("body_00").style.transform =
      "translate(-16rem,-10rem)";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    AB = 1;
    F = 0;
    B = 0;
    
    
  }
  else if (D == 1) {
    document.getElementById("body_00").style.transform =
      "translate(50rem, -10rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    BC = 1;
    D = 0;
    B = 0;
    
  }
  else if (B == 2) {
    document.getElementById("body_00").style.transform =
      "translate(50rem, -10rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    
  }
  else if (AB == 1)
  {
    document.getElementById("body_00").style.transform =
      "translate(-16rem, -10rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    
  }
  else if (BC == 1)
  {
    document.getElementById("body_00").style.transform =
      "translate(50rem, -10rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    
    }
  else {
    document.getElementById("body_00").style.transform = "translate(0rem,-10rem)";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    
  }
}
function down() {

  if (AB == 1) {
    document.getElementById("body_00").style.transform =
      "translate(-16rem, 0rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    AB = 0;
    F = 1;
    
  } else if (BC == 1) {
    document.getElementById("body_00").style.transform =
      "translate(50rem, 0rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    D = 1;
    BC = 0;
    
  }
  else if (B == 1)
  {
    document.getElementById("body_00").style.transform =
      "translate(0rem, 0rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    B = 0;
    
  }
  else if (F == 1) {
    document.getElementById("body_00").style.transform =
      "translate(-16rem, 0rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    
  }
  else if (D == 1) {
    document.getElementById("body_00").style.transform =
      "translate(50rem, 0rem )";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
      
  }
  else {
    document.getElementById("body_00").style.transform = "translate(0rem,0rem)";
    document.getElementById("body_00").style.transition =
      "transform 1000ms ease-in-out";
    B = 0;
    
  }
}

function target_down() {
  document.getElementById("weapon_00").style.transform = "rotate(6deg)";
  document.getElementById("weapon_00").style.transition =
    "transform 1000ms ease-in-out";
}
function target_up() {
  document.getElementById("weapon_00").style.transform = "rotate(-6deg)";
  document.getElementById("weapon_00").style.transition =
    "transform 1000ms ease-in-out";
}

