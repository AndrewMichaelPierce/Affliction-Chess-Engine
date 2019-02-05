function KnightPositions(n) {
    let Npositions = [];
    let i = n;
    if ((i + 8) === blankBoard[i + 8]) {
        Npositions.push(humanBoard[i + 8]);
    }
    if ((i - 12) === blankBoard[i - 12]) {
        Npositions.push(humanBoard[i - 12]);
    }
    if ((i + 19) === blankBoard[i + 19]) {
        Npositions.push(humanBoard[i + 19]);
    }
    if ((i - 21) === blankBoard[i - 21]) {
        Npositions.push(humanBoard[i - 21]);
    }
    if ((i + 21) === blankBoard[i + 21]) {
        Npositions.push(humanBoard[i + 21]);
    }
    if ((i - 19) === blankBoard[i - 19]) {
        Npositions.push(humanBoard[i - 19]);
    }
    if ((i + 12) === blankBoard[i + 12]) {
        Npositions.push(humanBoard[i + 12]);
    }
    if ((i - 8) === blankBoard[i - 8]) {
        Npositions.push(humanBoard[i - 8]);
    }
    return Npositions;
}

function RookPositions(r) {
    let Rpositions = [];
    for (let i = r; i === blankBoard[i]; i += 10) {
        if ((i + 10) === blankBoard[i + 10]) {
        Rpositions.push(humanBoard[i + 10]);
        }
    }
    for (let i = r; i === blankBoard[i]; i -= 10) {
        if ((i - 10) === blankBoard[i - 10]) {
        Rpositions.push(humanBoard[i - 10]);
        }
    }
    for (let i = r; i === blankBoard[i]; i++) {
        if ((i + 1) === blankBoard[i + 1]) {
        Rpositions.push(humanBoard[i + 1]);
        }
    }
    for (let i = r; i === blankBoard[i]; i--) {
        if ((i - 1) === blankBoard[i - 1]) {
        Rpositions.push(humanBoard[i - 1]);
        }
    }
    return Rpositions;
}

function BishopPositions(b) {
    let Bpositions = [];
    for (let i = b; i === blankBoard[i]; i += 11) {
        if ((i + 11) === blankBoard[i + 11]) {
        Bpositions.push(humanBoard[i + 11]);
        }
    }
    for (let i = b; i === blankBoard[i]; i -= 11) {
        if ((i - 11) === blankBoard[i - 11]) {
        Bpositions.push(humanBoard[i - 11]);
        }
    }
    for (let i = b; i === blankBoard[i]; i += 9) {
        if ((i + 9) === blankBoard[i + 9]) {
        Bpositions.push(humanBoard[i + 9]);
        }
    }
    for (let i = b; i === blankBoard[i]; i -= 9) {
        if ((i - 9) === blankBoard[i - 9]) {
        Bpositions.push(humanBoard[i - 9]);
        }
    }
    return Bpositions;
}

function QueenPositions(q) {
    let Qpositions = [];
    for (let i = q; i === blankBoard[i]; i += 10) {
        if ((i + 10) === blankBoard[i + 10]) {
        Qpositions.push(humanBoard[i + 10]);
        }
    }
    for (let i = q; i === blankBoard[i]; i -= 10) {
        if ((i - 10) === blankBoard[i - 10]) {
        Qpositions.push(humanBoard[i - 10]);
        }
    }
    for (let i = q; i === blankBoard[i]; i++) {
        if ((i + 1) === blankBoard[i + 1]) {
        Qpositions.push(humanBoard[i + 1]);
        }
    }
    for (let i = q; i === blankBoard[i]; i--) {
        if ((i - 1) === blankBoard[i - 1]) {
        Qpositions.push(humanBoard[i - 1]);
        }
    }
    for (let i = q; i === blankBoard[i]; i += 11) {
        if ((i + 11) === blankBoard[i + 11]) {
        Qpositions.push(humanBoard[i + 11]);
        }
    }
    for (let i = q; i === blankBoard[i]; i -= 11) {
        if ((i - 11) === blankBoard[i - 11]) {
        Qpositions.push(humanBoard[i - 11]);
        }
    }
    for (let i = q; i === blankBoard[i]; i += 9) {
        if ((i + 9) === blankBoard[i + 9]) {
        Qpositions.push(humanBoard[i + 9]);
        }
    }
    for (let i = q; i === blankBoard[i]; i -= 9) {
        if ((i - 9) === blankBoard[i - 9]) {
        Qpositions.push(humanBoard[i - 9]);
        }
    }
    return Qpositions;
}

function KingPositions(k) {
    let Kpositions = [];
    let i = k;
    if ((i + 10) === blankBoard[i + 10]) {
        Kpositions.push(humanBoard[i + 10]);
    }
    if ((i - 10) === blankBoard[i - 10]) {
        Kpositions.push(humanBoard[i - 10]);
    }
    if ((i + 1) === blankBoard[i + 1]) {
        Kpositions.push(humanBoard[i + 1]);
    }
    if ((i - 1) === blankBoard[i - 1]) {
        Kpositions.push(humanBoard[i - 1]);
    }
    if ((i + 11) === blankBoard[i + 11]) {
        Kpositions.push(humanBoard[i + 11]);
    }
    if ((i - 11) === blankBoard[i - 11]) {
        Kpositions.push(humanBoard[i - 11]);
    }
    if ((i + 9) === blankBoard[i + 9]) {
        Kpositions.push(humanBoard[i + 9]);
    }
    if ((i - 9) === blankBoard[i - 9]) {
        Kpositions.push(humanBoard[i - 9]);
    }
    return Kpositions;
}