db.books.find();

db.books.find({ category: "Класика" });

db.books.find({ category: "Класика", price: { $lt: 30 } });

db.authors.find();

db.authors.find({ nationality: "британски" });

db.authors.find({ nationality: "руски", birthYear: { $lt: 1900 } });

db.customers.find();

db.customers.find({ "address.city": "София" });

db.customers.find({ 
  "address.city": "София",
  phone: { $regex: "^0888" }
});

db.orders.find();

db.orders.find({ customerId: ObjectId("665fa1a1e5c4b621bd1a1b01") });

db.orders.find({ 
  customerId: ObjectId("665fa1a1e5c4b621bd1a1b01"),
  date: { $gte: ISODate("2025-06-01") }
});

db.reviews.find();

db.reviews.find({ rating: 5 });

db.reviews.find({ 
  bookId: ObjectId("665fa2b2e5c4b621bd1a2a12"), 
  rating: { $gt: 3 }
});

db.books.updateOne({ title: "1984" }, { $inc: { stock: -1 } });

db.reviews.deleteOne({ rating: { $lte: 2 } });

db.books.aggregate([
  { $group: { _id: "$category", totalStock: { $sum: "$stock" } } }
]);

db.reviews.aggregate([
  { $group: { _id: "$bookId", avgRating: { $avg: "$rating" } } }
]);

db.orders.aggregate([
  { $match: { customerId: ObjectId("665fa1a1e5c4b621bd1a1b01") } },
  { $sort: { date: -1 } }
]);
