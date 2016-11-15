var children = [1, 2, 3, 4, 5].map(function(x) {
    var el = document.createElement('span');
    el.innerText = x;
    return el;
});

document.getElementsByTagName('body')[0].appendChild(fib(children))