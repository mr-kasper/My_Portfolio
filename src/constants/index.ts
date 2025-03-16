import {
  web,
  uiux,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  // redux,
  tailwind,
  git,
  // bootstrap,
  // sass,
  cypress,
  drizzle,
  mysql,
  nodejs,
  postgresql,
  prisma,
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
  booking,
  notes,
  calendly,
  admin,
  expense,
  storycareer,
  crs,
  whatsapp,
  storeit,
  ycdirectory,
} from '../../public/assets';

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
    id: 'projects',
    title: 'Projects',
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
    name: 'Next.js',
    icon: nextjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Sass',
  //   icon: sass,
  // },
  // {
  //   name: 'Bootstrap',
  //   icon: bootstrap,
  // },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Cypress',
    icon: cypress,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'Drizzle ORM',
    icon: drizzle,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Prisma',
    icon: prisma,
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
    name: 'StoreIt',
    description:
      'A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with the latest Next.js 15 and the Appwrite Node SDK, utilizing advanced features for seamless file management.',
    tags: [
      { name: 'next.js', color: 'pink-text-gradient' },
      { name: 'appwrite', color: 'green-text-gradient' },
      { name: 'tailwindcss', color: 'pink-text-gradient' },
    ],
    image: storeit,
    source_code_link: 'https://github.com/mr-kasper/Store_It',
    live_demo_link: 'https://store-it-liard-alpha.vercel.app/',
  },
  {
    name: 'Computer Repair Shop',
    description:
      'A computer repair management platform optimizing ticket tracking, customer management, and technician assignments. Scaled to handle multiple repair shops and thousands of service requests, reducing resolution time and improving workflow efficiency.',
    tags: [
      { name: 'next.js', color: 'pink-text-gradient' },
      { name: 'neon', color: 'green-text-gradient' },
      { name: 'drizzle', color: 'orange-text-gradient' },
    ],
    image: crs,
    source_code_link: 'https://github.com/mr-kasper/repairShop',
    live_demo_link: 'https://repair-shop-eight.vercel.app/',
  },
  {
    name: 'WhatsApp Clone',
    description:
      'A real-time messaging platform with voice/video calls, group chats, file sharing, and secure authentication, delivering a seamless communication experience. Designed for high concurrency, ensuring smooth performance even with a large number of active users.',
    tags: [
      { name: 'next.js', color: 'pink-text-gradient' },
      { name: 'convex', color: 'green-text-gradient' },
      { name: 'zegoCloud', color: 'orange-text-gradient' },
    ],
    image: whatsapp,
    source_code_link: 'https://github.com/mr-kasper/whatsapp-clone',
    live_demo_link: 'https://whatsapp-clone-alpha-seven.vercel.app/',
  },
  {
    name: 'StoryCareer',
    description:
      'A career story-sharing platform where users can share experiences, discover professional journeys, save stories, and create profiles, fostering community engagement and inspiration. Integrated with highly scalable database architecture, handling user-generated content efficiently.',
    tags: [
      { name: 'next.js', color: 'pink-text-gradient' },
      { name: 'neon', color: 'green-text-gradient' },
      { name: 'prisma', color: 'blue-text-gradient' },
    ],
    image: storycareer,
    source_code_link: 'https://github.com/mr-kasper/storycareer',
    live_demo_link: 'https://storycareer-khaki.vercel.app/',
  },
  {
    name: 'Modern Startup Directory',
    description:
      'A modern startup directory platform allows entrepreneurs to submit their startup ideas, connect with investors, and discover innovative projects. Built with the latest web technologies, it offers a seamless user experience with a clean, minimalist design.',
    tags: [
      { name: 'next.js', color: 'pink-text-gradient' },
      { name: 'sanity CMS', color: 'green-text-gradient' },
      { name: 'tailwindcss', color: 'blue-text-gradient' },
    ],
    image: ycdirectory,
    source_code_link: 'https://github.com/mr-kasper/yc-startup-directory',
    live_demo_link: 'https://yc-startup-directory-eta.vercel.app/',
  },
  {
    name: 'Bookit',
    description:
      'An innovative platform designed for effortless room reservations, featuring real-time updates and streamlined workflows to deliver a seamless booking experience.',
    tags: [
      { name: 'next.js', color: 'pink-text-gradient' },
      { name: 'appwrite', color: 'green-text-gradient' },
      { name: 'tailwindcss', color: 'blue-text-gradient' },
    ],
    image: booking,
    source_code_link: 'https://github.com/mr-kasper/booking_app',
    live_demo_link: 'https://mrkasper-booking-app.netlify.app/',
  },
  {
    name: 'Taking Notes',
    description:
      'A Markdown-enabled note management platform that simplifies content organization with rich formatting capabilities. Achieved a 40% increase in user retention through intuitive design and user-friendly features.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'bootstrap', color: 'pink-text-gradient' },
      { name: 'typescript', color: 'orange-text-gradient' },
    ],
    image: notes,
    source_code_link: 'https://github.com/mr-kasper/react-note-taking-app',
    live_demo_link: 'https://react-take-note.netlify.app/',
  },
  {
    name: 'Calendly Clone',
    description:
      'Recreated the Calendly platform to provide seamless scheduling and calendar management. Implemented features such as event creation, calendar integration, and real-time availability updates, offering users an intuitive and efficient way to manage their appointments.',
    tags: [
      { name: 'next.js', color: 'blue-text-gradient' },
      { name: 'tailwindcss', color: 'pink-text-gradient' },
      { name: 'typescript', color: 'orange-text-gradient' },
      { name: 'neon', color: 'green-text-gradient' },
      { name: 'drizzle', color: 'blue-text-gradient' },
    ],
    image: calendly,
    source_code_link: 'https://github.com/mr-kasper/nextjs-calendly-clone',
    live_demo_link: 'https://calendly-cloner.netlify.app/',
  },
  {
    name: 'TraversyPress',
    description:
      'A front-end admin dashboard interface created using Next.js. The dashboard features a responsive and intuitive design, providing essential admin functionalities. Data is simulated through static files, making it an ideal starting point for further backend integration.',
    tags: [
      { name: 'next.js', color: 'blue-text-gradient' },
      { name: 'tailwindcss', color: 'pink-text-gradient' },
      { name: 'typescript', color: 'orange-text-gradient' },
      { name: 'shadcn/ui', color: 'green-text-gradient' },
    ],
    image: admin,
    source_code_link: 'https://github.com/mr-kasper/nextjs_admin_dashboard',
    live_demo_link: 'https://admin-dashboard-ui-plum.vercel.app/',
  },
  {
    name: 'Expense Tracker',
    description:
      'An intuitive app designed to help users monitor their financial activities. Effortlessly track both income and expenses, providing a clear snapshot of your financial health and helping you manage your budget with ease.',
    tags: [
      { name: 'next.js', color: 'blue-text-gradient' },
      { name: 'typescript', color: 'orange-text-gradient' },
      { name: 'neon', color: 'pink-text-gradient' },
      { name: 'clerk', color: 'green-text-gradient' },
    ],
    image: expense,
    source_code_link: 'https://github.com/mr-kasper/nextjs-expense-tracker',
    live_demo_link: 'https://nextjs-expense-tracker-rho.vercel.app/',
  },
  {
    name: 'Leon Template',
    description:
      'A modern, minimalist agency web template offering responsive layouts and optimized performance to ensure seamless user experiences.',
    tags: [
      { name: 'html', color: 'orange-text-gradient' },
      { name: 'css', color: 'blue-text-gradient' },
    ],
    image: leon,
    source_code_link: 'https://github.com/mr-kasper/HTML_And_CSS_Template_Leon',
    live_demo_link: 'https://mr-kasper.github.io/HTML_And_CSS_Template_Leon/',
  },
  {
    name: 'Kasper Template',
    description:
      'An artistic and visually appealing template designed for creative professionals to showcase portfolios with flair and elegance.',
    tags: [
      { name: 'html', color: 'orange-text-gradient' },
      { name: 'css', color: 'blue-text-gradient' },
    ],
    image: kasper,
    source_code_link: 'https://github.com/mr-kasper/HTML_And_CSS_Template_Kasper',
    live_demo_link: 'https://mr-kasper.github.io/HTML_And_CSS_Template_Kasper/',
  },
  {
    name: 'Game World Template',
    description:
      'An engaging gaming-focused template featuring dynamic visuals and interactive elements powered by JavaScript for immersive user experiences.',
    tags: [
      { name: 'html', color: 'orange-text-gradient' },
      { name: 'css', color: 'blue-text-gradient' },
      { name: 'javascript', color: 'green-text-gradient' },
    ],
    image: gameworld,
    source_code_link: 'https://github.com/mr-kasper/HTML_And_CSS_Template_Game_World',
    live_demo_link: 'https://mr-kasper.github.io/HTML_And_CSS_Template_Game_World/',
  },
  {
    name: 'Drag in Drop',
    description:
      'A drag-and-drop utility showcasing real-time interactivity, built to highlight seamless user interface design and fluid interactions.',
    tags: [
      { name: 'html', color: 'orange-text-gradient' },
      { name: 'css', color: 'blue-text-gradient' },
      { name: 'javascript', color: 'green-text-gradient' },
    ],
    image: dragindrop,
    source_code_link: 'https://github.com/mr-kasper/Drag_in_Drop',
  },
  {
    name: 'Rock Paper Scissors Game',
    description:
      'An interactive browser-based Rock Paper Scissors game featuring a sleek design and intuitive gameplay, powered by JavaScript and SCSS.',
    tags: [
      { name: 'html', color: 'orange-text-gradient' },
      { name: 'scss', color: 'pink-text-gradient' },
      { name: 'javascript', color: 'green-text-gradient' },
    ],
    image: rockpaperscissors,
    source_code_link: 'https://github.com/mr-kasper/Rock_Paper_Scissors',
    live_demo_link: 'https://mr-kasper.github.io/Rock_Paper_Scissors/',
  },
  {
    name: 'Weather App',
    description:
      'A real-time weather application utilizing APIs to deliver accurate forecasts with an intuitive, user-friendly design.',
    tags: [
      { name: 'html', color: 'orange-text-gradient' },
      { name: 'css', color: 'blue-text-gradient' },
      { name: 'javascript', color: 'green-text-gradient' },
    ],
    image: weather,
    source_code_link: 'https://github.com/mr-kasper/Vanilla_Weather_App',
    live_demo_link: 'https://mr-kasper.github.io/Vanilla_Weather_App/',
  },
  {
    name: 'Product Filtering',
    description:
      'A robust platform for filtering and discovering products by category or search, built with Tailwind CSS for modern, responsive design.',
    tags: [
      { name: 'html', color: 'orange-text-gradient' },
      { name: 'tailwindcss', color: 'blue-text-gradient' },
      { name: 'javascript', color: 'green-text-gradient' },
    ],
    image: productfiltering,
    source_code_link: 'https://github.com/mr-kasper/Vanilla_Product_Filtering',
    live_demo_link: 'https://mr-kasper.github.io/Vanilla_Product_Filtering/',
  },
  {
    name: 'Social Media Dashboard',
    description:
      'A modern dashboard for tracking social media insights, featuring customizable light and dark modes for enhanced user experience.',
    tags: [
      { name: 'html', color: 'orange-text-gradient' },
      { name: 'css', color: 'blue-text-gradient' },
      { name: 'javascript', color: 'green-text-gradient' },
    ],
    image: socialmedia,
    source_code_link: 'https://github.com/mr-kasper/Social_Media_Dashboard',
    live_demo_link: 'https://mr-kasper.github.io/Social_Media_Dashboard/',
  },
  {
    name: 'Channel Name Generator',
    description:
      'A creative tool for generating catchy YouTube channel names, offering a simple yet effective user interface for quick results.',
    tags: [
      { name: 'html', color: 'orange-text-gradient' },
      { name: 'css', color: 'blue-text-gradient' },
      { name: 'javascript', color: 'green-text-gradient' },
    ],
    image: channelgenerator,
    source_code_link: 'https://github.com/mr-kasper/Channel_Name_Generator',
    live_demo_link: 'https://mr-kasper.github.io/Channel_Name_Generator/',
  },
  {
    name: 'Search App',
    description:
      'A powerful search engine leveraging the Wikipedia API, designed for quick and accurate information retrieval with a user-friendly interface.',
    tags: [
      { name: 'html', color: 'orange-text-gradient' },
      { name: 'scss', color: 'pink-text-gradient' },
      { name: 'javascript', color: 'green-text-gradient' },
    ],
    image: searchme,
    source_code_link: 'https://github.com/mr-kasper/Search_App',
    live_demo_link: 'https://mr-kasper.github.io/Search_App/',
  },
  {
    name: 'Hangman Game',
    description:
      'An interactive version of the classic Hangman game, built with React and styled with CSS, offering a fun and engaging user experience.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: hangman,
    source_code_link: 'https://github.com/mr-kasper/react-hangman',
    live_demo_link: 'https://mr-kasper.github.io/react-hangman/',
  },
  {
    name: 'Image Gallery',
    description:
      'A dynamic image search platform powered by React, offering smooth navigation and a responsive design, enhanced with Tailwind CSS for a modern UI.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'tailwindcss', color: 'pink-text-gradient' },
    ],
    image: imagegallery,
    source_code_link: 'https://github.com/mr-kasper/react-image-gallery',
    live_demo_link: 'https://mr-kasper.github.io/react-image-gallery/',
  },
  {
    name: 'Expense Tracker',
    description:
      'A personal finance tracker built with React, featuring intuitive tracking and real-time updates to help users monitor their spending habits.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: expensetracker,
    source_code_link: 'https://github.com/mr-kasper/react-expense-tracker',
    live_demo_link: 'https://mr-kasper.github.io/react-expense-tracker/',
  },
  {
    name: 'Food Recipe App',
    description:
      'An easy-to-use recipe search platform, built with React and Tailwind CSS, allowing users to find, explore, and save their favorite dishes.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'tailwindcss', color: 'pink-text-gradient' },
    ],
    image: foodrecipe,
    source_code_link: 'https://github.com/mr-kasper/React-Food-Recipe-App',
    live_demo_link: 'https://mr-kasper.github.io/React-Food-Recipe-App/',
  },
  {
    name: 'Netflix Clone',
    description:
      'A movie and TV show catalog website, mimicking Netflix, with rich media content and a responsive interface built using HTML, CSS, and JavaScript.',
    tags: [
      { name: 'html', color: 'orange-text-gradient' },
      { name: 'css', color: 'blue-text-gradient' },
      { name: 'javascript', color: 'green-text-gradient' },
    ],
    image: netflix,
    source_code_link: 'https://github.com/mr-kasper/Netflix_Clone',
    live_demo_link: 'https://mr-kasper.github.io/Netflix_Clone/',
  },
  {
    name: 'TinyPNG Clone',
    description:
      'A fast and efficient image compression tool, replicating TinyPNG, designed to reduce file sizes for PNG and JPG images while preserving quality.',
    tags: [
      { name: 'html', color: 'orange-text-gradient' },
      { name: 'css', color: 'blue-text-gradient' },
      { name: 'javascript', color: 'green-text-gradient' },
    ],
    image: tinypng,
    source_code_link: 'https://github.com/mr-kasper/tinypng_Clone',
    live_demo_link: 'https://tinypngclone.netlify.app/',
  },
  {
    name: 'Manage Landing Page',
    description:
      'A professional and responsive landing page for managing and planning day-to-day tasks, built with HTML, JavaScript, and Tailwind CSS.',
    tags: [
      { name: 'html', color: 'orange-text-gradient' },
      { name: 'tailwindcss', color: 'blue-text-gradient' },
      { name: 'javascript', color: 'green-text-gradient' },
    ],
    image: manage,
    source_code_link: 'https://github.com/mr-kasper/tailwind_manage_landing',
    live_demo_link: 'https://mr-kasper.github.io/tailwind_manage_landing/',
  },
  {
    name: 'Gericht Restaurant Landing Page',
    description:
      'A sleek and modern landing page designed for a restaurant, built with React and CSS, showcasing a menu, atmosphere, and reservations.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: gericht,
    source_code_link: 'https://github.com/mr-kasper/react_gerich_restaurant',
    live_demo_link: 'https://mr-kasper.github.io/react_gerich_restaurant/',
  },
  {
    name: 'GPT3 JSM Template',
    description:
      'A cutting-edge landing page template for GPT-3, created using React and CSS, showcasing the power of AI with engaging visuals and modern design.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: gpt3,
    source_code_link: 'https://github.com/mr-kasper/react-gpt3-jsm-template',
    live_demo_link: 'https://mr-kasper.github.io/react-gpt3-jsm-template/',
  },
  {
    name: 'HooBank Template',
    description:
      'A sleek, financial services landing page template built with React and Tailwind CSS, offering a professional layout for business and banking solutions.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'tailwindcss', color: 'pink-text-gradient' },
    ],
    image: hoobank,
    source_code_link: 'https://github.com/mr-kasper/react-HooBank',
    live_demo_link: 'https://mr-kasper.github.io/react-HooBank/',
  },
  {
    name: 'Shopping Cart (TypeScript)',
    description:
      'An e-commerce shopping cart application built with React and TypeScript, offering a smooth, scalable shopping experience with modern features.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'typescript', color: 'green-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: shoppingts,
    source_code_link: 'https://github.com/mr-kasper/react-typescript-shopping-cart',
    live_demo_link: 'https://mr-kasper.github.io/react-typescript-shopping-cart/',
  },
  {
    name: 'Shopping Cart (Redux)',
    description:
      'An advanced e-commerce shopping cart application with Redux integration, built for seamless user experience and state management.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'redux', color: 'orange-text-gradient' },
      { name: 'tailwindcss', color: 'pink-text-gradient' },
    ],
    image: shopping,
    source_code_link: 'https://github.com/mr-kasper/react-shopping-cart-app',
    live_demo_link: 'https://mr-kasper.github.io/react-shopping-cart-app/',
  },
];

export { services, technologies, experiences, projects };
