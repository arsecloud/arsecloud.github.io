var form = document.getElementById('table');
var tr1=document.createElement('tr');

 var errorForm = document.getElementById('error');
 var lab = document.createElement('label');
var password;var passwordCheck; var log; var tel; var mail;
var passFlag = false;
var logFlag = false;
var mailFlag = false;
var nameFlag = false;
var telFlag = false;
var stOrRd = 0;

show(0);

lab.innerHTML="Введите данные необходимые для регистрации.";
errorForm.appendChild(lab);


function show(value)
{

  //чекбоксы проверяются и вставляется таблицу,отсюда берётся и флаг на БД студент/компания
if (value==1) {
  tr1.innerHTML = '<td align="center"><input     type="text" onchange="setName()" id="name" placeholder="Контактное лицо" /></td><td align="center"><input    onchange="setLogin()"  type="text" id="login" placeholder="Логин"/></td>';
  form.appendChild(tr1);
stOrRd=1;

}
else if(value==0){
  tr1.innerHTML = '<td align="center"><input   onchange="setName()"  type="text" id="name" placeholder="Имя" /></td><td align="center"><input     type="text" onchange="setLogin()" id="login" placeholder="Логин"/></td>';
  form.appendChild(tr1);
  stOrRd=0;

}
}
// <td align="center"><input     type="text" id="login" placeholder="Логин"/></td></tr><tr><td align="center"><input     type="text" id="post" placeholder="Электронная почта"/></td><td align="center"><input     type="text" id="parol1" placeholder="Номер телефона"/></td></tr><tr><td align="center"><input     type="text" id="parol1" placeholder="Пароль"/></td><td align="center"><input     type="text" id="parol2" placeholder="Подтвердите пароль"/></td>


closedParol.oninput = function() {
//норм тема
  };


function setLogin(){

//запросить в бд такой же логин
log = document.getElementById('login').value. toLowerCase();
document.getElementById('login').value=log;
var eL = document.getElementById('login');
var errMessageLog="";

var r=/[^A-Z-a-z-0-9]/g;

if(r.test(log)){
  errMessageLog+=" Введены недопустимые символы. Разрешены латинские буквы и цифры";
  eL.style.border = "2px solid #CC4E5C";
  logFlag=false;

}
if (log.length<4){
  errMessageLog+=(" Слишком короткий логин");
  eL.style.border = "2px solid #CC4E5C";
  logFlag=false;

}
if (log.length>15){
  errMessageLog+=(" Слишком длинный логин.");
  eL.style.border = "2px solid #CC4E5C";
  logFlag=false;

}
if (errMessageLog.length==0) //можно убрать, если не надо говорить пользователю, что он молодец.
{
  eL.style.border = "2px solid #4d4dff";
  logFlag=true;

}
lab.innerHTML=errMessageLog;
errorForm.appendChild(lab);
}
function setPass(){


  password = document.getElementById('parol1').value;
  passwordCheck = document.getElementById('parol2').value;
  var el = document.getElementById('parol1');
  var e2 = document.getElementById('parol2');
  var errMessage="";

    /* Описываем, что должно быть в пароле с меткой НЕ (^).
По уму, эту строку надо вынести из функции в глобальную область, чтобы регулярное выражение создавалось только один раз, будет шустрее.
*/
  var r=/[^A-Z-a-z-0-9]/g;
  if(r.test(password)){
    errMessage+=" Введены недопустимые символы. Разрешены латинские буквы и цифры";
    el.style.border = "2px solid #CC4E5C";
    passFlag=false;

  }
  if (password.length<6){
    errMessage+=(" Слишком короткий пароль");
    el.style.border = "2px solid #CC4E5C";
    passFlag=false;

  }
  if (password.length>20){
    errMessage+=(" Слишком длинный пароль.");
    el.style.border = "2px solid #CC4E5C";
    passFlag=false;

  }
  if (errMessage.length==0) //можно убрать, если не надо говорить пользователю, что он молодец.
  {
    el.style.border = "2px solid #4d4dff";
    passFlag=true;
  }
//  document.getElementById("youwrong").value=errMessage;

if(passwordCheck.length!=0){
    if(passwordCheck==password){
      e2.style.border = "2px solid #4d4dff";
      passFlag=true;

    }
    else{
      e2.style.border = "2px solid #CC4E5C";
      errMessage="Пароли не совпадают.";

      passFlag=false;

    }
  }
    lab.innerHTML=errMessage;
    errorForm.appendChild(lab);
}
function setMail() {
  var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  var errMessageMail="";
  var eM = document.getElementById('post');
  var myMail = document.getElementById('post').value;
  var valid = re.test(myMail);
  if (valid) {    eM.style.border = "2px solid #4d4dff";
  mailFlag=true;
}
  else {errMessageMail = 'Адрес электронной почты введен неправильно!';
eM.style.border = "2px solid #CC4E5C";
}
lab.innerHTML=errMessageMail;
errorForm.appendChild(lab);
}
function setTelephone(){
  var eT = document.getElementById('phone');

  var err="";
//надо установить крч маску на набор номера телефона
tel = document.getElementById('phone').value;
var sz =tel.length-1;
var r=/[^0-9]/g;

if(r.test(tel[sz])==false){

  var tel1="8";
  for (var i = 4; i < 18; i++) {
    if(tel[i]==')'){}
    else if(tel[i]==' '){}
    else if(tel[i]=='-'){}
    else {
      tel1+=tel[i];
    }// 0, 1, 2
  }
eT.style.border = "2px solid #4d4dff";
telFlag=true;
errorForm.removeChild(lab);
}
else{
  err="Неправильно введён номер телефона."
  eT.style.border = "2px solid #CC4E5C";
  lab.innerHTML=err;
  telFlag=false;

  errorForm.appendChild(lab);
}


}

function setName(){
  var name = document.getElementById('name').value;
  var eN= document.getElementById('name');

  var errMessageName="";

    /* Описываем, что должно быть в пароле с меткой НЕ (^).
По уму, эту строку надо вынести из функции в глобальную область, чтобы регулярное выражение создавалось только один раз, будет шустрее.
*/
  var r=/[^А-я-а-я]/g;
  if(r.test(name)){
    errMessageName+=" Введены недопустимые символы.";
    eN.style.border = "2px solid #CC4E5C";
    nameFlag=false;


    lab.innerHTML=errMessageName;

    errorForm.appendChild(lab);
  }
  if (name.length<2){
    errMessageName+=(" Слишком короткое имя");
    eN.style.border = "2px solid #CC4E5C";
    nameFlag=false;

    lab.innerHTML=errMessageName;

    errorForm.appendChild(lab);

  }
  if (name.length>20){
    errMessageName+=(" Слишком длинное имя.");
    eN.style.border = "2px solid #CC4E5C";
    nameFlag=false;


    lab.innerHTML=errMessageName;

    errorForm.appendChild(lab);
  }
  if (errMessageName.length==0) //можно убрать, если не надо говорить пользователю, что он молодец.
  {
    eN.style.border = "2px solid #4d4dff";
    nameFlag=true;
    errorForm.removeChild(lab);
  }




}

function check(){
//установить чек на все флаги какие есть и если все флаги true то писать всё в бд
if(telFlag && nameFlag && logFlag && passFlag && mailFlag){
  var telBD = tel; var nameBD = name;
  var loginBD = log; var passwordBD = password;
  var mailBD = mail; var typeBD = stOrRd;
}
}
