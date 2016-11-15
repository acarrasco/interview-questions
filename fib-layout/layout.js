function fib(children, verticalSplit) {
    if (!children) {
        return;
    } else if (children.length == 1) {
        return children[0];
    } else {
        var head = children[0];
        var tail = children.slice(1);

        var rootContainer = document.createElement('span');
        var headContainer = document.createElement('span');
        var tailContainer = document.createElement('span');    

        if (verticalSplit) {
            rootContainer.className = 'fib vertical';
            headContainer.className = 'fib top';
            tailContainer.className = 'fib bottom';
        } else {
            rootContainer.className = 'fib horizontal';         
            headContainer.className = 'fib left';
            tailContainer.className = 'fib right';   
        }

        headContainer.appendChild(head);
        tailContainer.appendChild(fib(tail, !verticalSplit));

        rootContainer.appendChild(headContainer);
        rootContainer.appendChild(tailContainer);

        return rootContainer;
    }
}