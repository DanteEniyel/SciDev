// simple-todos.js

Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function(){
		return Tasks.find({owner:Meteor.userId()});
	}
	
  });
  
  Template.body.events({
	  "submit .new-task": function (event){
		  var text = event.target.text.value;
		  Tasks.insert({
			  text: text,
			  createdAt: new Date(),
			  owner: Meteor.userId(), //id korisnika
			  username: Meteor.user().username  //username
		  });
		  event.target.text.value = "";
		  
		  return false;
	  }
  })
  

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
}