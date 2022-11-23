/**
 * IMPORTANT NOTES
 * to do some kind of relations between your collections, first
 * you need to add the id of the doc you want it to be related in anothor doc,
 * {
 * name : "name",
 * favoriet : _id : "oklfdjd0fj3rlkj44598f209rfdj"
 * }
 *
 * this id will refer to the document has this id, so instade of adding the whole document,
 * you just make a refrence to it, to get the real data, i mean replace the id with the real refered doc
 * you need to use populate() function when you retrive your docs, so the db will replace the id with its real object
 *
 */
