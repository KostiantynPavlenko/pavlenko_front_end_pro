const tableContainer = document.querySelector('.table-container');

function createPythagorasTable(size) {
  const table = document.createElement('table');
  
  table.classList.add('table')

  for (let row = 0; row <= size; row++) {
    const tableRow = document.createElement('tr');

    for (let cell = 0; cell <= size; cell++) {
      const tableCell = document.createElement('td');
      const isFirstRowAndFirstCell = row === 0 && cell === 0;

      tableCell.classList.add('tableCell');

      if (isFirstRowAndFirstCell) {
        tableCell.classList.add('grayCell');
      } else if (row === 0 && cell > 0) {
        tableCell.textContent = `${cell}`;
        tableCell.classList.add('greenCell');
      } else if (row > 0 && cell === 0) {
        tableCell.textContent = `${row}`;
        tableCell.classList.add('brownCell');
      } else {
        tableCell.textContent = `${cell * row}`;
        if (cell === row) {
          tableCell.classList.add('yellowCell');
        } else if (cell < row) {
          tableCell.classList.add('lowBrownCell');
        } else {
          tableCell.classList.add('lowGreenCell');
        }
      }

      tableRow.appendChild(tableCell);
    }

    table.appendChild(tableRow);
  }

  tableContainer.appendChild(table);
  
}

createPythagorasTable(10);