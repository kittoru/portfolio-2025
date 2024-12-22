import Simple from '../../Shared/assets/simple.jpg';
import Coca from '../../Shared/assets/coca.jpg';
import Gifts from '../../Shared/assets/gifts.jpg';
import Todo from '../../Shared/assets/todo.jpg';
import Weather from '../../Shared/assets/weather.jpg';


export const technologyArr = [
  {
    id: 1,
    name: 'Simple',
    description: 'Данный проект является обычным одностраничным лендингом с адаптивом.',
    img: Simple,
    technology: ['HTML', 'CSS', 'JS'],
    link: 'https://kittoru.github.io/Simple/'
  },
  {
    id: 2,
    name: 'Coca',
    description: 'Данный проект является обычным одностраничным лендингом с адаптивом.',
    img: Coca,
    technology: ['HTML', 'CSS', 'JS'],
    link: 'https://kittoru.github.io/Coca/'
  },
  {
    id: 3,
    name: 'The gifts',
    description: 'Данный проект был выполнен во время прохождения курса RS School. Проект был разработан в соответствие с ТЗ.',
    img: Gifts,
    technology: ['HTML', 'CSS', 'JS'],
    link: 'https://rolling-scopes-school.github.io/kittoru-JSFE2024Q4/christmas-shop/index.html'
  },
  {
    id: 4,
    name: 'Weather',
    description: 'Данный проект был разработан на React. Данные о погоде берутся из OpenWeatherMap.',
    img: Weather,
    technology: ['ReactJS', 'Redux Toolkit', 'FSD', 'axios', 'SCSS', 'Vite'],
    link: 'https://kittoru.github.io/weather-redux/'
  },
  {
    id: 5,
    name: 'Todo',
    description: 'Данный проект был разработан на React. В нём реализованы базовые функции CRUD.',
    img: Todo,
    technology: ['ReactJS', 'FSD', 'Redux Toolkit', 'SCSS'],
    link: 'https://kittoru.github.io/Todo-List/'
  },
]