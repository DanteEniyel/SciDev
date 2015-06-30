Meteor.methods({
    
  'createUserWithRole': function(data, role) {
    var userId;
        check(data, Match.Where(function(subscriptions){
  _.each(data, function (doc) {
    check(doc,String);
  });
  // return true if there is no problem
  return true;
}));
      check(role, Match.Where(function(subscriptions){
  _.each(role, function (doc) {
    check(doc,String);
  });
  // return true if there is no problem
  return true;
}));
      console.log(data);
      console.log(role);
    Meteor.call('createUserNoRole', data, function(err, result) {
      if (err) {
        return err;
      }
      Roles.addUsersToRoles(result, role);
      return userId = result;
    });
    return userId;
  },
    
  'createUserNoRole': function(data) {
    //Do server side validation
    return Accounts.createUser({
      email: data.email,
      password: data.password,
      profile: data.profile
    });
  }
});