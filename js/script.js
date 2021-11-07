// banner start
flag = 0;



function controler(x){
    flag=x+flag;
    slideShow(flag);
}

slideShow(flag);

function slideShow(num){
   let slide = document.getElementsByClassName('content');

   if(num>1){
       flag=0;
       num=0;
   }
   if(num<0){
       flag=slide.length-1;
       num=slide.length-1;
   }

   for(y of slide){
       y.style.display='none';
   }

   slide[num].style.display="block";
}
// banner ends