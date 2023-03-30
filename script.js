const form = document.getElementById('my-form');
const tableContainer = document.getElementById('table-container');
let tableHTML = '';

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the form values
  const name = form.elements['name'].value;
  const loclink = form.elements['loclink'].value;

  // Build the table row HTML
  const rowHTML = `
    <tr>
      <td>${name}</td>
      <td>${loclink}</td>
    </tr>
  `;

  // Append the row HTML to the table HTML
  tableHTML += rowHTML;

  // Build the full table HTML
  const fullTableHTML = `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location Link</th>
        </tr>
      </thead>
      <tbody>
        ${tableHTML}
      </tbody>
    </table>
  `;

  // Display the table HTML
  tableContainer.innerHTML = fullTableHTML;

  // Clear the form values
  form.reset();
});
