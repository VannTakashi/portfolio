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
  title: <>Ola 👋{person.firstName}'s Newsletter</>,
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
  headline: <>Heyyaa👋,I'm VannTakashii AOSP ROMs Developer</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Axion AOSP</strong></>,
    href: "/work/about-custom-rom",
  },
  subline: (
    <>
      Bringing Ur Device To For Best Experience and Stability!
      <br /> Explore this portfolio to learn about me🤓
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
        role: "Maintainer",
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
            src: "/images/projects/project-01/aosp.jpg",
            alt: "AOSP Project",
            width: 16,
            height: 9,
          },
        ],
      },
     ],
    },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "SMAN 1 CIKALONG WETAN",
        description: <>Studying at SMA NEGERI 1 Cikalongwetan.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "C++",
        description: <>Basic knowledge of C++ For managing source rom and fixing some stuffs at kernel sources</>,
        images: [
        {
            src: "/images/projects/codes/c++.jpg",
            alt: "C++",
            width: 16,
            height: 9,
          }
         ]
       },
       {
        title: "Shell Scripting",
        description: <>shell scripting base to create a program script and perform multiple tasks with one command</>,
        images: [
        {
            src: "/images/projects/codes/shell.jpg",
            alt: "shell",
            width: 16,
            height: 9,
          }
        ]
       },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "my blogs? hmm🤔",
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
      width: 9,
      height: 16,
      orientation: "potrait",
    },
    {
      src: "/images/gallery/axion.jpg",
      alt: "image",
      width: 9,
      height: 16,
      orientation: "potrait",
    },
    {
      src: "/images/gallery/matrixx.jpg",
      alt: "image",
      width: 9,
      height: 16,
      orientation: "potrait",
    },
    {
      src: "/images/gallery/los-ext.jpg",
      alt: "image",
      width: 9,
      height: 16,
      orientation: "potrait",
    },
    {
      src: "/images/gallery/evox.png",
      alt: "image",
      width: 9,
      height: 16,
      orientation: "potrait",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
