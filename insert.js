db.authors.insertMany([
    { _id: ObjectId("665fa1a1e5c4b621bd1a1a11"),
      name: "Лев Толстой",
      birthYear: 1828,
      nationality: "руски" },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1a12"),
      name: "Джордж Оруел",
      birthYear: 1903,
      nationality: "британски" },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1a13"),
      name: "Ф. Достоевски",
      birthYear: 1821,
      nationality: "руски" },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1a14"),
      name: "Дж. К. Роулинг",
      birthYear: 1965,
      nationality: "британски" },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1a15"),
      name: "Стивън Кинг",
      birthYear: 1947,
      nationality: "американски" },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1a16"),
      name: "Жул Верн",
      birthYear: 1828,
      nationality: "френски" },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1a17"),
      name: "Агата Кристи",
      birthYear: 1890,
      nationality: "британски" },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1a18"),
      name: "Харуки Мураками",
      birthYear: 1949,
      nationality: "японски" },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1a19"),
      name: "Пейо Яворов",
      birthYear: 1878,
      nationality: "български" },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1a20"),
      name: "Елин Пелин",
      birthYear: 1877,
      nationality: "български" }
  ]);
  
  db.books.insertMany([
    {
      _id: ObjectId("665fa1a1e5c4b621bd1c101"),
      title: "Война и мир",
      authors: [{
        _id: ObjectId("665fa1a1e5c4b621bd1a1a11"),
        name: "Лев Толстой",
        nationality: "руски"
      }],
      category: "Класика",
      price: 25.90,
      stock: 12
    },
    {
      _id: ObjectId("665fa1a1e5c4b621bd1c102"),
      title: "1984",
      authors: [{
        _id: ObjectId("665fa1a1e5c4b621bd1a1a12"),
        name: "Джордж Оруел",
        nationality: "британски"
      }],
      category: "Антиутопия",
      price: 18.50,
      stock: 7
    },
    {
      _id: ObjectId("665fa1a1e5c4b621bd1c103"),
      title: "Идиот",
      authors: [{
        _id: ObjectId("665fa1a1e5c4b621bd1a1a13"),
        name: "Ф. Достоевски",
        nationality: "руски"
      }],
      category: "Класика",
      price: 22.00,
      stock: 10
    },
    {
      _id: ObjectId("665fa1a1e5c4b621bd1c104"),
      title: "Хари Потър",
      authors: [{
        _id: ObjectId("665fa1a1e5c4b621bd1a1a14"),
        name: "Дж. К. Роулинг",
        nationality: "британски"
      }],
      category: "Фентъзи",
      price: 19.99,
      stock: 15
    },
    {
      _id: ObjectId("665fa1a1e5c4b621bd1c105"),
      title: "То",
      authors: [{
        _id: ObjectId("665fa1a1e5c4b621bd1a1a15"),
        name: "Стивън Кинг",
        nationality: "американски"
      }],
      category: "Ужаси",
      price: 21.50,
      stock: 8
    },
    {
      _id: ObjectId("665fa1a1e5c4b621bd1c106"),
      title: "Около света за 80 дни",
      authors: [{
        _id: ObjectId("665fa1a1e5c4b621bd1a1a16"),
        name: "Жул Верн",
        nationality: "френски"
      }],
      category: "Приключения",
      price: 16.00,
      stock: 20
    },
    {
      _id: ObjectId("665fa1a1e5c4b621bd1c107"),
      title: "Убийство в Ориент експрес",
      authors: [{
        _id: ObjectId("665fa1a1e5c4b621bd1a1a17"),
        name: "Агата Кристи",
        nationality: "британски"
      }],
      category: "Криминален",
      price: 14.00,
      stock: 6
    },
    {
      _id: ObjectId("665fa1a1e5c4b621bd1c108"),
      title: "Норвежка гора",
      authors: [{
        _id: ObjectId("665fa1a1e5c4b621bd1a1a18"),
        name: "Харуки Мураками",
        nationality: "японски"
      }],
      category: "Съвременен",
      price: 17.80,
      stock: 9
    },
    {
      _id: ObjectId("665fa1a1e5c4b621bd1c109"),
      title: "Под игото",
      authors: [{
        _id: ObjectId("665fa1a1e5c4b621bd1a1a20"),
        name: "Елин Пелин",
        nationality: "български"
      }],
      category: "Българска литература",
      price: 12.00,
      stock: 11
    },
    {
      _id: ObjectId("665fa1a1e5c4b621bd1c110"),
      title: "Стихотворения",
      authors: [{
        _id: ObjectId("665fa1a1e5c4b621bd1a1a19"),
        name: "Пейо Яворов",
        nationality: "български"
      }],
      category: "Поезия",
      price: 9.50,
      stock: 14
    }
  ]);
  
  
  db.customers.insertMany([
    { _id: ObjectId("665fa1a1e5c4b621bd1a1b01"),
      name: "Иван Петров",
      email: "ivan@mail.com",
      phone: "0888123456",
      address: { city: "София", street: "бул. Витоша 1" } },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1b02"),
      name: "Мария Иванова",
      email: "maria@mail.com",
      phone: "0899123456",
      address: { city: "Пловдив", street: "ул. Централна 3" } },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1b03"),
      name: "Георги Георгиев",
      email: "georgi@mail.com",
      phone: "0877123456",
      address: { city: "Варна", street: "ул. Морска 5" } },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1b04"),
      name: "Десислава Тодорова",
      email: "desi@mail.com",
      phone: "0888123466",
      address: { city: "Русе", street: "бул. Левски 12" } },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1b05"),
      name: "Кирил Николов",
      email: "kiril@mail.com",
      phone: "0888123477",
      address: { city: "Бургас", street: "ул. Свобода 8" } },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1b06"),
      name: "Анна Стоянова",
      email: "anna@mail.com",
      phone: "0888123488",
      address: { city: "Стара Загора", street: "ул. Тракия 15" } },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1b07"),
      name: "Мартин Христов",
      email: "martin@mail.com",
      phone: "0888123499",
      address: { city: "Плевен", street: "ул. Дунав 3" } },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1b08"),
      name: "Силвия Василева",
      email: "silvia@mail.com",
      phone: "0888123500",
      address: { city: "Шумен", street: "ул. Пролет 6" } },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1b09"),
      name: "Борис Александров",
      email: "boris@mail.com",
      phone: "0888123511",
      address: { city: "Перник", street: "ул. Миньор 10" } },
    { _id: ObjectId("665fa1a1e5c4b621bd1a1b10"),
      name: "Теодора Димитрова",
      email: "teodora@mail.com",
      phone: "0888123522",
      address: { city: "Кюстендил", street: "ул. Кирил и Методий 1" } }
  ]);
  
  db.orders.insertMany([
    {
      customerId: ObjectId("665fa1a1e5c4b621bd1a1b01"),
      date: new Date("2025-06-10"),
      books: [
        { bookId: ObjectId("665fa1a1e5c4b621bd1c101"), quantity: 1 },
        { bookId: ObjectId("665fa1a1e5c4b621bd1c102"), quantity: 2 }
      ],
      total: 62.90
    },
    {
      customerId: ObjectId("665fa1a1e5c4b621bd1a1b02"),
      date: new Date("2025-06-11"),
      books: [{ bookId: ObjectId("665fa1a1e5c4b621bd1c103"), quantity: 1 }],
      total: 22.00
    },
    {
      customerId: ObjectId("665fa1a1e5c4b621bd1a1b03"),
      date: new Date("2025-06-12"),
      books: [{ bookId: ObjectId("665fa1a1e5c4b621bd1c104"), quantity: 2 }],
      total: 39.98
    },
    {
      customerId: ObjectId("665fa1a1e5c4b621bd1a1b04"),
      date: new Date("2025-06-13"),
      books: [{ bookId: ObjectId("665fa1a1e5c4b621bd1c106"), quantity: 1 }],
      total: 16.00
    },
    {
      customerId: ObjectId("665fa1a1e5c4b621bd1a1b05"),
      date: new Date("2025-06-14"),
      books: [{ bookId: ObjectId("665fa1a1e5c4b621bd1c105"), quantity: 1 }],
      total: 21.50
    },
    {
      customerId: ObjectId("665fa1a1e5c4b621bd1a1b06"),
      date: new Date("2025-06-15"),
      books: [{ bookId: ObjectId("665fa1a1e5c4b621bd1c108"), quantity: 1 }],
      total: 17.80
    },
    {
      customerId: ObjectId("665fa1a1e5c4b621bd1a1b07"),
      date: new Date("2025-06-16"),
      books: [{ bookId: ObjectId("665fa1a1e5c4b621bd1c107"), quantity: 3 }],
      total: 42.00
    },
    {
      customerId: ObjectId("665fa1a1e5c4b621bd1a1b08"),
      date: new Date("2025-06-17"),
      books: [{ bookId: ObjectId("665fa1a1e5c4b621bd1c110"), quantity: 2 }],
      total: 19.00
    },
    {
      customerId: ObjectId("665fa1a1e5c4b621bd1a1b09"),
      date: new Date("2025-06-18"),
      books: [{ bookId: ObjectId("665fa1a1e5c4b621bd1c109"), quantity: 1 }],
      total: 12.00
    },
    {
      customerId: ObjectId("665fa1a1e5c4b621bd1a1b10"),
      date: new Date("2025-06-19"),
      books: [
        { bookId: ObjectId("665fa1a1e5c4b621bd1c103"), quantity: 1 },
        { bookId: ObjectId("665fa1a1e5c4b621bd1c104"), quantity: 1 }
      ],
      total: 41.99
    }
  ]);
  
  db.reviews.insertMany([
    {
      bookId: ObjectId("665fa1a1e5c4b621bd1c101"),
      customer: {
        name: "Мария Иванова",
        email: "maria@mail.com",
        city: "Пловдив"
      },
      rating: 5,
      comment: "Страхотна книга!",
      date: new Date("2025-06-15")
    },
    {
      bookId: ObjectId("665fa1a1e5c4b621bd1c102"),
      customer: {
        name: "Георги Георгиев",
        email: "georgi@mail.com",
        city: "Варна"
      },
      rating: 4,
      comment: "Интересна, но тежка.",
      date: new Date("2025-06-16")
    },
    {
      bookId: ObjectId("665fa1a1e5c4b621bd1c103"),
      customer: {
        name: "Иван Петров",
        email: "ivan@mail.com",
        city: "София"
      },
      rating: 5,
      comment: "Много дълбоко.",
      date: new Date("2025-06-17")
    },
    {
      bookId: ObjectId("665fa1a1e5c4b621bd1c104"),
      customer: {
        name: "Десислава Тодорова",
        email: "desi@mail.com",
        city: "Русе"
      },
      rating: 5,
      comment: "Любима!",
      date: new Date("2025-06-18")
    },
    {
      bookId: ObjectId("665fa1a1e5c4b621bd1c105"),
      customer: {
        name: "Анна Стоянова",
        email: "anna@mail.com",
        city: "Стара Загора"
      },
      rating: 3,
      comment: "Малко страшна.",
      date: new Date("2025-06-19")
    },
    {
      bookId: ObjectId("665fa1a1e5c4b621bd1c106"),
      customer: {
        name: "Мартин Христов",
        email: "martin@mail.com",
        city: "Плевен"
      },
      rating: 4,
      comment: "Класика!",
      date: new Date("2025-06-20")
    },
    {
      bookId: ObjectId("665fa1a1e5c4b621bd1c107"),
      customer: {
        name: "Силвия Василева",
        email: "silvia@mail.com",
        city: "Шумен"
      },
      rating: 4,
      comment: "Много хитро написано.",
      date: new Date("2025-06-21")
    },
    {
      bookId: ObjectId("665fa1a1e5c4b621bd1c108"),
      customer: {
        name: "Борис Александров",
        email: "boris@mail.com",
        city: "Перник"
      },
      rating: 5,
      comment: "Невероятно написано!",
      date: new Date("2025-06-22")
    }
  ]);
  