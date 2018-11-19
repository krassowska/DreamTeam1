// With JQuery
/*$("#ex14").slider({
    ticks: [0, 1],
    ticks_positions: [0, 100],
    ticks_labels: ['cold', 'hot'],
    ticks_snap_bounds: 30
});


// Without JQuery
var slider = new Slider("#ex14", {
  ticks: [0, 1],
  ticks_positions: [0, 100],
  ticks_labels: ['cold', 'hot'],
  ticks_snap_bounds: 30
});

https://seiyria.com/bootstrap-slider/
// With JQuery
$('#ex1').slider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
*/
// Without JQuery
var slider = new Slider('#ex1', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

var slider = new Slider('#ex2', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

var slider = new Slider('#ex3', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
