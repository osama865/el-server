const { generalSearch } = require("../services/search");

// search all courses using titles, instructors, where the course available (e.g. neelain university, college of coputer scince)
// , category or even course description
// you can also search courses by college, e.g. college of engineering will fetch
// all courses that only relate to the engineering college
// searching for courses in specific university, like "university of neelain", may not work well
// it will list all courses relate to neelain first as we want, but it'll also fetch any course has any
// field contain "university of ", so for possible solutions, consider search for exact text (not good enough)
// or add two sepreate fields, university name and college name, its better but will need more work 

// TODO : add more filters to search, such as, level, year and tags
const search = async (req, res) => {
  const searchQuery = req.query;
  console.log(searchQuery);
  try {
    const courses = await generalSearch(searchQuery.query);
    console.log(courses);
    res.send(courses);
  } catch (error) {
    // please make a proper error handling, like when it fails
    // send a failed message to the client whith some reasons
    console.log(error);
  }
};

module.exports = { search }
