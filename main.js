const express = require("express");
const app = express();
const layouts = require("express-ejs-layouts");
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");

app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("port", process.env.PORT || 3000);

app.get("/", homeController.landingPage);
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignup);
app.post("/contact", homeController.postedSignupForm);

app.use(errorController.pageNotFoundErrror);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
  console.log(
    "Visit http://localhost:" + app.get("port") + " to see the app in action."
  );
});
