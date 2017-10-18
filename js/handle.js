
var $passwordConfirmation = $('#signup-form').find('#passwordcf')
var $passwordValidation = $('#signup-form').find('#password');
var $email = $('#signup-form').find('#email');
  $passwordValidation.on('keyup, change', function(){
    var res = $('.password').find('#res');
    var password = $('#password').val();
    res.html(passwordValidation(password));
    passwordConfirmation(password);
  })
  $('#phonenumber').on('keyup, change', function(){
    var phone = $('#phonenumber').val();
    phonenumberValidation(phone);
  })
$passwordConfirmation.on('keyup, change', function(){
    var password = $('#password').val();
    passwordConfirmation(password);
})
$email.on('keyup, change', function(){
  var email =  $(this).val();
  var result = $('.lf-field.email').find('.res');
if(isValidEmailAddress(email)){
    result.removeClass('Invalid');
    result.addClass('Done');
  //  result.html('');
}else{
  result.removeClass('Done');
  result.addClass('Invalid');
  //result.html('กรุณาป้อนข้อมูลให้ถูกต้องตามรูปแบบ เช่น example.lpru.th');
}
  if(email==''){
  result.removeClass('Invalid Done');
  }
})
var $email = $('#signup-form').find('#email');
function passwordConfirmation(password){
  var passwordcf = $('#passwordcf').val();
  if(passwordcf==""){
    return false
  }
    if(password == passwordcf){
        var result = $('.lf-field.password-cf').find('.res');
      result.removeClass('Invalid');
      result.addClass('Done');
    }else{
    var result = $('.lf-field.password-cf').find('.res');
      result.removeClass('Done');
      result.addClass('Invalid');
  //    var invalid = $("#passwordcf").find('.Invalid');
    }
}


  function phonenumberValidation(phone){
var res = $('.phone-number').find('.res');
  if(phone=="") {
    res.removeClass('Done Invalid');
    return false
}
    if (phone.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/) && phone.length < 13) {
        res.removeClass('Invalid');
        res.addClass('Done');
    }
    else {
        res.removeClass('Done');
      res.addClass('Invalid');
    }

  }
function passwordValidation(password){
  var strength = 0;
  var result = $('.lf-field.password').find('#res');
  if(password=='')return false
  if (password.length < 6 ){
    result.removeAttr('Class')
    result.addClass('error')
    return'รหัสผ่านสั้น กรุณาลองอีกครั้ง'
  }
  if (password.length >7) strength +=1
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
  if (password.match(/([a-zA-Z])/)&&password.match(/([0-9])/))strength +=1
  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength +=1
  if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/))strength +=1
  console.log(strength);

  switch (strength) {
    case 1:
      result.removeAttr('Class')
      result.addClass('weak')
      return'รหัสผ่านนี้คาดเดาง่าย'
      break;
    case 2 :
      result.removeAttr('Class')
      result.addClass('good')
    return'รหัสผ่านคาดนี้เดาค่อนข้างยาก'
    break;
    case 3:
    result.removeAttr('Class')
    result.addClass('strong')
    return'รหัสผ่านนี้ปลอดภัย'
      break;
  }
}


// Checking before sending data
// function formVerify(){
//       var resultpwd = $('.lf-field.password').find('#res');
//       var resultpwdcf=  $('.lf-field.password-cf').find('.res');
//       var resultemail=  $('.lf-field.email').find('.res');
//       var resultphonenum= $('.lf-field.phone-number').find('.res');
//       if ( resultpwdcf.hasClass('weak')|| resultpwdcf.hasClass('good') || resultpwdcf.hasClass('strong')  ){
//         passwordValidation = true;
//       }else passwordValidation = false;
//     if (resultpwdcf.hasClass('Done')) passwordConfirmation =true;
//     else passwordConfirmation = false;
//     if (resultemail.hasClass('Done')) Emailvalidation = true;
//     else Emailvalidation = false
//     if (resultphonenum.hasClass('Done')) phonenumber = true;
//     else phonenumber = false
//     if(passwordValidation && passwordConfirmation && Emailvalidation && phonenumber ){
//       return true
//     }else {
//       return false
//     }
// }

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

function disabledSubmit(){
  $('.lf-submit').attr('disabled', 'disabled');
}
function enableSubmit() {
    $('.lf-submit').removeAttr('disabled');
}


$('#signup-form').on('submit', function (e){
  var resultpwd = $('.lf-field.password').find('#res');
  var resultpwdcf=  $('.lf-field.password-cf').find('.res');
  var resultemail=  $('.lf-field.email').find('.res');
  var resultphonenum= $('.lf-field.phone-number').find('.res');
  if ( resultpwd.hasClass('weak')|| resultpwd.hasClass('good') || resultpwd.hasClass('strong')  ){
    passwordValidation = true;
  }else passwordValidation = false;
if (resultpwdcf.hasClass('Done')){
  passwordConfirmation =true;
}
else{
   passwordConfirmation = false;
}
if (resultemail.hasClass('Done')){
   Emailvalidation = true;
}
else {
  Emailvalidation = false;
}
if (resultphonenum.hasClass('Done')) {
  phonenumber = true;
}
else {
  phonenumber = false;
}
console.log(phonenumber);
console.log(passwordConfirmation);
console.log(Emailvalidation);
console.log(passwordValidation);

if(passwordValidation && passwordConfirmation && Emailvalidation && phonenumber ){
  e.preventDefault();
  $.ajax({
   type:"POST",
   url:"./api/register.php",
   data: $("#signup-form").serialize(),
   success:function(data) {
     swal('ส่งข้อมูลแล้ว', '', 'success')
         console.log('ส่งข้อมูลแล้ว')
   }
 })

// $.ajax({
//   type:"POST",
//   url: './api/register.php',
//   dataType:'json',
//   data:$('#signup-form').serialize(),
//   success: function(){
//       swal('ส่งข้อมูลแล้ว', '', 'success')
//       console.log()
//     }
// });

}else {
    swal('มีบางอย่างผิดพลาด!', 'กรุณาตรวจสอบอีกครั้ง', 'error')
}
})
