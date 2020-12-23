## How to install

1. Clone the project

```
git clone https://github.com/kajohnsakk/purchase-api.git
```

2. Install npm dependencies

```
cd purchase-api
npm i
```

3. Run server

```
npm run start:watch
```
Server will running with port 3000

** I made json file for example db

```
src/db/purchase.json
```

## API

1. Get purchase transactions

```
GET http://localhost:3000/api/v1/purchases
```

2. Insert purchase transaction

```
POST http://localhost:3000/api/v1/purchases
body: 
{
  "item_list":[
	{ "id":1, "qty": 1, "price_per_item":1, "discount":"10%"},
	{ "id":2,"qty":2,"price_per_item":3,"discount":"1%" },
	{ "id":3,"qty":3,"price_per_item":4,"discount":"5%" },
	{ "id":4,"qty":6,"price_per_item":2,"discount":"2%" },
	{ "id":5,"qty":1,"price_per_item":100,"discount":"3%" }
  ],
  "total_discount": "10%",
  "payment": 300
}
```
