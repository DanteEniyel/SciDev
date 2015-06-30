/*
* Routes: Authenticated
* Routes that are only visible to authenticated users.
*/

Router.route('indexSci', {
  path: '/sci/index',
  template: 'indexSci',
  subscriptions: function(){
    return Meteor.subscribe('examplePublication');
    /* 
    return [
      Meteor.subscribe('examplePublication'),
      Meteor.subscribe('examplePublication2')
    ];
    */
  },
  onBeforeAction: function(){
    var loggedInUser = Meteor.user();

    if (!Roles.userIsInRole(loggedInUser, ['sci'])) {
     Bert.alert("No, no, not your place ;) ", 'danger');
        Router.go('/'); 
                this.stop();
                return;
    }else{
    this.next();
    }
  }
});

Router.route('indexDev', {
  path: '/dev/index',
  template: 'indexDev',
  subscriptions: function(){
    return Meteor.subscribe('examplePublication');
    /* 
    return [
      Meteor.subscribe('examplePublication'),
      Meteor.subscribe('examplePublication2')
    ];
    */
  },
  onBeforeAction: function(){
       var loggedInUser = Meteor.user();

    if (!Roles.userIsInRole(loggedInUser, ['dev'])) {
     Bert.alert("No, no, not your place ;) ", 'danger');
        Router.go('/'); 
                this.stop();
                return;
    }else{
    this.next();
    }
  }
});