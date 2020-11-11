function chessBoardCreate() {

    let cellColors = ['white-cell', 'black-cell'];
    let symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let board = [
        ['Л', 'K', 'C', 'Ф', 'Кр', 'C', 'K', 'Л'],
        ['П', 'П', 'П', 'П', 'П', 'П', 'П', 'П'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['П', 'П', 'П', 'П', 'П', 'П', 'П', 'П'],
        ['Л', 'K', 'C', 'Ф', 'Кр', 'C', 'K', 'Л'],
    ];

    //body reference
    let div = document.getElementById("content");

    // create elements <table> and a <tbody>
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");


    createTextNode = function(indexI, indexJ) {
        if (indexI === 0 && indexJ === 0) {
            return '';
        }

        if (indexI === 0) {
            return symbols[indexJ - 1];
        }

        if (indexJ === 0) {
            return String( 8 - indexI + 1)
        }

        return String(board[indexI - 1][indexJ - 1]);
    };

    // cells creation
    for (let i = 0; i < 9; i++) {
        // table row creation
        let row = document.createElement("tr");

        for (let j = 0; j < 9; j++) {

            let cell = document.createElement("td");
            let cellText = document.createTextNode(createTextNode(i, j));

            if (i > 0 && j > 0) {
                cell.classList.add(cellColors[(i + j) % 2]);
                if (i > 4) {
                    cell.classList.add('white-figure');
                } else {
                    cell.classList.add('black-figure');
                }
            }

            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        //row added to end of table body
        tblBody.appendChild(row);
    }

    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    div.appendChild(tbl);
    // tbl border attribute to
    tbl.setAttribute("border", "2");
}

chessBoardCreate();