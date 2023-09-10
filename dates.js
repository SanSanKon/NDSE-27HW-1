const yargs = require('yargs');

//Инициализируем основные перменные
const currentDateAndTime = new Date().toISOString();
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1; //Поскольку месяцы начниаются с 0
const currentDate = new Date().getDate();

// Получение текущей даты и времени в формате ISO
yargs.command({
  command: 'current',
  describe: 'Get the current date and time in ISO format',
  handler: () => {
    console.log(currentDateAndTime);
  },
});

// Получение текущего года
yargs.command({
  command: 'year',
  describe: 'Get the current year',
  handler: () => {
    console.log(currentYear);
  },
});

// Получение текущего месяца
yargs.command({
  command: 'month',
  describe: 'Get the current month',
  handler: () => {
    console.log(currentMonth);
  },
});

// Получение текущей даты в календарном месяце
yargs.command({
  command: 'date',
  describe: 'Get the current date in the calendar month',
  handler: () => {
    console.log(currentDate);
  },
});

// Добавление дней или месяцев к текущей дате и времени
yargs.command({
  command: 'add',
  describe: 'Add days or months to the current date and time',
  builder: {
    d: {
      alias: 'days',
      describe: 'Number of days to add',
      type: 'number',
    },
    m: {
      alias: 'months',
      describe: 'Number of months to add',
      type: 'number',
    },
  },
  handler: (argv) => {
    const { days, months } = argv;
    const currentDate = new Date();

    if (days) {
      currentDate.setDate(currentDate.getDate() + days);
    }

    if (months) {
      currentDate.setMonth(currentDate.getMonth() + months);
    }

    const result = currentDate.toISOString();
    console.log(result);
  },
});

// Вычитание дней или месяцев из текущей даты и времени
yargs.command({
  command: 'sub',
  describe: 'Subtract days or months from the current date and time',
  builder: {
    d: {
      alias: 'days',
      describe: 'Number of days to subtract',
      type: 'number',
    },
    m: {
      alias: 'months',
      describe: 'Number of months to subtract',
      type: 'number',
    },
  },
  handler: (argv) => {
    const { days, months } = argv;
    const currentDate = new Date();

    if (days) {
      currentDate.setDate(currentDate.getDate() - days);
    }

    if (months) {
      currentDate.setMonth(currentDate.getMonth() - months);
    }

    const result = currentDate.toISOString();
    console.log(result);
  },
});

yargs.argv;
