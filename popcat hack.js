/*
	Original code by: DaWe35 & DzikStar (GitHub)
	Made more powerful: OJector (GitHub)
*/
eval(function(p, a, c, k, e, d) {
  while (c--) {
    if (k[c]) {
      p = p.replace(new RegExp('\\b' + c.toString(a) + '\\b', 'g'), k[c])
    }
  }
  return p
}('3 2=4 5(\'6\',{7:\'g\',8:a});9(b(){c(1=0;1<d;1++){e.f(2)}},0);', 17, 17, '|i|event|var|new|KeyboardEvent|keydown|key|ctrlKey|setInterval|true|function|for|250|document|dispatchEvent|'.split('|')))


var event = new KeyboardEvent('keydown', {
	key: 'z',
	ctrlKey: true
});
var event2 = new KeyboardEvent('keydown', {
	key: 'a',
	ctrlKey: true
});
var event3 = new KeyboardEvent('keydown', {
	key: 'b',
	ctrlKey: true
});
var event4 = new KeyboardEvent('keydown', {
	key: 'c',
	ctrlKey: true
});
var event5 = new KeyboardEvent('keydown', {
	key: 'd',
	ctrlKey: true
});
var event6 = new KeyboardEvent('keydown', {
	key: 'e',
	ctrlKey: true
});
var event7 = new KeyboardEvent('keydown', {
	key: 'f',
	ctrlKey: true
});
var event8 = new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
});
var event9 = new KeyboardEvent('keydown', {
	key: 'h',
	ctrlKey: true
});
var event10 = new KeyboardEvent('keydown', {
	key: 'i',
	ctrlKey: true
});



setInterval(function(){
	for (i = 0; i < 100; i++) {
		document.dispatchEvent(event);
		document.dispatchEvent(event2);
		document.dispatchEvent(event3);
		document.dispatchEvent(event4);
		document.dispatchEvent(event5);
		document.dispatchEvent(event6);
		document.dispatchEvent(event7);
		document.dispatchEvent(event8);
		document.dispatchEvent(event9);
		document.dispatchEvent(event10);

	}
}, 0);