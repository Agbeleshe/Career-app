const dummyInfo = [];

for (let i = 1; i <= 5; i++) {
  const name = generateRandomName();
  const image = generateRandomImage();
  const description = `As a counselor, ${name} can provide guidance and support to help you pursue a successful career to become a`;
  const career = generateRandomCareer();

  dummyInfo.push({
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
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Brown",
    "Lee",
    "Garcia",
   
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

function generateRandomCareer() {
  const careers = [
    "Software Developer",
    "Nurse",
    "Graphic Designer",
    "Accountant",
    "Mechanical Engineer",
    "Marketing Manager",
    "Artist",
    "Musician",
    "Actor",
    "Archaeologist",

  ];

  const randomIndex = Math.floor(Math.random() * careers.length);
  return careers[randomIndex];
}

export default dummyInfo;
