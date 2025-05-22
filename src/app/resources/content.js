import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Revan",
  lastName: "Andrean",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "IT Enthusiast",
  avatar: "/images/avatar.jpg",
  email: "andreanrevan276@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>hello my friend 👋{person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/VannTakashi",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/share/1EuoJaDBxL/",
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "tg://user?id=6227152745",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Heyyaa👋 I'm VannTakashii , AOSP ROMs Developer</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Axion AOSP</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Bringing Ur Device To <Logo icon={true} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, For Best Experience and Stability!
      <br /> for flexibility, convenience, and to improve performance for every project I develop.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Heyyaa everyone! 👋
I'm Revan Andrean, 17 years old and currently living in Indonesia! 🇮🇩
I'm really into gaming and I love managing any kind of project—it's something that keeps me excited and motivated! 🎮🛠️
Still learning a lot every day, so I’m always open to feedback and happy to grow together with all of you! 🌱
Thanks a bunch for having me here! Let’s have fun and do great things together! 🚀✨
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Development AOSP",
        timeframe: "2024 - Present",
        role: "Builder ROMs AOSP",
        achievements: [
          <>
            Manage About ROMs Building and adjust configuration for user convenience.
          </>,
          <>
            I do all of this for user convenience, so that my work can be well received by the community.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "SMAN 1 CIKALONG WETAN",
        description: <>Studying at SMA NEGRI 1 Cikalongwetan.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "HTML",
        description: <>I have mastered HTML programming language</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "CSS",
        description: <>I can design using CSS and use it</>,
        // optional: leave the array empty if you don't want to display images
       },
      {
        title: "C++",
        description: <>Basic knowledge of C++ For managing kernel or debugging</>,
       },
       {
        title: "Shell Scripting",
        description: <>shell scripting base to create a program script and perform multiple tasks with one command!</>,
        
       },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `Some of My Work  ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizon.jpg",
      alt: "image",
      orientation: "potrait",
    },
    {
      src: "/images/gallery/axion.jpg",
      alt: "image",
      orientation: "potrait",
    },
    {
      src: "/images/gallery/matrixx.jpg",
      alt: "image",
      orientation: "potrait",
    },
    {
      src: "/images/gallery/los-ext.jpg",
      alt: "image",
      orientation: "potrait",
    },
    {
      src: "/images/gallery/evox.png",
      alt: "image",
      orientation: "potrait",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
