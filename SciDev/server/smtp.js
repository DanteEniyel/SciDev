// server/smtp.js
Meteor.startup(function () {
  smtp = {
    username: '374343e61d905e653',   // eg: server@gentlenode.com
    password: 'e46256d9ba8292',   // eg: 3eeP1gtizk5eziohfervU
    server:   'mailtrap.io',  // eg: mail.gandi.net
    port: 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});