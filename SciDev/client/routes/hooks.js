/*
* Route Hooks
* Hook functions for managing user access to routes.
*/

/*
* Define Hook Functions
*/

/*
* Hook: Check if a User is Logged In
* If a user is not logged in and attempts to go to an authenticated route,
* re-route them to the login screen.
*/

checkUserLoggedIn = function(){
  if( !Meteor.loggingIn() && !Meteor.user() ) {
    Router.go('/welcome');
  } else {
    this.next();
  }
}

/*
* Hook: Check if a User Exists
* If a user is logged in and attempts to go to a public route, re-route
* them to the index path.
*/

userAuthenticated = function(){
  if( !Meteor.loggingIn() && Meteor.user() ){
    Router.go('/');
  } else {
    this.next();
  }
}

/*
* Run Hooks
*/
//if user is not logged in reroute him to welcome except if he visites bottom sites
Router.onBeforeAction(checkUserLoggedIn, {
  except: [
    'welcome',
    'signupDeveloper',
    'signupScientist',
    'login',
    'recover-password',
    'reset-password'
  ]
});
//if user is logged in and wants to go to these sites, reroute them to its standard
Router.onBeforeAction(userAuthenticated, {
  only: [
    'welcome',
    'signupDeveloper',
    'signupScientist',
    'login',
    'recover-password',
    'reset-password'
  ]
});
