const div = dom.find("#test>.red")[0];
const display = dom.find("#display")[0];
const btn = dom.find("#btn")[0];
const styleBtn = dom.find("#styleBtn")[0];
const btns = dom.find("#btns")[0];
const log = dom.find("#log")[0];
const red = dom.find(".red");

//window.dom.className
let { className } = dom;
dom.on(btn, "click", () => {
  let string = `查看控制台已经获取到了
我将在3秒后消失`;
  dom.html(display, string);
  console.log(div);
  setTimeout(() => {
    dom.html(display, "");
  }, 3000);
});

dom.on(styleBtn, "click", () => {
  console.log(div);
  dom.style(div, "color", "red");
});

dom.on(btns, "click", () => {
  let string = `查看控制台已经获取到了
我将在3秒后消失`;
  dom.html(display, string);
  dom.each(red, (n) => console.log(n));
  setTimeout(() => {
    dom.html(display, "");
  }, 3000);
});

dom.on(log, "click", () => {
  dom.each(red, (n) => {
    dom.style(n, "color", "green");
  });
});
