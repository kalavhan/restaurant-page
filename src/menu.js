const createElementMenu = (title, price) => {
  const itemContainer = document.createElement('tr');
  const itemName = document.createElement('td');
  itemName.innerHTML = title;
  const itemPrice = document.createElement('td');
  itemPrice.innerHTML = price;
  itemContainer.appendChild(itemName);
  itemContainer.appendChild(itemPrice);
  return itemContainer;
}

const createMenu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.id = "menuContainer";
  const starters = document.createElement('div');
  const startersTitle = document.createElement('h2');
  startersTitle.innerHTML = 'Starters';
  starters.appendChild(startersTitle);
  const startersTable = document.createElement('table');
  startersTable.appendChild(createElementMenu('Tomato soup', '$ 2.00'));
  startersTable.appendChild(createElementMenu('French onion soup', '$ 2.50'));
  startersTable.appendChild(createElementMenu('Tomato salad', '$ 2.90'));
  startersTable.appendChild(createElementMenu('Chicken salad', '$ 3.30'));
  starters.appendChild(startersTable);
  const mainCourse = document.createElement('div');
  const mainCourseTitle = document.createElement('h2');
  mainCourseTitle.innerHTML = 'Main course';
  mainCourse.appendChild(mainCourseTitle);
  const mainCourseTable = document.createElement('table');
  mainCourseTable.appendChild(createElementMenu('German sausage and chips', '$ 6.50'));
  mainCourseTable.appendChild(createElementMenu('Grilled fish and potatoes', '$ 2.00'));
  mainCourseTable.appendChild(createElementMenu('Italian cheese & tomato pizza', '$ 4.85'));
  mainCourseTable.appendChild(createElementMenu('Thai chicken and rice', '$ 5.95'));
  mainCourseTable.appendChild(createElementMenu('Vegetable pasta', '$ 4.85'));
  mainCourse.appendChild(mainCourseTable);
  const desserts = document.createElement('div');
  const dessertsTitle = document.createElement('h2');
  dessertsTitle.innerHTML = 'Desserts';
  desserts.appendChild(dessertsTitle);
  const dessertsTable = document.createElement('table');
  dessertsTable.appendChild(createElementMenu('Fruit salad and cream', '$ 2.25'));
  dessertsTable.appendChild(createElementMenu('Ice cream', '$ 2.00'));
  dessertsTable.appendChild(createElementMenu('Lemon cake', '$ 2.25'));
  dessertsTable.appendChild(createElementMenu('Chocolate cake', '$ 2.25'));
  dessertsTable.appendChild(createElementMenu('Cheese and biscuits', '$ 2.50'));
  desserts.appendChild(dessertsTable);
  menuContainer.appendChild(starters);
  menuContainer.appendChild(mainCourse);
  menuContainer.appendChild(desserts);
  document.getElementById('homeBtn').classList.remove('active');
  document.getElementById('contactBtn').classList.remove('active');
  document.getElementById('menuBtn').classList.add('active');
  return menuContainer;
}

export default createMenu;