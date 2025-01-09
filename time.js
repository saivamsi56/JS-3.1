function dateTime() {
    var ndate = new Date();
    var h = ndate.getHours() % 12;
    var format = h >= 12 ? 'PM' : 'AM';
    var m = ndate.getMinutes().toString();
    var s = ndate.getSeconds().toString();

    if (h < 12) {
      h = "0" + h;
      $("h3.day-message").html("Good Morning");
    } else if (h < 18) {
      $("h3.day-message").html("Good Afternoon");
    } else {
      $("h3.day-message").html("Good Evening");
    }

    if (s < 10) {
      s = "0" + s;
    }

    if (m < 10) {
      m = "0" + m;
    }

    $('.date').html(h + ":" + m + ":" + s + format);
  }

  setInterval(dateTime, 1000);