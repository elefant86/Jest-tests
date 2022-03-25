const arrayFilter = require('./task/task-02');

describe(
  // описание тесткейса идет первым параметром
  'Фильтруем массив',
  // функция, в которой содержится тест и прочее, что нам необходимо
  () => {
    const testCases = [
      {
        // названия ключей могуть быть любыми
        in: [0, 1, 2, 3, 4],
        expected: [0, 2, 4]
      },
      {
        in: [true, false, true, false, true, false],
        expected: [true, true, true]
      },
    ];
    testCases.forEach(test => {
      // it - это alias для test() - служебная команда, которая говорит, что мы начали тест
      it(
        // первый аргумент теста - это сообщение
        `in : ${test.in} expected : ${test.expected}`,
        // второй аргумент - функция, которая описывает тест
        () => {
          // получаю фильтр, который написал (саму функцию, которая тестируется) и в него закидываем массив для тестирования test.in. Результат присваиваю в res
          const res = arrayFilter(test.in);
          // после этого вызываю метод expect, в который передается res и метод toEqual, который используется для сравнения объектов и массивов
          expect(res).toEqual(test.expected);
        }
      )
    });
  }
)
