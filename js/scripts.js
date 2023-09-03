const calculateDecBin = (numberDec) => {
    let binaryNumber = [];

    while (numberDec > 1) {
        const module = numberDec % 2;

        binaryNumber.push(module);

        numberDec = Math.trunc(numberDec / 2);
    }

    binaryNumber.push(1);

    binaryNumber = binaryNumber.reverse();

    let binary = "";

    binaryNumber.forEach(function (value) {
        binary += value;
    });

    return binary;
};


const calculateBinDec = (numberBin) => {
    let decimals = 0;

    let binaries = [];

    for (let i = 0; i < numberBin.length; i += 1) {
        binaries.push(parseInt(numberBin[i]));
    }

    binaries = binaries.reverse();

    binaries.forEach((value, index) => {
        decimals += value * Math.pow(2, index);
    });

    return decimals.toString();
};


const setDecToBin = () => {
    let decimals = document.getElementById("decimal");

    document.getElementById("binary").value = calculateDecBin(decimals.value);
};

const setBinToDec = () => {
    let binaries = document.getElementById("fromBin");

    const binRegex = /^[0-1]+$/;

    if (!binRegex.test(binaries.value)) {
        alert(`This value "${binaries.value}" is not a valid binary number!`);
        return;
    }

    document.getElementById("toDec").value = calculateBinDec(binaries.value);
};


document.getElementById("formDecBin").addEventListener("submit", (event) => {
    event.preventDefault();

    setDecToBin();
});


document.getElementById("formBinDec").addEventListener("submit", (event) => {
    event.preventDefault();

    setBinToDec();
});
