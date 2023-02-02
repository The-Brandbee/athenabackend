const nodemailer = require('nodemailer');
const mail_formats = require('../../lib/mail_formats');
const config = require('../../config/config');
 
const transporter = nodemailer.createTransport({
   //service: 'gmail',
   host: 'email.MaxIndia.com', // Gmail Host
        port: config.mail_credentials.port, // Port
        secure: config.mail_credentials.secure,
  auth: {
    user: config.mail_credentials.mail,
    pass:  config.mail_credentials.password
  }
});

transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
 
async function sendMail(req,res,next) {
 
    let success = false;
    let mail_type = req.body.type;
    let user_data = {};

    if(mail_type == 'contact'){
        user_data = {
            "name": req.body.name,
            "email": req.body.email,
            "phone":req.body.phone
        };
    } else if (mail_type == 'productEnquiry') {
        user_data = {
            "email": req.body.email,
            "institute":req.body.institute,
            "productname": req.body.productname,
            "productFullName": req.body.productFullName
        };
 
    }
    else if (mail_type == 'productDemoEnquiry') {
        user_data = {
            "name": req.body.name,
            "email": req.body.email,
            "phone":req.body.phone,
            "productname": req.body.productname,
            "productFullName": req.body.productFullName,
            "message": req.body.message
        };
      
    }
    else if(mail_type == "contactdetails")
    {
        user_data = {
            "name": req.body.name,
            "email": req.body.email,
            "phone":req.body.phone,
            "department": req.body.department,
            "message": req.body.message
        };
        
    }
 
    else if(mail_type == "newsletteremail")
    {
        user_data = {
            "email": req.body.email,
        };
        
    }
 

    const mailOptions = {
        from: config.mail_credentials.mail,
        to: config.mail_credentials.mail_to,
        subject: mail_formats[mail_type].subject,
        html: mail_formats[mail_type].text(user_data)
      };
    
    await transporter.sendMail(mailOptions)
    .then((res) => {
        success = true;
    })
    .catch((err) => {
        console.log("Error in sending mail is:", err);
    });
        
    res.send({success: true})
      
}
 
module.exports = {
    sendMail
}