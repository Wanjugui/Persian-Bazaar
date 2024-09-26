// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle sidebar navigation clicks
    document.querySelectorAll('.sidebar-menu a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const module = this.getAttribute('data-module');
            loadModule(module);
        });
    });

    // Function to dynamically load content based on the selected module
    function loadModule(module) {
        const contentArea = document.getElementById('content-area');
        switch (module) {
            case 'dashboard':
                contentArea.innerHTML = `
                    <h1>Dashboard Overview</h1>
                    <p>Summary of sales, users, and orders.</p>
                    <!-- Insert dashboard graphs and stats here -->
                `;
                break;
            case 'product-management':
                contentArea.innerHTML = `
                    <h1>Product Management</h1>
                    <button onclick="addProduct()">Add Product</button>
                    <!-- Insert product management table and forms here -->
                `;
                break;
            case 'order-management':
                contentArea.innerHTML = `
                    <h1>Order Management</h1>
                    <p>Track and manage all orders here.</p>
                    <!-- Insert order management table and details here -->
                `;
                break;
            case 'vendor-management':
                contentArea.innerHTML = `
                    <h1>Vendor Management</h1>
                    <p>Manage vendor profiles and approvals.</p>
                    <!-- Insert vendor management tools here -->
                `;
                break;
            case 'reports':
                contentArea.innerHTML = `
                    <h1>Reports</h1>
                    <p>View sales and performance reports.</p>
                    <!-- Insert report generation tools here -->
                `;
                break;
            case 'settings':
                contentArea.innerHTML = `
                    <h1>Settings</h1>
                    <p>Configure platform settings and user permissions.</p>
                    <!-- Insert settings configuration options here -->
                `;
                break;
            default:
                contentArea.innerHTML = `
                    <h1>Welcome to the Admin Dashboard</h1>
                    <p>Select an option from the sidebar to view details.</p>
                `;
        }
    }
    
    // Example function to add product (for illustration)
    function addProduct() {
        alert("Add Product Functionality Goes Here!");
    }
});
