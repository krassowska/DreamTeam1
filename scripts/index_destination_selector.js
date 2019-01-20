//Start
//https://seiyria.com/bootstrap-slider/
// Without JQuery
var temperature, activity, place;

var slider1 = new Slider('#ex1', {
	formatter: function(value) {
    temperature = value;
		return 'Current value: ' + value;
	}
});

var slider2 = new Slider('#ex2', {
	formatter: function(value) {
    activity = value;
		return 'Current value: ' + value;
	}
});

var slider3 = new Slider('#ex3', {
	formatter: function(value) {
    place = value;
		return 'Current value: ' + value;
	}
});

$('#find').click(
  function() {
    console.log('' + temperature + ',' + activity + ',' + place)
    if (temperature==0 && activity==0 && place==0) {
      window.location.href = "poland.html";
    }
    else if (temperature==0 && activity==0 && place==1) {
      window.location.href = "new.html";
    }
		else if (temperature==0 && activity==1 && place==0) {
      window.location.href = "new.html";
    }
		else if (temperature==0 && activity==1 && place==1) {
      window.location.href = "tatry.html";
    }
		else if (temperature==1 && activity==0 && place==0) {
      window.location.href = "new.html";
    }
		else if (temperature==1 && activity==0 && place==1) {
      window.location.href = "new.html";
    }
		else if (temperature==1 && activity==1 && place==0) {
      window.location.href = "new.html";
    }
		else if (temperature==1 && activity==1 && place==1) {
      window.location.href = "greece.html";
    }
  }
)

//END

// --------------------------------------------------------------
