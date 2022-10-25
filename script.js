function myFunction(x) {
    if (!x.matches) {
        var vale='';
        for(var i=0;i<7;i++)
            vale+='<img src=image/heart.png>'
          document.getElementById("bubbles").innerHTML=vale;
    } 
  }
  var x = window.matchMedia("(max-width: 700px)");
  x.addListener(myFunction);
  var T1= T2 ='',arr= ['index','converter','tools','products','about'],
  arr1=['http://api.whatsapp.com/send?phone=+917598226670&text=Hi Ragu',
        'tg://resolve?domain=ragu2k',
        'https://www.instagram.com/ragu2k',
        'https://www.linkedin.com/in/ragug/',
        'mailto: ragu19062002@gmail.com?body=Hi RAGU',
        'whatsapp','telegram','instagram','linkedin','email'
];
  for(var i=0;i<5;i++){
    T2+='<li><a href="'+arr1[i]+'"><img src=image/'+arr1[i+5]+'.ico loading=lazy></a></li>';
    if(i)
    T1+='<li><a href='+arr[i]+'.html>'+(i==1?'File':'')+arr[i]+'</a></li>';
}
document.getElementById("usefull").innerHTML=T2;
document.getElementById("ntab").innerHTML=T1;