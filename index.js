let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

const res = ([min, max]) => courses.filter(({ prices }) => {
  // получаем мин и макс цены
  let [n, x] = prices;
  // проверка на входящие параметры диапазоны и вывод всех элементов
  if ([min, max].includes(null)) return [n, x]
  // проверка на null если истина то присваиваем мин и макс диапазон числа
  n = n === null ? +min : n;
  x = x === null ? max : x;
  x = x < n ? n : x;
  // проверка на входящие параметры на null макс и мин числа диапазоны что бы сортировать по мин или макс цен
  if (max === null) return n >= min || x >= min
  if (min === null) return x <= max || n <= max
  // проверяем если первый(второй) элемент входит в диапазон то выводим
  return (n >= min && n <= max) || (x >= min && x <= max)
});

const arr = [];
courses.forEach(({prices}) => arr.push(...prices));
const max = Math.max(...arr);
const min = Math.min(...arr);
const sor = courses.sort((a, b, arr) => {
  b.prices[0] = b.prices[0] === null ? min : b.prices[0];
  b.prices[1] = b.prices[1] === null ? max : b.prices[1];
  return a.prices[0] - b.prices[0] && a.prices[1] - b.prices[1]
})

console.log(res([null,200]))
console.log(res([300, 350]))
console.log(res([200, null]))
console.log(res([null, null]))

console.log(sor)
