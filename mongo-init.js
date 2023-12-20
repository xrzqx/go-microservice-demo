db = db.getSiblingDB('product');
db.createUser(
    {
        user: "xrzqx-c",
        pwd: "xrzqx-c",
        roles: [
            {
                role: "readWrite",
                db: "product"
            }
        ]
    }
);
db.productCollection.insert({ key: 'test' });