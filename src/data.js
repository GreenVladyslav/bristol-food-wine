// import icons
import { FaYoutube, FaFacebookF, FaInstagram, FaPinterestP, FaDiscord } from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';

import MenuImg1 from '../src/assets/img/menu/first.png';
import MenuImg2 from '../src/assets/img/menu/second.png';
import MenuImg3 from '../src/assets/img/menu/third.png';
import MenuImg4 from '../src/assets/img/menu/fourth.png';

import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

import MenuPhoto1 from '../src/assets/img/menu/photo_1.jpg';
import MenuPhoto2 from '../src/assets/img/menu/photo_2.jpg';
import MenuPhoto3 from '../src/assets/img/menu/photo_3.jpg';
import MenuPhoto4 from '../src/assets/img/menu/photo_4.jpg';
import MenuPhoto5 from '../src/assets/img/menu/photo_5.jpg';
import MenuPhoto6 from '../src/assets/img/menu/photo_6.jpg';
import MenuPhoto7 from '../src/assets/img/menu/photo_7.jpg';
import MenuPhoto8 from '../src/assets/img/menu/photo_8.jpg';
import MenuPhoto9 from '../src/assets/img/menu/photo_9.jpg';
import MenuPhoto10 from '../src/assets/img/menu/photo_10.jpg';

import HistoryImg1 from '../src/assets/img/history/history_1.png';
import HistoryImg2 from '../src/assets/img/history/history_2.png';
import HistoryImg3 from '../src/assets/img/history/history_3.png';

export const menuPhoto = [
  MenuPhoto1,
  MenuPhoto2,
  MenuPhoto3,
  MenuPhoto4,
  MenuPhoto5,
  MenuPhoto6,
  MenuPhoto7,
  MenuPhoto8,
  MenuPhoto9,
  MenuPhoto10,
];

export const navData = [
  { href: '#', name: 'Головна' },
  { href: '#about', name: 'Про нас' },
  { href: '#menu', name: 'Меню' },
  { href: '#team', name: 'Команда' },
  { href: '#testimonial', name: 'Відгуки' },
  { href: '#resrvation', name: 'Замовити столик' },
  { href: '#contact', name: 'Контакти' },
];

export const historyData = [HistoryImg1, HistoryImg2, HistoryImg3];

export const mainData = {
  pretitle: 'Ніщо так не зближує як',
  title: 'Bristol',
  subtitle: 'Найсмачніша кухня біля твого дому❤️',
  btnText: 'Дізнатися більше',
};

export const socialData = [
  { href: '/', icon: <FaYoutube /> },
  { href: 'https://www.facebook.com/epiceriefinebenelux/', icon: <FaFacebookF /> },
  {
    href: 'https://www.instagram.com/bristol_food_and_wine/?igshid=MzRlODBiNWFlZA%3D%3D',
    icon: <FaInstagram />,
  },
  { href: '/', icon: <FaPinterestP /> },
  { href: '/', icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: 'Наша історія',
  title: 'хто ми',
  subtitle:
    'Ласкаво просимо до Bristol FOOD & WINE, кулінарної перлини, розташованої в самому серці Нової Англії, жвавого житлового комплексу. Наш ресторан став улюбленим місцем, де пропонують чудове поєднання вишуканої їжі та вишуканих вин. Увійшовши через наші двері, ви відкриєте для себе теплу та привабливу атмосферу, яка ніби є продовженням вашого власного дому. Наша історія переплітається з історіями наших відданих меценатів, які пережили незліченну кількість пам’ятних моментів у цих стінах. Приєднуйтесь до нас у гастрономічній подорожі, яка прославляє дух спільноти та любов до смачної їжі.',
  btnText: 'дізнатися більше',
  image: AboutImg,
};

export const menuData = {
  title: 'Смачний аромат осені',
  subtitle: 'Перегляньте все меню, щоб смачно поїсти сьогодні',
  modelImg: ModelWhiteImg,
  btnText: 'переглянути повне меню',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Удон з телятиною 🌶️',
      price: '228 ₴',
      description: 'Локшина пшенична, телятина, цибуля ріпчаста',
    },
    {
      image: MenuImg2,
      name: 'Єль-Вандон ☀️',
      price: '249 ₴',
      description: 'Сир фета в беконі з міксом салату, полуницею та ягідним соусом 🍓',
    },
    {
      image: MenuImg3,
      name: 'Стейк зі свинини',
      price: '339 ₴',
      description: 'З полуницею чілі 🌶️ та соусом дор блю',
    },
    {
      image: MenuImg4,
      name: 'Канелоні з куркою',
      price: '199 ₴',
      description: 'З білими грибами під сирним соусом 🧀',
    },
  ],
};

export const teamData = {
  pretitle: 'Наша команда',
  title: 'Зустрічайте нашого шеф-кухаря',
  sub1: 'У Bristol FOOD & WINE наші кулінарні твори організовані талановитим і пристрасним шеф-кухарем. З глибокою любов’ю до їжі та чуттям до творчості наш шеф-кухар майстерно поєднує смаки та текстури, щоб створити надзвичайні страви, які залишають незабутнє враження.',
  sub2: 'Приєднуйтесь до нас у гастрономічній подорожі, оскільки наш шеф-кухар проведе вас у кулінарній пригоді, наповненій інноваційними смаками та чудовими сюрпризами.',
  name: 'Эктор Хименес-Браво',
  occupation: 'Виконавчий директор',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: 'Що говорять клієнти',
  subtitle: '1500+ задоволених клієнтів',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Коли справа доходить до вишуканої кухні, Bristol FOOD & WINE виділяється справжньою перлиною. З того моменту, як ви зайшли, ви захоплюєтеся елегантною атмосферою та увагою до деталей. Затишна атмосфера ресторану в поєднанні з бездоганним обслуговуванням створюють умови для незабутнього обіду.',
      image: Avatar1,
      name: 'Ольга М.',
      occupation: 'Засновник Кулінарної Академії',
    },
    {
      message:
        'Bristol FOOD & WINE володіє мистецтвом приготування стейків. Кожен шматочок - це насолода, з ніжним і соковитим смаком, який залишає незабутнє враження. Любителі м’яса обов’язково повинні спробувати їх стейки, від класичних нарізок до унікальних фірмових страв.',
      image: Avatar2,
      name: 'Євген К.',
      occupation: 'Шеф повар',
    },
    {
      message:
        'Bristol FOOD & WINE - це свято для почуттів. Спокусливі аромати, візуально приголомшливі презентації та вишукані смаки створюють симфонію насолоди. Незалежно від того, чи це романтична вечеря, чи особливе свято, насолоджуйтесь неперевершеними гастрономічними враженнями.',
      image: Avatar3,
      name: 'Володимир Я.',
      occupation: 'Дизайнер',
    },
  ],
};

export const reservationData = {
  title: 'форма бронювання',
  subtitle:
    'Телефонуйте за номером +380 68 714-42-42 щодня з 9:00 до 21:00 або бронюйте онлайн. Бронювання потрібне для вечірок із 6 і більше осіб.',
  modelImg: ModelBlackImg,
  btnText: 'забронювати',
};

export const newsletterData = {
  title: 'приєднатися до нашої розсилки',
  subtitle: 'Отримуйте останні новини та оновлення на свою поштову скриньку.',
  placeholder: 'Підпишіться на наші смачні страви',
  btnText: 'підписатися',
};

export const footerData = {
  contact: {
    title: 'Контакти',
    address: '📍Київ, вул. Михайла Максимовича, 24б',
    phone: '📞+80 68 714-42-42',
  },
  hours: {
    title: 'робочі години',
    program: [
      {
        days: "понеділок - п'ятниця",
        hours: '9:00 до 21:00 ',
      },
      {
        days: 'субота - неділя',
        hours: '9:00 до 21:00',
      },
    ],
  },
  social: {
    title: 'соціальні мережі',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: 'https://www.facebook.com/epiceriefinebenelux/', icon: <FaFacebookF /> },
      {
        href: 'https://www.instagram.com/bristol_food_and_wine/?igshid=MzRlODBiNWFlZA%3D%3D',
        icon: <FaInstagram />,
      },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
    ],
  },
};
