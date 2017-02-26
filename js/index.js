var position = Number(prompt('Enter number'));

function fibonacci(x) {
    var numbers = [];

    numbers[0] = 1;
    numbers[1] = 1;

    for (var n = 2; n < x; n++) {
        numbers[n] = numbers[n - 1] + numbers[n - 2];
    }

    return numbers[x - 1];
}

document.write(fibonacci(position) + "<br>");
document.write(fibonacci(8));
