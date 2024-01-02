let arr = [],
  a = 0,
  i = 0,
  t = 0;

$(".btn-title").one("click", myFunction);

function myFunction() {
  t = 0;
  i = 0;
  a = 0;
  a++;
  $(".btn-title").text("Click To Start");

  let random = Math.floor(Math.random() * 4);
  let element = document.querySelectorAll(".btn")[random];
  let id = $(element).attr("id");

  arr = [];
  arr.push(id);
  $(`#${id}`).fadeOut(100).fadeIn(100);

  let s = id + ".mp3";
  let sound = new Audio(`../assets/${s}`);
  sound.play();

  $("#level-title").text("Level " + a);
  $(`#${id}`).addClass("pressed");
  setTimeout(() => {
    $(`#${id}`).removeClass("pressed");
  }, 200);
}

function patteren() {
  i = 0;

  let random = Math.floor(Math.random() * 4);
  let element = document.querySelectorAll(".btn")[random];
  let id = $(element).attr("id");

  arr.push(id);

  setTimeout(() => {
    $(`#${id}`).fadeOut(100).fadeIn(100);

    let s = id + ".mp3";
    let sound = new Audio(`../assets/${s}`);
    sound.play();

    a++;
    $("#level-title").text("Level " + a);
    $(`#${id}`).addClass("pressed");
    setTimeout(() => {
      $(`#${id}`).removeClass("pressed");
    }, 200);
  }, 500);
}

function call() {
  $(".btn").on("click", function (e) {
    if (t !== "error") {
      let id1 = $(e.currentTarget).attr("id");

      if (id1 != arr[i]) {
        t = "error";
        $("#level-title").text("Game Over, Press Clcik to Restart");
        let audio = new Audio("../assets/wrong.mp3");
        audio.play();
        arr = [undefined];
        $(".body").addClass("game-over");
        setTimeout(() => {
          $(".body").removeClass("game-over");
        }, 200);

        $(".btn-title").text("Click To Restart");

        $(".btn-title").one("click", myFunction);
      }
      if (id1 == arr[i]) {
        let s = id1 + ".mp3";
        let sound = new Audio(`../assets/${s}`);
        sound.play();
        $(`#${id1}`).addClass("pressed");
        setTimeout(() => {
          $(`#${id1}`).removeClass("pressed");
        }, 200);
      }

      if (i == arr.length - 1 && id1 == arr[i]) {
        patteren();
      } else {
        i++;
      }
    }
  });
}

call();
