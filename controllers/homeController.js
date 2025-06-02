var courses = [
  {
    title: "Italian Cooking",
    cost: 100,
  },
  {
    title: "French Pastry",
    cost: 150,
  },
  {
    title: "Japanese Sushi Making",
    cost: 120,
  },
];

exports.showCourses = (req, res) => {
  res.render("courses", { offeredCourses: courses });
};

exports.showSignup = (req, res) => {
  res.render("contact");
};

exports.postedSignupForm = (req, res) => {
  res.render("thanks");
};

exports.landingPage = (req, res) => {
  res.render("index");
};
