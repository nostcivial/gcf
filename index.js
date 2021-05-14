exports.gcfSendGrid = (data, context) => {
  const sendGridMail = require('@sendgrid/mail');
  sendGridMail.setApiKey("");
  const msg = {
    /* for multiple address 'TOADDRESS@gmail.com,TOADDRESS@gmail.com', */
    to: 'TOADDRESS@gmail.com',
    from: 'FROMADDRESS@gmail.com',
    subject: 'Learn GCP with Marcus - Send Emails from Cloud Functions with SendGrid using Nodejs8',
    html: 'Hello <strong>Marcus</strong>, <br/>The file which was upload to <strong>'+data.bucket+'</strong> is <strong>'+data.name +'</strong>.<br/>Thanks<br/> Learn GCP with Marcus'      
  };
  sendGridMail.send(msg)
};
