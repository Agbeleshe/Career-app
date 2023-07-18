const dataInfo = [];

const careers = [
  "Software Developer",
  "Teacher",
  "Nurse",
  "Graphic Designer",
  "Accountant",
  "Mechanical Engineer",
  "Marketing Manager",
  "Web Designer",
  "Data Scientist",
  "Architect",
  "Social Media Manager",
  "Financial Analyst",
  "Civil Engineer",
  "Project Manager",
  "Photographer",
  "Event Planner",
  "Interior Designer",
  "Fashion Designer",
  "Physical Therapist",
  "Dentist",
  "Chef",
  "Lawyer",
  "Psychologist",
  "Police Officer",
  "Firefighter",
  "Pilot",
  "Flight Attendant",
  "Journalist",
  "Writer",
  "Artist",
  "Musician",
  "Actor",
  "Director",
  "Athlete",
  "Coach",
  "Fitness Trainer",
  "Dietitian",
  "Veterinarian",
  "Pharmacist",
  "Doctor",
  "Surgeon",
  "Biologist",
  "Chemist",
  "Marine Biologist",
  "Astronomer",
  "Physicist",
  "Geologist",
  "Historian",
  "Archaeologist",
  "Sociologist",
  "Anthropologist",
  "Economist",
  "Political Scientist",
  "Philosopher",
  "Linguist",
  "Translator",
  "Librarian",
  "Researcher",
  "Entrepreneur",
  "Business Analyst",
  "Human Resources Manager",
  "Sales Manager",
  "Financial Advisor",
  "Real Estate Agent",
  "Insurance Agent",
  "Banker",
  "Logistics Manager",
  "Supply Chain Analyst",
  "Electrician",
  "Plumber",
  "Carpenter",
  "Welder",
  "Mechanic",
  "Landscaper",
  "Gardener",
  "Chef",
  "Baker",
  "Barista",
  "Hairdresser",
  "Makeup Artist",
  "Fashion Stylist",
  "Tour Guide",
  "Translator",
  "Interpreter",
  "Teacher Assistant",
  "Coach",
  "Tutor",
  "Social Worker",
  "Counselor",
  "Therapist",
  "Police Officer",
  "Detective",
  "Security Guard",
  "Paramedic",
  "Firefighter",
  "Dispatcher",
  "Postal Worker",
  "Courier",
  "Delivery Driver",
  "Janitor",
  "Cleaner",
  "Housekeeper",
  "Hotel Manager",
  "Receptionist",
  "Waiter/Waitress",
  "Bartender",
  "Retail Salesperson",
  "Cashier",
  "Customer Service Representative",
  "Call Center Agent",
  "Data Entry Clerk",
  "Secretary",
  "Administrative Assistant",
  "Executive Assistant",
  "Office Manager",
  "Project Coordinator",
  "Event Coordinator",
  "Social Media Coordinator",
  "Marketing Coordinator",
  "Sales Representative",
  "Account Manager",
  "Financial Analyst",
  "Business Consultant",
  "IT Consultant",
  "Research Assistant",
  "Lab Technician",
  "Quality Assurance Analyst",
  "Data Analyst",
  "Market Research Analyst",
  "Product Manager",
  "Brand Manager",
  "Public Relations Specialist",
  "Content Writer",
  "Copywriter",
  "Editor",
  "Translator",
  "Technical Writer",
  "Instructional Designer",
  "Web Developer",
  "Front-end Developer",
  "Back-end Developer",
  "Full-stack Developer",
  "Mobile App Developer",
  "UI/UX Designer",
  "Game Developer",
  "Animator",
  "Film Editor",
  "Sound Engineer",
  "Virtual Reality Developer",
  "Robotics Engineer",
  "Artificial Intelligence Engineer",
  "Ethical Hacker",
  "Cryptocurrency Trader",
  "Blockchain Developer",
  "Digital Marketer",
  "SEO Specialist",
  "Email Marketer",
  "Social Media Manager",
  "Affiliate Marketer",
  "Video Producer",
  "Podcaster",
  "Live Streamer",
  "Influencer",
  "Fashion Blogger",
  "Travel Blogger",
  "Food Blogger",
  "Lifestyle Blogger",
  "Photographer",
  "Wedding Photographer",
  "Food Photographer",
  "Fashion Photographer",
  "Event Photographer",
  "Freelance Writer",
  "Freelance Designer",
  "Freelance Developer",
  "Freelance Consultant",
  "Freelance Translator",
  "Freelance Photographer",
  "Freelance Marketer",
  "Freelance Virtual Assistant",
  "Freelance Social Media Manager",
  "Freelance Copywriter",
  "Freelance Content Writer",
  "Freelance Illustrator",
  "Freelance Animator",
  "Freelance Video Editor",
  "Freelance Musician",
  "Freelance Voice Actor",
  "Freelance Tutor",
  "Freelance Coach",
  "Freelance Trainer",
  "Freelance Researcher",
  "Freelance Transcriber",
  "Freelance Data Entry Specialist",
  "Freelance Project Manager",
  "Freelance Bookkeeper",
  "Freelance Accountant",
  "Freelance Tax Consultant",
  "Freelance Legal Consultant",
  "Freelance Event Planner",
  "Freelance Interior Designer",
  "Freelance Landscape Designer",
  "Freelance Architect",
  "Freelance Personal Trainer",
  "Freelance Yoga Instructor",
  "Freelance Therapist",
  "Freelance Nutritionist",
  "Freelance Life Coach",
  "Freelance Business Coach",
  "Freelance Mentor",
  "Freelance Artist",
  "Freelance Illustrator",
  "Freelance Painter",
  "Freelance Sculptor",
  "Freelance Ceramicist",
  "Freelance Writer",
  "Freelance Editor",
  "Freelance Proofreader",
  "Freelance Ghostwriter",
  "Freelance Web Developer",
  "Freelance Graphic Designer",
  "Freelance UI/UX Designer",
  "Freelance Photographer",
  "Freelance Videographer",
  "Freelance Animator",
  "Freelance Sound Designer",
  "Freelance Composer",
  "Freelance Music Producer",
  "Freelance Voice Over Artist",
  "Freelance Actor",
  "Freelance Director",
  "Freelance Filmmaker",
  "Freelance Screenwriter",
  "Freelance Game Developer",
  "Freelance Tester",
  "Freelance QA Specialist",
  "Freelance Data Analyst",
  "Freelance Researcher",
  "Freelance Market Researcher",
  "Freelance Business Analyst",
  "Freelance Project Manager",
  "Freelance Consultant",
  "Freelance Virtual Assistant",
  "Freelance Customer Service Representative",
  "Freelance Sales Representative",
  "Freelance Account Manager",
  "Freelance Social Media Manager",
  "Freelance Digital Marketer",
  "Freelance SEO Specialist",
  "Freelance Content Writer",
  "Freelance Copywriter",
  "Freelance Translator",
  "Freelance Teacher",
  "Freelance Tutor",
  "Freelance Coach",
  "Freelance Trainer",
  "Freelance Interpreter",
  "Freelance Psychologist",
  "Freelance Counselor",
  "Freelance Therapist",
  "Freelance Yoga Instructor",
  "Freelance Personal Trainer",
  "Freelance Nutritionist",
  "Freelance Dietitian",
  "Freelance Chef",
  "Freelance Baker",
  "Freelance Caterer",
  "Freelance Event Planner",
  "Freelance Wedding Planner",
  "Freelance Travel Agent",
  "Freelance Tour Guide",
  "Freelance Translator",
  "Freelance Writer",
  "Freelance Blogger",
  "Freelance Influencer",
  "Freelance Podcaster",
  "Freelance Voice Actor",
  "Freelance Musician",
  "Freelance Artist",
  "Freelance Illustrator",
  "Freelance Photographer",
  "Freelance Videographer",
  "Freelance Editor",
  "Freelance Producer",
  "Freelance Sound Engineer",
  "Freelance Game Tester",
  "Freelance Quality Assurance Specialist",
  "Freelance Data Entry Operator",
  "Freelance Research Assistant",
  "Freelance Lab Technician",
  "Freelance Market Research Analyst",
  "Freelance Product Manager",
  "Freelance Business Consultant",
  "Freelance IT Consultant",
  "Freelance Web Designer",
  "Freelance Front-end Developer",
  "Freelance Back-end Developer",
  "Freelance Full-stack Developer",
  "Freelance Mobile App Developer",
  "Freelance UI/UX Designer",
  "Freelance Graphic Designer",
  "Freelance Animator",
  "Freelance Film Editor",
  "Freelance Sound Designer",
  "Freelance Virtual Reality Developer",
  "Freelance Robotics Engineer",
  "Freelance Artificial Intelligence Engineer",
  "Freelance Ethical Hacker",
  "Freelance Cryptocurrency Trader",
  "Freelance Blockchain Developer",

];

for (let i = 1; i <= 200; i++) {
  const name = generateRandomName();
  const image = generateRandomImage();
  const description = `As a counselor, ${name} can provide guidance and support to help you pursue a successful career to become a`;

  const career = careers[i % careers.length];

  dataInfo.push({
    id: i,
    name,
    image,
    description,
    career,
  });
}

// Helper functions

function generateRandomName() {
  const firstNames = [
    "Michael",
    "Emily",
    "David",
    "Sophia",
    "John",
    "Olivia",
    "Daniel",
    "Emma",
    "Matthew",
    "William",
    "Isabella",
    "James",
    "Mia",
    "Benjamin",
    "Charlotte",
    "Jacob",
    "Amelia",
    "Alexander",
    "Harper",
    "Emma",
    "Liam",
    "Olivia",
    "Noah",
    "Ava",
    "Isabella",
    "Sophia",
    "Mia",
    "Charlotte",
    "Amelia",
    "Harper",
    "Evelyn",
    "Abigail",
    "Emily",
    "Elizabeth",
    "Mila",
    "Ella",
    "Avery",
    "Sofia",
    "Camila",
    "Smith",
    "Liam",
    "Noah",
    "William",
    "James",
    "Oliver",
    "Benjamin",
    "Elijah",
    "Lucas",
    "Mason",
    "Logan",
    "Alexander",
    "Ethan",
    "Jacob",
    "Michael",
    "Daniel",
    "Henry",
    "Jackson",
    "Sebastian",
    "Aiden",
    "Matthew",
    "Johnson",
    "Brown",
    "Lee",
    "Garcia",
    "Miller",
    "Wilson",
    "Taylor",
    "Clark",
    "Walker",
    "Lewis",
    "Hall",
    "Young",
    "Allen",
    "Wright",
    "King",
    "Ward",
    "Lopez",
    "Hill",
    "Scott",
  ];
  const lastNames = [
    "Smith",
    "Liam",
    "Noah",
    "William",
    "James",
    "Oliver",
    "Benjamin",
    "Elijah",
    "Lucas",
    "Mason",
    "Logan",
    "Alexander",
    "Ethan",
    "Jacob",
    "Michael",
    "Daniel",
    "Henry",
    "Jackson",
    "Sebastian",
    "Aiden",
    "Matthew",
    "Johnson",
    "Brown",
    "Lee",
    "Garcia",
    "Miller",
    "Wilson",
    "Taylor",
    "Clark",
    "Walker",
    "Lewis",
    "Hall",
    "Young",
    "Allen",
    "Wright",
    "King",
    "Ward",
    "Lopez",
    "Hill",
    "Scott",
    "Michael",
    "Emily",
    "David",
    "Sophia",
    "John",
    "Olivia",
    "Daniel",
    "Emma",
    "Matthew",
    "William",
    "Isabella",
    "James",
    "Mia",
    "Benjamin",
    "Charlotte",
    "Jacob",
    "Amelia",
    "Alexander",
    "Harper",
    "Emma",
    "Liam",
    "Olivia",
    "Noah",
    "Ava",
    "Isabella",
    "Sophia",
    "Mia",
    "Charlotte",
    "Amelia",
    "Harper",
    "Evelyn",
    "Abigail",
    "Emily",
    "Elizabeth",
    "Mila",
    "Ella",
    "Avery",
    "Sofia",
    "Camila",
  ];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${firstName} ${lastName}`;
}

function generateRandomImage() {
  // Generate random image URLs from a sample set
  const imageUrls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbEYkNOd9qSP51PTiRZxRstZ4gSuNJPIV-g&usqp=CAU",
  ];

  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

export default dataInfo;