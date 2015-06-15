/*
* Routes: Public
* Routes that are visible to all (public) users.
*/


Router.route('welcome', {
  path: '/welcome',
  template: 'welcome',
  onBeforeAction: function(){
    Session.set('currentRoute', 'welcome');
    this.next();
  }
});

Router.route('signupScientist', {
  path: '/signupScientist',
  template: 'signupScientist',
  onBeforeAction: function(){
    Session.set('currentRoute', 'signupScientist');
    this.next();
  }
});

Router.route('signupDeveloper', {
  path: '/signupDeveloper',
  template: 'signupDeveloper',
  onBeforeAction: function(){
    Session.set('currentRoute', 'signupDeveloper');
    this.next();
  }
});
Router.route('login', {
  path: '/login',
  template: 'login',
  onBeforeAction: function(){
    Session.set('currentRoute', 'login');
    this.next();
  }
});

Router.route('recover-password', {
  path: '/recover-password',
  template: 'recoverPassword',
  onBeforeAction: function(){
    Session.set('currentRoute', 'recover-password');
    this.next();
  }
});

Router.route('reset-password', {
  path: '/reset-password/:token',
  template: 'resetPassword',
  onBeforeAction: function() {
    Session.set('currentRoute', 'reset-password');
    Session.set('resetPasswordToken', this.params.token);
    this.next();
  }
});
