var children = function() {
    return  [1, 2, 3, 4, 5, 6, 7 , 8].map(function(x) {
    var el = document.createElement('span');
    el.innerText = x;
    return el;
    });
};

document.getElementsByTagName('body')[0].appendChild(simpleLayout(children()))
document.getElementsByTagName('body')[0].appendChild(fibonacciLayout(children()))