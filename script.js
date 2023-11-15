$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navibar').addClass("sticky");
        }else{
            $('.navibar').removeClass("sticky");

        }
    });
    $('.menu-btn').click(function(){
        $('.navibar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
});

// typing animation 
var typed = new Typed(".typing",{
    strings:["Developer","Front-end developer","Back-end developer","Full stack developer"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
})

var typed = new Typed(".typing-1",{
    strings:["Developer","Front-end developer","Back-end developer","Full stack developer"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
})

// function sendEmail(){
//  Email.send({
            // SecureToken :" a7cf755c-ad28-401e-af05-0e61b8118cb6",
         //   SecureToken:" d0e26cd6-da84-4318-b1ed-2a86efd804d4",
//   Host : "smtp.elasticemail.com",
//     Username : "piyushkasture120@gmail.com",
//     Password : "7BFAF985820F7B2577A3A98BA0FDEFBC399F",
//     To : 'piyushkasture120@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "Portfolio Contact form",
//     Body : "Name: " + document.getElementById("name").value
//         + "<br> Email: " + document.getElementById("email").value
//         + "<br> Subject: " + document.getElementById("subject").value
//         + "<br> Message: " + document.getElementById("message").value
//     }).then(
//     message => alert("Message Sent Succesfully")
//     );
//     }

function Send(){

    var name = document.getElementById("nam").value;
    var email = document.getElementById("mail").value;
    var subject = document.getElementById("sub").value;
    var message = document.getElementById("mssg").value;

    var body = "Name: " + name + "<br/> Email: " + email + "<br/> Subject: " + subject + "<br/> Message: " + message ;

    console.log(body);


   
    Email.send({
        Host : "smtp.elasticemail.com",
         Username : "piyushkasture120@gmail.com",
         Password : "7BFAF985820F7B2577A3A98BA0FDEFBC399F",
         To : 'piyushkasture120@gmail.com',
         From : "piyushkasture120@gmail.com",
         Subject : subject,
         Body : body
     }).then(
       message => {
        if(message=='OK'){
            swal("Successfull", "Message Sent Successfully", "success");
        }
        else{
            swal("Something Wrong", "Please try again..", "error");

        }
       }
     );
}
