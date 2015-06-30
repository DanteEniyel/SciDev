(function(){/*
* Controller: Signup
* Template: /client/views/public/signup.html
*/

/*
* Created
*/

Template.signupDeveloper.onCreated(function(){
  // Code to run when template is created goes here.
});

/*
* Rendered
*/

Template.signupDeveloper.onRendered(function(){
  $('#application-signup').validate({
    rules: {
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      emailAddress: {
        required: "Please enter your email address to sign up.",
        email: "Please enter a valid email address."
      },
      password: {
        required: "Please enter a password to sign up.",
        minlength: "Please use at least six characters."
      }
    },
    submitHandler: function(){
      // Grab the user's details.
     var user = {
        email: $('[name="emailAddress"]').val(),
        password: $('[name="password"]').val(),
          profile: ""
      }
      console.log(user.email)
      Meteor.call('createUserWithRole', user, 'dev', function(err, userId) {
        if (!err) {
          Bert.alert('Welcome!', 'success');
                        Router.go("indexDev");

        } else {
            Bert.alert(err.reason, 'danger');

        }
      });
    }
  });
});

/*
* Helpers
*/

Template.signupDeveloper.helpers({
  example: function(){
    // Code to run for helper function.
  }
});

/*
* Events
*/

Template.signupDeveloper.events({
  'submit form': function(e){
    // Prevent form from submitting.
    e.preventDefault();
  }
});

})();
