//Start
//https://seiyria.com/bootstrap-slider/
// Without JQuery
var x, y, z;

var slider1 = new Slider('#ex1', {
	formatter: function(value) {
    x = value;
		return 'Current value: ' + value;
	}
});

var slider2 = new Slider('#ex2', {
	formatter: function(value) {
    y = value;
		return 'Current value: ' + value;
	}
});

var slider3 = new Slider('#ex3', {
	formatter: function(value) {
    z = value;
		return 'Current value: ' + value;
	}
});

$('#find').click(
  function() {
    console.log('' + x + ',' + y + ',' + z)
    if (x==0 && y==0 && z==0) {
      window.location.href = "poland.html";
    }
    else if (x==1 && y==1 && z==1) {
      window.location.href = "greece.html";
    }
  }
)

//END

// --------------------------------------------------------------
