document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headers = ['ID', 'Name', 'ARS', 'USD', ' '];
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    async function fetchProducts() {    //GET ALL
        try {
            const response = await fetch('http://localhost:8000/products');
            const products = await response.json();
            const table = generateTable(products);
            productList.appendChild(table);
        } catch (error) {
            console.error('Error when obtaining the products: ', error);
        }
    }

    function generateTable(data) {        
        data.forEach(product => {
            const row = document.createElement('tr');
            ['id', 'name', 'price', 'price_usd'].forEach(key => {
                const cell = document.createElement('td');
                if (key === 'name' || key === 'price') {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.value = product[key];
                    cell.appendChild(input);
                } else {
                    cell.textContent = product[key];
                }
                row.appendChild(cell);
            });
            const saveButtonCell = document.createElement('td'); //PUT EDIT
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.addEventListener('click', async () => {
                const newName = row.cells[1].querySelector('input').value;
                const newPrice = row.cells[2].querySelector('input').value;
                const updatedProduct = { id: product.id, name: newName, price: newPrice };
                try {
                    const response = await fetch(`http://localhost:8000/products/${product.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedProduct)
                    });
                    if (response.ok) {
                        tbody.innerHTML = ''; 
                        product.name = newName;
                        product.price = newPrice;
                        fetchProducts(); // Reload
                    } else {
                        console.error('Error updating product');
                    }
                } catch (error) {
                    console.error('Error updating product: ', error);
                }
            });
            saveButtonCell.appendChild(saveButton);
            row.appendChild(saveButtonCell);
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        return table;
    }
    const addButton = document.createElement('button'); //POST ADD
    addButton.textContent = 'Add';
    addButton.addEventListener('click', async () => {
        const newName = prompt('Enter the name of the new product: ');
        const newPrice = parseFloat(prompt('Enter the price of the new product: '));
        try {
            const response = await fetch(`http://localhost:8000/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: newName, price: newPrice })
            });
            if (response.ok) {
                tbody.innerHTML = ''; 
                fetchProducts(); // Reload
            } else {
                console.error('Error adding product');
            }
        } catch (error) {
            console.error('Error adding product: ', error);
        }
    });
    productList.appendChild(addButton);
    fetchProducts();
});
