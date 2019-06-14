// 1. Create a collection of products
// 2. Order products by price
// 3 Extract unique products by Code
// 4. Add tax 10% to each products
// 5. Calculate totoal price of all products

const _ = require('./lodash.js')

let products = [
  {
    name: 'Peanuts',
    price: 2,
    code: 000
  },
  {
    name: 'M&M',
    price: 5,
    code: 001
  },
  {
    name: 'Snickers',
    price: 3,
    code: 001
  },
  {
    name: 'Bounty',
    price: 1,
    code: 001
  },
  {
    name: 'Banana',
    price: 7,
    code: 000
  },
  {
    name: 'tv',
    price: 160,
    code: 010
  },
  {
    name: 'bike',
    price: 300,
    code: 012
  },
  {
    name: 'X-Box',
    price: 220,
    code: 010
  },
]

let order_prod = _.orderBy(products, 'price')
let unique_code = _.uniqBy(products, 'code')
let add_disc = _.map(products, (p) => {
  return {
    name: p.name,
    price: p.price * 1.1,
    code: p.code
  }
})
let total_prod = _.sumBy(products, 'price')

console.log('order_prod:', order_prod, 'unique_code:', unique_code, 'add_disc:', add_disc, 'total_prod:', total_prod)
