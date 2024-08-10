document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.querySelector('#insert');
    
    // Create the table and header if it doesn't exist
    if (!tableContainer.querySelector('table')) {
        tableContainer.innerHTML = 
        `<table style="border: 1px solid black; border-collapse: collapse; width: 50%;">
            <thead>
                <tr>
                    <th style="border: 1px solid black; padding: 8px;">Key</th>
                    <th style="border: 1px solid black; padding: 8px;">Key Id</th>
                    <th style="border: 1px solid black; padding: 8px;">Key Code</th>
                </tr>
            </thead>
            <tbody id="key-records"></tbody>
        </table>`;
    }
    
    const tbody = document.querySelector('#key-records');

    window.addEventListener('keydown', (e) => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = 
        `<td style="border: 1px solid black; padding: 8px;">${e.key}</td>
         <td style="border: 1px solid black; padding: 8px;">${e.keyCode}</td>
         <td style="border: 1px solid black; padding: 8px;">${e.code}</td>`;
        
        tbody.appendChild(newRow);  // Append the new row to the table body
        
        // Scroll the page to the bottom so the new row is visible
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'  // Smooth scrolling
        });
    });
});
