  var elt         = document.getElementById("roller");
  let elements = document.getElementsByClassName("textroller");
  console.log(elements);
  var texts       = ["zxyvqzxcxzcczxczxczcxzczczczxczxzcxcxczcczxczxczxczcz"];
  for (var i = 0; i < elements.length; i++) {
        elements[i].textroller = new TextRoller(
{
      el: elements[i],
      values: texts,    // an array of texts.     default : [el.innerHtml]
      align: "left",    // right, left or middle. default : middle
      delay: 3000,      // in milliseconds,       default : 5000
      loop: false       // at the end, restart.   default : true
  });
        var value = elements[i].textroller.el.attributes["data"].nodeValue;
        console.log(value);
        elements[i].innerHTML = value;
        };
