module.exports.getCollaborators = require('./Collaborators').getCollaborators;
module.exports.addCollaborator = require('./Collaborators').addCollaborator;

module.exports.getComments = require('./Comments').getComments;
module.exports.addComment = require('./Comments').addComment;

module.exports.getContributions = require('./Contributions').getContributions;

module.exports.getContributors = require('./Contributors').getContributors;

module.exports.getFavorites = require('./Favorites').getFavorites;
module.exports.addFavorite = require('./Favorites').addFavorite;
module.exports.deleteFavorite = require('./Favorites').deleteFavorite;
module.exports.getFavorite = require('./Favorites').getFavorite;

module.exports.addFollow = require('./Follows').addFollow;
module.exports.deleteFollow = require('./Follows').deleteFollow;
module.exports.getFollows = require('./Follows').getFollows;

module.exports.getMessages = require('./Messages').getMessages;
module.exports.postMessages = require('./Messages').postMessages;
module.exports.putMessages = require('./Messages').putMessages;

module.exports.getRatings = require('./Ratings').getRatings;
module.exports.addRatings = require('./Ratings').addRatings;

module.exports.addTag = require('./Tags').addTag;

module.exports.getProjectsByTag = require('./Projects_Tags').getProjectsByTag;
module.exports.addProjectTag = require('./Projects_Tags').addProjectTag;
module.exports.createProjectTag = require('./Projects_Tags').createProjectTag;

module.exports.addUser = require('./Users').addUser;
module.exports.getUser = require('./Users').getUser;
module.exports.deleteUser = require('./Users').deleteUser;
module.exports.updateUser = require('./Users').updateUser;
module.exports.getUserById = require('./Users').getUserById;

module.exports.addVote = require('./Votes').addVote;
module.exports.updateVote = require('./Votes').updateVote;
module.exports.getVotes = require('./Votes').getVotes;

module.exports.addTopic = require('./Topics').addTopic;

module.exports.getTopProjects = require('./Projects').getTopProjects;
module.exports.postProject = require('./Projects').postProject;
module.exports.getProjectById = require('./Projects').getProjectById;
module.exports.getUserProjects = require('./Projects').getUserProjects;

module.exports.getArticleById = require('./Articles').getArticleById;
module.exports.getAllArticles = require('./Articles').getTopArticles;
module.exports.getTopSixArticles = require('./Articles').getTopSixArticles;
