const Router = require("express").Router();
const fs = require("fs");
// controllers
const { listCourses, courseDetailes } = require("../controllers");
const { enroll, listEnrollments } = require("../controllers/enroll");
const { search } = require("../controllers/search");
const { Courses } = require("../models");

Router.get("/courses", listCourses);

/* /courses/:course_id/reviews/:reviews_id
you can access ids by
params: {
    course_id: '6359af7ae5c2cca12f69109e',
    reviews_id: '8994hskfd9832'
  }
*/
Router.get("/courses/:course_id", courseDetailes);
Router.get("/intro", (req, res) => {
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }
  const videoPath =
    "/home/Osama/Public/courses/Html/---دورة HTML - الدرس 1 ( مقدمة عن إنشاء و برمجة المواقع ) - YouTube.mp4";
  const videoStat = fs.statSync(videoPath);

  const fileSize = videoStat.size;

  const videoRange = req.headers.range;

  if (videoRange) {
    const parts = videoRange.replace(/bytes=/, "").split("-");

    const start = parseInt(parts[0], 10);

    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunksize = end - start + 1;

    const file = fs.createReadStream(videoPath, { start, end });

    const header = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,

      "Accept-Ranges": "bytes",

      "Content-Length": chunksize,

      "Content-Type": "video/mp4",
    };

    res.writeHead(206, header);

    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,

      "Content-Type": "video/mp4",
    };

    res.writeHead(200, head);

    fs.createReadStream(videoPath).pipe(res);
  }
});

Router.get("/enrollments", listEnrollments);

Router.post("/courses/:id/rate", (req, res) => {
  res.send("hello, give your rate to this course");
});

Router.get("/search/", search);

Router.post("/courses/:id/reviews/add", (req, res) => {
  let review;
  course = courses.find(id);
  course.reviews.push(review);
  res.send("hello");
});

Router.delete("/courses/:id/reviews/:id/delete", (req, res) => {
  res.send("hello");
});

Router.put("/courses/:id/reviews/:id/update", (req, res) => {
  res.send("hello, with this you can update your review");
});

Router.get("/", (req, res) => {
  res.sendFile(__dirname + "/page.html");
});

Router.post("/courses/enroll", enroll);
// Router.get('/random', random)

// Router.post('/multiple' , multiple)

module.exports = {
  Router,
};
