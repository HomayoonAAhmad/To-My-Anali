$(document).ready(function () {
  let isOpen = false;

  $(".container").click(function () {
    if (isOpen) {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    } else {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    }
    isOpen = !isOpen;
  });
});
