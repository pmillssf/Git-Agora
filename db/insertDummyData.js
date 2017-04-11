const db = require('./db.js');
const data = require('./dummyData.js');
const pgp = require('pg-promise')();
const path = require('path');
const pg = require('pg');



function sql(file) {
  var fullPath = path.join(__dirname, './queries', file);
  return new pgp.QueryFile(fullPath, {minify: true});
}

// we need slash below?
let queries = {
  addCollaborator: sql('collaborators/addCollaborator.sql'),
  addComment: sql('comments/insertComment.sql'),
  addFavorite: sql('favorites/addFavorite.sql'),
  addFollow: sql('follows/addFollow.sql'),
  addMessage: sql('messages/insertMessage.sql'),
  addRating: sql('ratings/addRatings.sql'),
  addTag: sql('tags/insertTag.sql'),
  addTagTopic: sql('tags_topics/addTopicTag.sql'),
  addTopic: sql('topics/insertTopic.sql'),
  addUser: sql('users/createUser.sql'),
  addVote: sql('votes/insertVote.sql')
}



data.users.forEach( (user) => {
  db.query(queries.addUser, [user.username, user.password, user.email, user.mobile])
  .then(result => console.log('success entering user', result))
  .catch(err => console.log('an error entering user into db', err));
});

data.topics.forEach( (topic) => {
  db.query(queries.addTopic, [topic.user_id, topic.title, topic.description, topic.link, topic.type])
  .then(result => console.log('success entering topic', result))
  .catch(err => console.log('an error entering topic into db', err));
});

data.tags.forEach( (tag) => {
  db.query(queries.addTag, [tag.tag_name])
  .then(result => console.log('success entering tag', result))
  .catch(err => console.log('an error entering tag into db', err));
});

data.comments.forEach( (comment) => {
  db.query(queries.addComment, [comment.user_id, comment.topic_id, comment.content])
  .then(result => console.log('success entering comment', result))
  .catch(err => console.log('an error entering comment into db', err));
});

data.favorites.forEach( (favorite) => {
  db.query(queries.addFavorite, [favorite.user_id, favorite.topic_id])
  .then(result => console.log('success entering favorite', result))
  .catch(err => console.log('an error entering favorite into db', err));
});

data.follows.forEach( (follow) => {
  db.query(queries.addFollow, [follow.user_id, follow.type, follow.type_id])
  .then(result => console.log('success entering follow', result))
  .catch(err => console.log('an error entering follow into db', err));
});

data.messages.forEach( (message) => {
  db.query(queries.addMessage, [message.sender_id, message.receiver_id, message.content])
  .then(result => console.log('success entering message', result))
  .catch(err => console.log('an error entering message into db', err));
});

data.ratings.forEach( (rating) => {
  db.query(queries.addRating, [rating.user_id, rating.dev_points, rating.idea_points])
  .then(result => console.log('success entering rating', result))
  .catch(err => console.log('an error entering rating into db', err));
});

data.tags_topics.forEach( (tag_topic) => {
  db.query(queries.addTagTopic, [tag_topic.tag_id, tag_topic.topic_id])
  .then(result => console.log('success entering topic-tag', result))
  .catch(err => console.log('an error entering topic-tag into db', err));
});

data.votes.forEach( (vote) => {
  db.query(queries.addVote, [vote.user_id, vote.topic_id, vote.vote_type])
  .then(result => console.log('success entering collaborator', result))
  .catch(err => console.log('an error entering collaborator into db', err));
});

data.collaborators.forEach( (collaborator) => {
  db.query(queries.addCollaborator, [collaborator.user_id, collaborator.topic_id])
  .then(result => console.log('success entering collaborator', result))
  .catch(err => console.log('an error entering collaborator into db', err));
});