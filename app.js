document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('add-to-cart-button');
    const notification = document.getElementById('notification');

    addToCartButton.addEventListener('click', () => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    });

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        const productDetails = {
            1: {
                title: 'iPhone 15',
                description: 'Новейший iPhone 15 с улучшенной камерой и производительностью.',
                price: '$999.00',
                image: 'images/product3.png',
                specs: [
                    'Экран: 6.1 дюйма OLED',
                    'Процессор: A15 Bionic',
                    'Камера: 12 МП (основная), 12 МП (фронтальная)',
                    'Память: 128 ГБ, 256 ГБ, 512 ГБ',
                    'Батарея: 3115 мА·ч'
                ]
            },
            2: {
                title: 'iPhone 15',
                description: 'Новейший iPhone 15 с улучшенной камерой и производительностью.',
                price: '$999.00',
                image: 'images/product3.png',
                specs: [
                    'Экран: 6.1 дюйма OLED',
                    'Процессор: A15 Bionic',
                    'Камера: 12 МП (основная), 12 МП (фронтальная)',
                    'Память: 128 ГБ, 256 ГБ, 512 ГБ',
                    'Батарея: 3115 мА·ч'
                ]
            },
            3: {
                title: 'iPhone 15',
                description: 'Новейший iPhone 15 с улучшенной камерой и производительностью.',
                price: '$999.00',
                image: 'images/product3.png',
                specs: [
                    'Экран: 6.1 дюйма OLED',
                    'Процессор: A15 Bionic',
                    'Камера: 12 МП (основная), 12 МП (фронтальная)',
                    'Память: 128 ГБ, 256 ГБ, 512 ГБ',
                    'Батарея: 3115 мА·ч'
                ]
            },
            4: {
                title: 'iPhone 15',
                description: 'Новейший iPhone 15 с улучшенной камерой и производительностью.',
                price: '$999.00',
                image: 'images/product3.png',
                specs: [
                    'Экран: 6.1 дюйма OLED',
                    'Процессор: A15 Bionic',
                    'Камера: 12 МП (основная), 12 МП (фронтальная)',
                    'Память: 128 ГБ, 256 ГБ, 512 ГБ',
                    'Батарея: 3115 мА·ч'
                ]
            }
        };

        const product = productDetails[productId];
        if (product) {
            document.getElementById('product-title').textContent = product.title;
            document.getElementById('product-description').textContent = product.description;
            document.getElementById('product-price').textContent = product.price;
            document.getElementById('product-image').src = product.image;

            const specsList = document.getElementById('product-specs');
            specsList.innerHTML = '';
            product.specs.forEach(spec => {
                const li = document.createElement('li');
                li.textContent = spec;
                specsList.appendChild(li);
            });
        }
    }
});
