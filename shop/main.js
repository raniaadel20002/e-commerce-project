document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('products.json');
    const products = await response.json();
    const productContainer = document.getElementById('productContainer');
    const viewButtons = document.querySelectorAll('.view-btn');
    const categoryFilter = document.getElementById('categoryFilter');

    let currentView = 'grid3';
    let currentCategory = 'all';

    const renderProducts = () => {
        productContainer.className = `row gx-3 gy-4 ${currentView === 'list' ? 'list-view' : ''}`;
        productContainer.innerHTML = '';

        products
            .filter(product => currentCategory === 'all' || product.category === currentCategory)
            .forEach(product => {
                const cardHTML = currentView === 'list'
                    ? `
                        <div class="col-12">
                            <div class="card">
                                <img src="${product.image}" alt="${product.name}">
                                <div class="card-body">
                                    <h5>${product.name}</h5>
                                    <p>${product.description}</p>
                                    <p><strong>Price: $${product.price}</strong></p>
                                </div>
                            </div>
                        </div>
                    `
                    : `
                        <div class="${currentView === 'grid2' ? 'col-md-6' : currentView === 'grid3' ? 'col-md-4' : 'col-md-3'}">
                            <div class="card position-relative">
                                <img src="${product.image}" alt="${product.name}">
                                <div class="card-body">
                                    <h5>${product.name}</h5>
                                    <p>$${product.price}</p>
                                </div>
                                <div class="card-overlay">
                                    <i class="fas fa-heart"></i>
                                    <i class="fas fa-sync-alt"></i>
                                    <button class="btn btn-success add-to-cart" data-id="${product.id}">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    `;
                productContainer.innerHTML += cardHTML;
            });
    };

    // Change View
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            viewButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentView = button.dataset.view;
            renderProducts();
        });
    });

    // Filter by Category
    categoryFilter.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        renderProducts();
    });

    renderProducts();
});
