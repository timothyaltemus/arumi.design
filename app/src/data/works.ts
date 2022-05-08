import { Work } from '../models/work';
import { getRandomNumber } from '../utils/random';

// TODO: Migrate all of this to a database (e.g. Firebase Storage)
export const works: Work[] = [
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
    images: ['work-3.png'],
    views: getRandomNumber({ max: 304, min: 178 }),
    tags: ['Heuristic Evaluation', 'UX', 'Desktop'],
    role: 'UX Researcher',
    timeline: '3 Weeks',
    platform: 'Desktop',
    type: 'Heurisitc Evaluations',
  },
  {
    id: 'e19537bc-f95a-40cc-83a0-cd221a28a5c9',
    title:
      'Usability Study - Brazilian Steakhouse Food Delivery App (Google UX Course)',
    thumbnail: 'thumbnail-6.png',
    description: [
      'I conducted a Usability Study to assess how easy it is for participants to complete core tasks in my design. During this Usability Study, I followed my participants as they interacted with my prototype. As a researcher, I collected feedback as I watched the users interact with the prototype.',
      "I recruited five participants in the Usability Study as this sample size is large enough to uncover major user issues but small enough to keep the cost down. During the Usability Study, my users were open and honest about their problems. Thanks to their feedback, I was able to work out solutions to improve the restaurant's application.",
    ],
    images: ['work-6.png', 'work-6-1.png'],
    views: getRandomNumber({ max: 304, min: 178 }),
    tags: ['Usability Study', 'UX', 'UX Google Course', 'Mobile'],
    role: 'UX Researcher',
    timeline: '1 Week',
    platform: 'Mobile',
    type: 'Usability Study',
    links: [
      {
        text: 'View the full Usability Study.',
        url: 'https://docs.google.com/spreadsheets/d/1I8J6hbnN8XxcNBA61FuwFLWJJIHQ0gUlIP96aWYQ6qg/edit?usp=sharing',
      },
    ],
  },
  {
    id: '4877a155-34ed-4c4e-bed4-c3476fd219d9',
    title:
      'Competitive Audit - Brazilian Steakhouse Food Delivery App (Google UX Course)',
    thumbnail: 'thumbnail-7.png',
    description: [
      'For my Google UX Course project, I conducted a Competitive Audit. A Competitive Audit is just one tool to explore ideas for designs, so we can learn from others about what has worked and not worked. By conducting a Competitive Audit I was able to identify my key competitors, review the products that my competitors offer, understand how my competitors position themselves in the market, examine what my competition does well and what they could do better, and consider how my competitors talk about themselves. ',
      'I incorporated both direct and indirect competitors in my audit as it was important to audit a wide range of products that compete with mine to get a full picture of the landscape. This Audit helped inform my design process such as "How did my competitors approach designing their products"? Knowing what others have done can help me make better design decisions for my own product. This Audit also helped me solve usability problems such as "Is my competitor\'s website difficult to use"? This helped me identify what to avoid adding to my own application.',
      "This Audit also helped reveal gaps in the market. For example, are there user needs my competitors do not meet? Lastly, this Audit provided me with reliable evidence because design ideas are most successful when there's a deep understanding of business needs and market gaps. Competitive Audits are a huge part of gathering that information and knowing all of these things can help a product save time, money, and energy.",
    ],
    images: ['work-7.png'],
    views: getRandomNumber({ max: 304, min: 178 }),
    tags: ['Competitive Audit', 'UX', 'UX Google Course', 'Mobile'],
    role: 'UX Researcher',
    timeline: '4 days',
    platform: 'Mobile',
    type: 'Competitive Audit',
    links: [
      {
        text: 'View the Competitive Audit.',
        url: 'https://docs.google.com/spreadsheets/d/1knjx-BiykUFoKuIGxOkOlqEe9el5D3_O5vS8R7Xavu4/edit?usp=sharing',
      },
      {
        text: 'View the Competitive Audit Report.',
        url: 'https://docs.google.com/document/d/1XumDF3V1uduO75vCPv7E1hxq5GoYJS6CL7hSOpgeZ9E/edit?usp=sharing',
      },
    ],
  },
  {
    id: '660cc47c-5298-4902-aca2-666735424fb3',
    title:
      'UX Research Study Plan - Brazilian Steakhouse Food Delivery App (Google UX Course)',
    thumbnail: 'thumbnail-8.png',
    description: [
      'For my Google UX Course project, I created a highly effective Research Study Plan. There are seven elements that I included: the project background, the research goals, the detailed research questions, the key performance indicators or KPIs, the methodology, the participants, and the script or questions I asked the participants.',
      'The first element of my plan is the project background. The project background answers the question: "What led me to conduct this research"? I created a mobile application for a local restaurant that allows its users to place orders online through this application.  This led me to determine "What design problems am I trying to solve? And how will the results of the research impact my design decisions"? I used these answers to create goals for my research project.',
      'The goals for the research project helped me understand key problems such as determining whether this application was difficult to use. I needed to consider the ease of use in order to understand why customers join this app and leave or stay. After I determined my research goals, I developed detailed research questions for my plan such as "how long does it take a user to find and order an item from the menu of the app? And what can I learn from the user flow or the steps that users take to place an order"?',
      'I measured my progress using KPI’s such as time on task and conversion rates. For my app, one thing I wanted to track is how many users in the research study complete their search for a menu item and how long they spend on this task. The next element of my plan is the methodology. This is where I documented the steps I took to conduct my research. I needed to determine "How will I collect data and how will I analyze the data once I get it"? To find out if users are able to find and order in the new app, I conducted a survey of prospective users. I recruited frequent customers of this restaurant as well as of competing restaurants in the area to participate in the survey and help determine next steps in my research process.',
    ],
    images: ['work-8.png'],
    views: getRandomNumber({ max: 304, min: 178 }),
    tags: ['UX Research', 'UX Study Plan', 'UX', 'UX Google Course', 'Mobile'],
    role: 'UX Researcher',
    timeline: '2 days',
    platform: 'Mobile',
    type: 'UX Study Plan',
    links: [
      {
        text: 'View the full Study Plan.',
        url: 'https://docs.google.com/document/d/1kbXRbXVJWslWe2QV3w7vLHFkC_IzkwTsPJy_-TVmyMc/edit?usp=sharing',
      },
    ],
  },
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
    images: ['work-1.png'],
    platform: 'Mobile',
    tags: ['User Persona', 'UX', 'Google UX Course', 'Mobile'],
    role: 'UX Researcher',
    timeline: '1 Day',
    type: 'User Persona',
    views: getRandomNumber({ max: 304, min: 178 }),
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
    images: ['work-2.png'],
    views: getRandomNumber({ max: 304, min: 178 }),
    tags: ['User Journey', 'UX', 'Google UX Course', 'Mobile'],
    role: 'UX Researcher',
    timeline: '5 Days',
    platform: 'Mobile',
    type: 'User Journey Map',
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
    images: ['work-4.png'],
    views: getRandomNumber({ max: 304, min: 178 }),
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
    images: ['work-5.png'],
    views: getRandomNumber({ max: 304, min: 178 }),
    tags: ['Design', 'Prototype', 'UX', 'Mobile'],
    role: 'UX Designer',
    timeline: '1 Week',
    platform: 'Mobile',
    type: 'Design & Prototype',
  },
];

export const getProject = (id: string): [Work, number, number] => {
  const index = works.findIndex((project) => project.id === id);
  return [works[index], index, works.length];
};

export const getProjectByIndex = (index: number) => {
  return works[index];
};
