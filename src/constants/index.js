import {
  web,
  uiux,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  threejs,
  bootstrap,
  sass,
  cypress,
  leanSoft,
  drivenSchool,
  leon,
  kasper,
  gameworld,
  dragindrop,
  rockpaperscissors,
  weather,
  productfiltering,
  socialmedia,
  channelgenerator,
  searchme,
  hangman,
  imagegallery,
  expensetracker,
  foodrecipe,
  netflix,
  tinypng,
  manage,
  gpt3,
  hoobank,
  shoppingts,
  shopping,
  testing,
  gericht,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'UI/UX Integration',
    icon: uiux,
  },
  {
    title: 'Testing and Debugging',
    icon: testing,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Sass',
    icon: sass,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Cypress',
    icon: cypress,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Intern in the IT department',
    company_name: 'LeanSoft',
    icon: leanSoft,
    iconBg: '#E6DEDD',
    date: 'Jul 2023 - Aug 2023',
    points: [
      'Participate in the design and development of a red fruit farm management system with Odoo.',
      'Monitor internal projects on a daily basis.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React.js Developer',
    company_name: 'Driven School',
    icon: drivenSchool,
    iconBg: '#E6DEDD',
    date: 'Apr 2024 - Jun 2024',
    points: [
      'Implementation of a web application for attendance management.',
      'Support for the requirements specification.',
      'Drafting of the detailed functional design document.',
      'Development realization.',
      'Perform integration and E2E testing.',
    ],
  },
];

const projects = [
  {
    name: 'Leon Template',
    description: 'The Leon super creative & minimal agency web template.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
    ],
    image: leon,
    source_code_link: 'https://github.com/mr-kasper/HTML_And_CSS_Template_Leon',
    live_demo_link: 'https://mr-kasper.github.io/HTML_And_CSS_Template_Leon/',
  },
  {
    name: 'Kasper Template',
    description: 'The Kasper art maker web template.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
    ],
    image: kasper,
    source_code_link:
      'https://github.com/mr-kasper/HTML_And_CSS_Template_Kasper',
    live_demo_link: 'https://mr-kasper.github.io/HTML_And_CSS_Template_Kasper/',
  },
  {
    name: 'Game World Template',
    description: 'The Game World template.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
    ],
    image: gameworld,
    source_code_link:
      'https://github.com/mr-kasper/HTML_And_CSS_Template_Game_World',
    live_demo_link:
      'https://mr-kasper.github.io/HTML_And_CSS_Template_Game_World/',
  },
  {
    name: 'Drag in Drop',
    description: 'Website for collecting draggable items.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
    ],
    image: dragindrop,
    source_code_link: 'https://github.com/mr-kasper/Drag_in_Drop',
  },
  {
    name: 'Rock Paper Scissors Game',
    description: 'Website for playing Rock Paper Scissors.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
    ],
    image: rockpaperscissors,
    source_code_link: 'https://github.com/mr-kasper/Rock_Paper_Scissors',
    live_demo_link: 'https://mr-kasper.github.io/Rock_Paper_Scissors/',
  },
  {
    name: 'Weather App',
    description: 'Website for getting weather information.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
    ],
    image: weather,
    source_code_link: 'https://github.com/mr-kasper/Vanilla_Weather_App',
    live_demo_link: 'https://mr-kasper.github.io/Vanilla_Weather_App/',
  },
  {
    name: 'Product Filtering',
    description: 'Website for filtering products by category, search.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
    ],
    image: productfiltering,
    source_code_link: 'https://github.com/mr-kasper/Vanilla_Product_Filtering',
    live_demo_link: 'https://mr-kasper.github.io/Vanilla_Product_Filtering/',
  },
  {
    name: 'Social Media Dashboard',
    description: 'Website for social media dashboard with light and dark mode.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
    ],
    image: socialmedia,
    source_code_link: 'https://github.com/mr-kasper/Social_Media_Dashboard',
    live_demo_link: 'https://mr-kasper.github.io/Social_Media_Dashboard/',
  },
  {
    name: 'Channel Name Generator',
    description: 'Website for Youtube channel name generator.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
    ],
    image: channelgenerator,
    source_code_link: 'https://github.com/mr-kasper/Channel_Name_Generator',
    live_demo_link: 'https://mr-kasper.github.io/Channel_Name_Generator/',
  },
  {
    name: 'Search App',
    description: 'Website for searching using Wikipedia API.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
    ],
    image: searchme,
    source_code_link: 'https://github.com/mr-kasper/Search_App',
    live_demo_link: 'https://mr-kasper.github.io/Search_App/',
  },
  {
    name: 'Hangman Game',
    description: 'Website for Hangman Game by guessing words.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: hangman,
    source_code_link: 'https://github.com/mr-kasper/react-hangman',
    live_demo_link: 'https://mr-kasper.github.io/react-hangman/',
  },
  {
    name: 'Image Gallery',
    description: 'Website for searching images.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: imagegallery,
    source_code_link: 'https://github.com/mr-kasper/react-image-gallery',
    live_demo_link: 'https://mr-kasper.github.io/react-image-gallery/',
  },
  {
    name: 'Expense Tracker',
    description: 'Website for tracking expenses.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: expensetracker,
    source_code_link: 'https://github.com/mr-kasper/react-expense-tracker',
    live_demo_link: 'https://mr-kasper.github.io/react-expense-tracker/',
  },
  {
    name: 'Food Recipe App',
    description: 'Website for searching food recipes.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: foodrecipe,
    source_code_link: 'https://github.com/mr-kasper/React-Food-Recipe-App',
    live_demo_link: 'https://mr-kasper.github.io/React-Food-Recipe-App/',
  },
  {
    name: 'Netflix Clone',
    description: 'Website for movies, tv shows and their trailer.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
    ],
    image: netflix,
    source_code_link: 'https://github.com/mr-kasper/Netflix_Clone',
    live_demo_link: 'https://mr-kasper.github.io/Netflix_Clone/',
  },
  {
    name: 'TinyPNG Clone',
    description: 'Website for compressing PNG and JPG images.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
    ],
    image: tinypng,
    source_code_link: 'https://github.com/mr-kasper/tinypng_Clone',
    live_demo_link: 'https://tinypngclone.netlify.app/',
  },
  {
    name: 'Manage Landing Page',
    description: 'Landing page for a management of plan day-to-day tasks.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
    ],
    image: manage,
    source_code_link: 'https://github.com/mr-kasper/tailwind_manage_landing',
    live_demo_link: 'https://mr-kasper.github.io/tailwind_manage_landing/',
  },
  {
    name: 'Gericht Restaurant Landing Page',
    description: 'Landing page for a restaurant.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: gericht,
    source_code_link: 'https://github.com/mr-kasper/react_gerich_restaurant',
    live_demo_link: 'https://mr-kasper.github.io/react_gerich_restaurant/',
  },
  {
    name: 'GPT3 JSM Template',
    description: 'Website for GPT3 landing page.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: gpt3,
    source_code_link: 'https://github.com/mr-kasper/react-gpt3-jsm-template',
    live_demo_link: 'https://mr-kasper.github.io/react-gpt3-jsm-template/',
  },
  {
    name: 'HooBank Template',
    description: 'Landing page for HooBank.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: hoobank,
    source_code_link: 'https://github.com/mr-kasper/react-HooBank',
    live_demo_link: 'https://mr-kasper.github.io/react-HooBank/',
  },
  {
    name: 'Shopping Cart',
    description: 'Website for shopping.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: shoppingts,
    source_code_link:
      'https://github.com/mr-kasper/react-typescript-shopping-cart',
    live_demo_link:
      'https://mr-kasper.github.io/react-typescript-shopping-cart/',
  },
  {
    name: 'Shopping Cart',
    description: 'Website for shopping with Redux.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'orange-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: shopping,
    source_code_link: 'https://github.com/mr-kasper/react-shopping-cart-app',
    live_demo_link: 'https://mr-kasper.github.io/react-shopping-cart-app/',
  },
];

export { services, technologies, experiences, projects };
