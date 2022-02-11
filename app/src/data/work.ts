import { Work } from '../models/work';
import { getRandomNumber } from '../utils/random';

// TODO: Migrate all of this to a database (e.g. Firebase Storage)
export const work: Work[] = [
  {
    id: '2a9c7328-8f22-40ca-84af-be0dd034ced1',
    title:
      'User Persona - Brazilian Steakhouse Food Delivery App (Google UX Course)',
    description: [
      'As part of my Google UX project, I created two User Personas to reflect a group of users pain points.',
      "Each Persona I created represents a group of users with similar characteristics that I learned about through my research. Each Persona is unique because they reflect the lifestyles of the users and gives me an idea of how to meet users' needs or challenges.",
      'As I was creating Personas, I looked for the most common themes in my data and grouped the users who personify those themes together.',
      'I used the information in Personas to create designs that speak directly to users, like Katerina and Michael. This ensures users have the best experience when using my product!',
    ],
    thumbnail: 'thumbnail-1.png',
    image: 'work-1.png',
    platform: 'Mobile',
    tags: ['User Persona', 'UX', 'Google UX Course', 'Mobile'],
    role: 'UX Researcher',
    timeline: '1 Day',
    type: 'User Persona',
    views: getRandomNumber({ max: 30, min: 18 }),
  },
  {
    id: 'd0e86a09-d0d0-478e-86a8-4b717d802334',
    title:
      'User Journey Map - Brazilian Steakhouse Food Delivery App (Google UX Course)',
    description: [
      'For my Google UX project, I created two User Journey Maps built off the personas I had previously created when conducting my research.',
      "Creating a User Journey Map let me thoroughly document the entire sequence of events and interactions a user experiences, including the user's interaction with my design. This way I could really focus on how a specific persona thinks and feels at every step of the journey. User journey mapping also highlighted some new pain points I took into consdierations for my designs.",
      "Through the User Journey Map, I identified some of the user's emotions, which allowed me to improve the overall user experience for all users.",
    ],
    thumbnail: 'thumbnail-2.png',
    image: 'work-2.png',
    views: getRandomNumber({ max: 30, min: 18 }),
    tags: ['User Journey', 'UX', 'Google UX Course', 'Mobile'],
    role: 'UX Researcher',
    timeline: '5 Days',
    platform: 'Mobile',
    type: 'User Journey Map',
  },
  {
    id: '4ca850dc-636c-452a-80bc-e1f1020fde08',
    title: "Baker Hughes's DS Store Website Heuristic Evaluations",
    description: [
      'The experience users or customers have can greatly affect how they feel about a business. It is important to understand how a user or a client feels about their user journey on a specific website. During my preliminary research for DS Store, an E-commerce website for Baker Hughes, I found a lot of dissatisfaction amongst users of this application.',
      "I decided to follow a typical User's Journey on this website and came across many discrepancies within the site myself.",
      'I then used a company wide used Heuristic Evaluation template that focused on every aspect of the site such as the Homepage, Task Orientation, Navigation and IA (Information Architecture), Forms and Data Entry, Trust and Credibility, Writing, Page Layout, and Search. I tested each functionality in the template and provided a score of 1 to -1 with 1 being exceptional and -1 being dissatisfaction.',
      'After scoring each functionality, I then anaylzed my data and catgorized each aspect of the website and produced a raw score as well as a score percentage. I produced visual data for my business owners and stakeholders that highlighted what areas the website excels in vs what areas the website needs immediate attention to increase the User Journey.',
      'After carefully conducting a Heuristic Evaluation on both the Log In and Guest versions of the website, I was able to present my recommendations as well as actionable items to both the business and the project stakeholders.',
    ],
    thumbnail: 'thumbnail-3.png',
    image: 'work-3.png',
    views: getRandomNumber({ max: 30, min: 18 }),
    tags: ['Heuristic Evaluation', 'UX', 'Desktop'],
    role: 'UX Researcher',
    timeline: '3 Weeks',
    platform: 'Desktop',
    type: 'Heurisitc Evaluations',
  },
  {
    id: '2f58950c-4854-4eed-89d5-012a2fd07d56',
    title:
      'Building Wireframes - Brazilian Steakhouse Food Delivery App (Google UX Course)',
    description: [
      'For my Google UX Project, I am in the process of designing a mobile food delivery app for a fictionial restaraunt in the Texas area.',
      'Before creating a functioning prototype, I started by sketching out and eventually turning my designs into  lo-fi Wireframes using Figma. Each Wireframe I created ensures that I solved a real problem users typically faced while working with food delivery apps on their phones. I chose to stick with a lower amount of complexity as I was inspired by my research and wanted to get ideas designed quickly.',
      'While designing my Wireframes, I incorporated my knowledge of Gestalt Principles. Gestalt Principles describes how humans group similar elements, recognize patterns, and simplify complex images when we perceive objects.',
      'For the first principle, Similarity, I wanted to keep "like with like" for consistency. For example, in the Rewards page, I made sure that the placeholders for icons are the same shape and size in all my  wireframes.',
      'Next, by using Proximity, I ensured that I placed buttons such as "Place Order", "Sign In" and "Regsiter", realtively close to the content to make a connection between the two elements.',
      'For the last principle, Common Region, I created a border around the navigation bar. This design tip helps users recognize that the icons in the navigation bar are more important than others and are perceived to be grouped together.',
      'I used simple rectangles, shapes and icons to get my word across in my designs. My main focus while creating these Wireframes were functionality. After completing these Wireframes, I went on to create prototypes in Figma and conducted a Usability Study for my Wireframes.',
    ],
    thumbnail: 'thumbnail-4.png',
    image: 'work-4.png',
    views: getRandomNumber({ max: 30, min: 18 }),
    tags: ['Wireframes', 'Prototype', 'UX', 'Google UX Course', 'Mobile'],
    role: 'UX Designer',
    timeline: '3 days',
    platform: 'Mobile',
    type: 'Wireframes & Prototype',
  },
  {
    id: 'b849d85e-cb9c-41cd-953c-55fbb40c72fc',
    title: 'Delish - Recipe App',
    description: [
      'Figma is a browser based, powerful design tool. I sparked an interest in learning Figma after seeing designers on my team carefully curate designs based on the research that was provided to them.',
      'I took an online course on Figma where I participated in a project called "Chef\'s Recipe App". Through this course, I was able to discover the Figma interface and learned to use powerful tools like constraints to make my designs responsive, and components to build a library of design elements to use throughout my future projects.',
      'Through this training, I was able to learn the essentials of Figma, how to design mobile and desktop apps as well as wireframing.',
    ],
    thumbnail: 'thumbnail-5.png',
    image: 'work-5.png',
    views: getRandomNumber({ max: 30, min: 18 }),
    tags: ['Design', 'Prototype', 'UX', 'Mobile'],
    role: 'UX Designer',
    timeline: '1 Week',
    platform: 'Mobile',
    type: 'Design & Prototype',
  },
  //   {
  //     id: 'f7ddc384-7ba7-4921-9d37-08f3b1f7ab97',
  //     title: 'Arumi',
  //     description: [],
  //     thumbnail: 'thumbnail-1.png',
  //     image: 'work-1.png',
  //     views: getRandomNumber({ max: 30, min: 18 }),
  //   },
  //   {
  //     id: '0ef9cc46-0968-47ab-82e7-f739d5bfbe86',
  //     title: 'Arumi',
  //     description: [],
  //     thumbnail: 'thumbnail-1.png',
  //     image: 'work-1.png',
  //   },
  //   {
  //     id: '34bab6a5-7081-4c3d-9fb7-a0f5d78ae025',
  //     title: 'Arumi',
  //     description: [],
  //     thumbnail: 'thumbnail-1.png',
  //     image: 'work-1.png',
  //   },
  //   {
  //     id: '1e6106dc-4637-4d25-8b62-63e8ccbfc92a',
  //     title: 'Arumi',
  //     description: [],
  //     thumbnail: 'thumbnail-1.png',
  //     image: 'work-1.png',
  //   },
  //   {
  //     id: '936b88a6-0a9b-4ab3-af37-12883ec15359',
  //     title: 'Arumi',
  //     description: [],
  //     thumbnail: 'thumbnail-1.png',
  //     image: 'work-1.png',
  //   },
  //   {
  //     id: 'a9f887f3-ccd7-4043-851e-35981b505cbc',
  //     title: 'Arumi',
  //     description: [],
  //     thumbnail: 'thumbnail-1.png',
  //     image: 'work-1.png',
  //   },
  //   {
  //     id: '1792c8dd-ce1b-460a-ba5a-ecbd9c99ec73',
  //     title: 'Arumi',
  //     description: [],
  //     thumbnail: 'thumbnail-1.png',
  //     image: 'work-1.png',
  //   },
];

export const getProject = (id: string): [Work, number, number] => {
  const index = work.findIndex((project) => project.id === id);
  return [work[index], index, work.length];
};

export const getProjectByIndex = (index: number) => {
  return work[index];
};
