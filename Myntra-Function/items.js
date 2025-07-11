const items = [
    {
        id: '001',
        image: 'images/1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '002',
        image: 'images/2.jpg',
        company: 'CUKOO',
        item_name: 'Women Padded Halter Neck Swimming Dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '003',
        image: 'images/3.jpg',
        company: 'NUEVOSDAMAS',
        item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '004',
        image: 'images/4.jpg',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '005',
        image: 'images/5.jpg',
        company: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
    {
        id: '006',
        image: 'images/6.jpg',
        company: 'Nike',
        item_name: 'Men ReactX Running Shoes',
        original_price: 14995,
        current_price: 14995,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 0.0,
            count: 0,
        },
    },
    {
        id: '007',
        image: 'images/7.jpg',
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount_percentage: 60,
        rating: {
            stars: 4.2,
            count: 388,
        },
    },
    {
        id: '008',
        image: 'images/8.jpg',
        company: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    },
    {
        id: '009',
        image: 'images/9.webp',
        company: 'Addidas',
        item_name: 'Women Fresh Cloths',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.4,
            count: 5000,
        },
    },
    {
        id: '010',
        image: 'images/10.webp',
        company: 'Camel',
        item_name: 'Women Yoga Dress',
        original_price: 255,
        current_price: 122,
        discount_percentage: 40,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    },
    {
        id: '011',
        image: 'images/11.jpg',
        company: 'Nika',
        item_name: 'Women Fresh Suit',
        original_price: 355,
        current_price: 220,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.7,
            count: 520,
        },
    },
    {
        id: '012',
        image: 'images/12.jpg',
        company: 'Bikab',
        item_name: 'Women Fresh Dress',
        original_price: 408,
        current_price: 320,
        discount_percentage: 36,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.9,
            count: 4600,
        },
    },
    {
        id: '013',
        image: 'images/13.jpg',
        company: 'Puma',
        item_name: 'Men Tshirt',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    },
    {
        id: '014',
        image: 'images/14.jpg',
        company: 'Phillips',
        item_name: 'Men Tshirt Medium',
        original_price: 799,
        current_price: 399,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 3.9,
            count: 5000,
        },
    },
    {
        id: '015',
        image: 'images/15.jpg',
        company: 'Zikan',
        item_name: 'Kids Kurta',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    },
    {
        id: '016',
        image: 'images/16.jpg',
        company: 'Figma',
        item_name: 'Kids Girl Clothes',
        original_price: 208,
        current_price: 99,
        discount_percentage: 48,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.0,
            count: 520,
        },
    },
    {
        id: '017',
        image: 'images/17.jpg',
        company: 'Nivea',
        item_name: 'Girls Wear Skirt',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.1,
            count: 2200,
        },
    },
    {
        id: '018',
        image: 'images/18.jpg',
        company: 'King',
        item_name: 'Kids Red Dress for Girls',
        original_price: 599,
        current_price: 299,
        discount_percentage: 75,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 3.7,
            count: 500,
        },
    },
    {
        id: '019',
        image: 'images/19.jpg',
        company: 'Luis',
        item_name: 'Women Night Dress',
        original_price: 399,
        current_price: 259,
        discount_percentage: 34,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.2,
            count: 550,
        },
    },
    {
        id: '020',
        image: 'images/20.jpg',
        company: 'Kayan',
        item_name: 'Men Wear Shirt',
        original_price: 799,
        current_price: 599,
        discount_percentage: 28,
        return_period: 14,
        delivery_date: '12 Aug 2024',
        rating: {
            stars: 4.1,
            count: 4700,
        },
    },
];