const products = [
    {
        name: "Café Caramel con Chocolate",
        price: 59.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 1
    },
    {
        name: "Café Frio con Chocolate Grande",
        price: 49.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 2
    },
    {
        name: "Latte Frio con Chocolate Grande",
        price: 54.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 3
    },
    {
        name: "Latte Frio con Chocolate Grande",
        price: 54.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 4
    },
    {
        name: "Malteada Fria con Chocolate Grande",
        price: 54.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 5
    },
    {
        name: "Café Mocha Caliente Chico",
        price: 39.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 6
    },
    {
        name: "Café Mocha Caliente Grande con Chocolate",
        price: 59.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 7
    },
    {
        name: "Café Caliente Capuchino Grande",
        price: 59.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 8
    },
    {
        name: "Café Mocha Caliente Mediano",
        price: 49.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 9
    },
    {
        name: "Café Mocha Frio con Caramelo Mediano",
        price: 49.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 10
    },
    {
        name: "Café Mocha Frio con Chocolate Mediano",
        price: 49.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 11
    },
    {
        name: "Café Espresso",
        price: 29.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 12
    },
    {
        name: "Café Capuchino Grande con Caramelo",
        price: 59.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 13
    },
    {
        name: "Café Caramelo Grande",
        price: 59.,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 14
    },
    {
        name: "Paquete de 3 donas de Chocolate",
        price: 39.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 15
    },
    {
        name: "Paquete de 3 donas Glaseadas",
        price: 39.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 16
    },
    {
        name: "Dona de Fresa ",
        price: 19.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 17
    },
    {
        name: "Dona con Galleta de Chocolate ",
        price: 19.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 18
    },
    {
        name: "Dona glass con Chispas Sabor Fresa ",
        price: 19.9,
        category_id: 1,
        description: "ddddd",
        image: "prote",
        stock: 10,
        id: 19
    },
    {
        name: "Dona glass con Chocolate ",
        price: 19.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 20
    },
    {
        name: "Dona de Chocolate con MÁS Chocolate ",
        price: 19.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 21
    },
    {
        name: "Paquete de 3 donas de Chocolate ",
        price: 39.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 22
    },
    {
        name: "Paquete de 3 donas con Vainilla y Chocolate ",
        price: 39.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 23
    },
    {
        name: "Paquete de 6 Donas",
        price: 69.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 24
    },
    {
        name: "Paquete de  Variadas",
        price: 39.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 25
    },
    {
        name: "Dona Natural con Chocolate",
        price: 19.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 26
    },
    {
        name: "Paquete de  Donas de Chocolate con Chispas",
        price: 39.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 27
    },
    {
        name: "Dona Chocolate y Coco",
        price: 19.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 28
    },
    {
        name: "Paquete Galletas de Chocolate",
        price: 29.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 29
    },
    {
        name: "Paquete Galletas de Chocolate y Avena",
        price: 39.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 30
    },
    {
        name: "Paquete de Muffins de Vainilla",
        price: 39.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 31
    },
    {
        name: "Paquete de 4 Galletas de Avena",
        price: 24.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 32
    },
    {
        name: "Galletas de Mantequilla Variadas",
        price: 39.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 33
    },
    {
        name: "Galletas de sabores frutales",
        price: 39.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 34
    },
    {
        name: "Hamburguesa Sencilla",
        price: 59.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 35
    },
    {
        name: "Hamburguesa de Pollo",
        price: 59.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 36
    },
    {
        name: "Hamburguesa de Pollo y Chili",
        price: 59.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 37
    },
    {
        name: "Hamburguesa Queso y  Pepinos",
        price: 59.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 38
    },
    {
        name: "Hamburguesa Cuarto de Libra",
        price: 59.9,
        category_id: 3,
        description: "ddddd",
        image: "preworkout",
        stock: 20,
        id: 39
    },
    {
        name: "Hamburguesa Doble Queso",
        price: 69.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 40
    },
    {
        name: "Hot Dog Especial",
        price: 49.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 41
    },
    {
        name: "Paquete 2 Hot Dogs",
        price: 69.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 42
    },
    {
        name: "4 Rebanadas de Pay de Queso",
        price: 69.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 43
    },
    {
        name: "Waffle Especial",
        price: 49.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 44
    },
    {
        name: "Croissants De la casa",
        price: 39.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 45
    },
    {
        name: "Pay de Queso",
        price: 19.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 46
    },
    {
        name: "Pastel de Chocolate",
        price: 29.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 47
    },
    {
        name: "Rebanada Pastel de Chocolate",
        price: 29.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 48
    },
    {
        name: "Pizza Spicy con Doble Queso",
        price: 69.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 49
    },
    {
        name: "Pizza Jamón y Queso",
        price: 69.9
        ,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 50
    },
    {
        name: "Pizza Doble Queso",
        price: 69.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 51
    },
    {
        name: "Pizza Especial de la Casa",
        price: 69.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 52
    },
    {
        name: "Pizza Chorizo",
        price: 69.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 53
    },
    {
        name: "Pizza Hawaiana",
        price: 69.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 54
    },
    {
        name: "Pizza Tocino",
        price: 69.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 55
    },
    {
        name: "Pizza Vegetales y Queso",
        price: 69.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 56
    },
    {
        name: "Pizza Pepperoni y Queso",
        price: 69.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 57
    },
    {
        name: "Pizza Aceitunas y Queso",
        price: 69.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 58
    },
    {
        name: "Pizza Queso, Jamón y Champiñones",
        price: 69.9,
        category_id: 2,
        description: "ddddd",
        image: "creatine",
        stock: 30,
        id: 59
    }
]

export {
    products
}