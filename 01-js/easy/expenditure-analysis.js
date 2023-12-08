/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let obj = {};
  for(let i=0;i<transactions.length;i++) {
    let category = transactions[i].category;
    let price = transactions[i].price;
    if(category in obj) {
      obj[category] += price;
    } else {
      obj[category] = price;
    }
  }
  let arr = [];
  for(let key in obj) {
    arr.push({category : key, totalSpent : obj[key]});
  }
  // console.log(arr);
  return arr;
}

module.exports = calculateTotalSpentByCategory;
