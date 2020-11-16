import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kyle Santiago | Blockchain Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kyle Santiago',
  subtitle: 'I am a blockchain engineer and researcher.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Kyle is a blockchain engineer and researcher currently focused on developing smart contracts and managing blockchain Nodes as a Service (NaaS) platforms. He has been active in the blockchain space since 2011 and has contributed to blockchain security research in conjunction with the University of South Florida's Department of Mathematics & Statistics.",
  paragraphTwo: 'He has deep technical knowledge of blockchains, smart contracts, and oracles along with the ability to explain highly complex systems in an easily digestible format, as shown in his technical articles. His unique cultural background from the island of Curacao and his experience in the blockchain space makes him incredibly useful in this ever growing field of technology.',
  resume: 'https://www.linkedin.com/in/kwsantiago/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Chainlink OTP',
    info: 'One-Time Pad generator using Chainlink VRF. I built the frontend with React and set up the smart contract in Solidity.',
    info2: '',
    url: 'https://chainlinkotp.privkey.io/',
    repo: 'https://github.com/kwsantiago/Chainlink-OTP',
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Chainlink Florida',
    info: 'Chainlink Florida community website. I built the frontend in React and am active in the Chainlink community.',
    info2: '',
    url: 'https://kwsantiago.github.io/Chainlink-Florida/',
    repo: 'https://github.com/kwsantiago/Chainlink-Florida',
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    info: 'Digital Asset Investment Fund website. I built the frontend in React and am part of the fund as the Chief Investment Officer.',
    title: 'CoinStriker',
    info2: '',
    url: 'https://kwsantiago.github.io/CoinStriker/',
    repo: 'https://github.com/kwsantiago/CoinStriker',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kwsantiago@usf.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@kwsantiago',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kwsantiago/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kwsantiago',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
