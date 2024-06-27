let ch=document.getElementById("intro-user_email");
let pass=document.getElementById("intro-user_password");
let login_btn=document.getElementById("enter");
// let box1=document.get
var test1=false,test2=false;
login_btn.addEventListener("click",function(){
        for(var i=0;i<ch.length;i++){
            if(ch[i]=='@'){
                test1=true;
                break;
            }
        }
        for(i=0;i<ch.length;i++){
            if(ch[i]=='.'){
                test2=true;
                break;
            }
        }
        if(test1==false || test2==true){
            alert("Icorrect Email")
            ch.style.border="1px solid red";
        }
        if(pass.value.length<8){
            alert("Icorrect password")
            pass.style.border="1px solid red";
        }
        else{
            pass.style.border="none";
        }
})
