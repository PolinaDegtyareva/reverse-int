module.exports = function reverse(n) {
  //* проверить на отрицатльное число 
  if (n < 0) { 
    //* преобразовать из отрицательного в положительное 
    n = Math.abs(n); 
    //* преобразовать n в строку - 'n'
    //* разбить строку на массив подстрок - ['n', 'n', 'n',...]
    //* перевернуть массив
    //* объединить элементы массива ['nnnn']
    n = n.toString().split('').reverse().join(''); 
    //* преобразовать строку в число - 'n' --> n
    n = Number(n);

    return n;
  }

  n = n.toString().split('').reverse().join('');
  n = Number(n);

  return n;
}
