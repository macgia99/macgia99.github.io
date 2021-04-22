$(function () {
  var typed = new Typed("#typed", {
    strings: [
      "你好!",
      "Hello!",
      "Saluton!",
      "Hallo!",
      "Bonjour!",
      " Buongiorno!",
      "こんにちは!",
      " 안영하세요!",
      " Сайн уу!",
      "Olá!",
      "Привет!",
      "¡Hola!",
      "สวัสดีคะ!",
      "Swazdo-lah!",
      "Chào mừng!",
    ],
    typeSpeed: 70,
    shuffle: true,
    showCursor: false,
    loop: true,
    backDelay: 1500,
  });
  var tHover = document.querySelector(".titleContainer span:hover");
  console.log(tHover);
  var colRGB = anime
    .timeline({
      Delay: 1000,
      duration: 2000,
      easing: "linear",
      direction: "alternate",
      loop: true,
    })
    .add({ targets: ".colRGB span", color: "rgb(255,255,255)" }, 0)
    .add(
      {
        targets: ".titleContainer span.active",
        color: "rgb(255,255,255)",
      },
      0
    )
    .add(
      {
        targets: tHover,
        color: "rgb(255,255,255)",
      },
      0
    );
});
