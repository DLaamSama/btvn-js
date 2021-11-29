const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";
const regexEmail=/[\w]+\@gmail\.com/g;
const regexPhone=/((09|03|07|08|05)+([0-9]{8}))/g;

function gmail(str) {
    var str1, str2;
     str1=str.match(regexEmail);
     str2= str.match(regexPhone);
     if (str1)
     console.log(str1);
     if (str2)
     console.log(str2);
}
gmail(textEmail);
gmail(textPhone);