const email = document.getElementById('email');
const name = document.getElementById('name');
const message = document.getElementById('message');

(function(){
emailjs.init({
    publicKey: "PaHxpkVU7CjfVidMY",
    limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
},
});
})();
function sendMessage () {

    console.log(email.value,name.value,message.value);
if (email.value && name.value && message.value) {

    emailjs.send("service_q16tguf", "template_yj0i59e", {
        to_name: 'kanhang Li',
        from_name: name.value, 
        message:`${email.value}${message.value}`}).then((data) => {
        alert('Thank your for your message, your message has been successfully delivered to me.');
    }).catch(err=> {
        alert('Error happens, try again later, or check your information fields.');
    })
} else {
    alert('Please check all the fields you provided');
}
}

