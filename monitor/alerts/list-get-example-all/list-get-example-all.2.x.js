// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const MonitorClient = require('twilio').MonitorClient;
const client = new MonitorClient(accountSid, authToken);

client.alerts.list((err, data) => {
  data.alerts.forEach(alert => {
    console.log(alert.alertText);
  });
});
