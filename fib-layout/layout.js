function simpleLayout(children, verticalSplit) {
    if (!children || children.length == 0) {
        return;
    }
    var head = children[0];
    var tail = children.slice(1);
    var rootContainer = document.createElement('span');

    if (!tail.length) {
        rootContainer.className = 'fib leaf';
        rootContainer.appendChild(head)
    } else {
        var headContainer = document.createElement('span');
        var tailContainer = document.createElement('span');

        if (verticalSplit) {
            rootContainer.className = 'fib vertical';
            headContainer.className = 'fib big leaf';
            tailContainer.className = 'fib small';
        } else {
            rootContainer.className = 'fib horizontal';
            headContainer.className = 'fib big leaf';
            tailContainer.className = 'fib small';
        }

        headContainer.appendChild(head);
        tailContainer.appendChild(simpleLayout(tail, !verticalSplit));

        rootContainer.appendChild(headContainer);
        rootContainer.appendChild(tailContainer);
    }
    return rootContainer;
}

function fibonacciLayout(children, iteration) {
    iteration = iteration || 0;
    var verticalSplit = iteration % 2 == 1;
    var bigFirst = Math.trunc((iteration / 2)) % 2 == 0;

    if (!children || !children.length) {
        return;
    }
    var head = children[0];
    var tail = children.slice(1);
    var rootContainer = document.createElement('span');

    if (!tail.length) {
        rootContainer.className = 'fib leaf';
        rootContainer.appendChild(head)
    } else {
        var firstContainer = document.createElement('span');
        var secondContainer = document.createElement('span');

        if (verticalSplit) {
            rootContainer.className = 'fib vertical';
        } else {
            rootContainer.className = 'fib horizontal';
        }

        var bigContainer, smallContainer;
        if (bigFirst) {
            bigContainer = firstContainer;
            smallContainer = secondContainer;
        } else {
            bigContainer = secondContainer;
            smallContainer = firstContainer;
        }

        bigContainer.className = 'fib big leaf';
        smallContainer.className = 'fib small';
        bigContainer.appendChild(head);
        smallContainer.appendChild(fibonacciLayout(tail, iteration + 1));

        rootContainer.appendChild(firstContainer);
        rootContainer.appendChild(secondContainer);
    }
    return rootContainer;
}