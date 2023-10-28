let me=document.getElementById("me");
let bg=document.getElementById("bg");

if(screen.width<480){
    var metop=250;
    var bgtop=50;
me.style.top="250px";
bg.style.top="50px";

}

else{
    me.style.top="150px";
    bg.style.top="150px";
metop=150;
bgtop=150;
}



window.addEventListener('scroll' , function(){
    var value=this.scrollY;
    bg.style.top=bgtop + value*0.5 + 'px';
    bg.style.opacity=100 -value*0.5 + '%';
    
    me.style.top=metop -value*0.75 + 'px';
    me.style.opacity=100 -value*0.5 + '%';
})

var myskills = ['https://cdn.iconscout.com/icon/free/png-512/free-c-4-226082.png?f=avif&w=256' , 'https://cdn.iconscout.com/icon/free/png-512/free-python-3628999-3030224.png?f=avif&w=256', 'https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=avif&w=256' , 'https://cdn.iconscout.com/icon/free/png-512/free-react-4-1175110.png?f=avif&w=256' , 'https://cdn.iconscout.com/icon/free/png-512/free-bootstrap-226077.png?f=avif&w=256' , 'https://cdn.iconscout.com/icon/free/png-512/free-html5-2038876-1720089.png?f=avif&w=256','https://cdn.iconscout.com/icon/free/png-512/free-css3-8-1175200.png?f=avif&w=256' , 'https://cdn.iconscout.com/icon/free/png-512/free-github-163-761603.png?f=avif&w=256','https://cdn.iconscout.com/icon/free/png-512/free-node-js-3-1174937.png?f=avif&w=256'];

const skillcon=document.getElementsByClassName("skillcontain")[0];
for(let i=0 ; i<myskills.length;i++){
    const skill=document.createElement("div");
    skill.setAttribute('class','skillbox');
    skill.setAttribute('data-aos','fade-left');
    const img=document.createElement("img");
    img.setAttribute('src',myskills[i]);
    skill.appendChild(img);
    skillcon.appendChild(skill);
}


var myproj=[['./images/proj1.png','Ennnexus:2k23','https://github.com/raghav1482/Ennexus-2023','https://cesennexus2k23.netlify.app/'] , ['./images/proj2.png','MovieAdda','https://github.com/raghav1482/MovieAdda','https://movieaddaoriginal.netlify.app/'] , ['./images/proj3.png','MMMUT HOMEPAGE','https://github.com/raghav1482/mmmutdemo','https://raghav1482.github.io/mmmutdemo/'] , ['./images/proj4.png','Text Utils','https://github.com/raghav1482/TEXTUTILS_','https://textutilsraghav.netlify.app/'],['./images/proj5.png','Rock Paper Scissors','https://github.com/raghav1482/rockpaperscissors','https://rockpaperscissorsrg.netlify.app/'] , ['./images/proj6.png','Calculator','https://github.com/raghav1482/Calculator-JS','https://raghav1482.github.io/Calculator-JS/']];
const projcon=document.getElementsByClassName("projcon")[0];

for(let i=0 ; i<myproj.length;i++){
    const proj=document.createElement("div");
    proj.setAttribute('class','projc');
    proj.setAttribute('data-aos','fade-up');
    const img=document.createElement("img");
    img.setAttribute('src',myproj[i][0]);
    img.addEventListener('click' , ()=>{
        window.open(myproj[i][3]);
    })
    proj.appendChild(img);
    const text=document.createElement("a");
    text.setAttribute('class','projname');
    text.setAttribute('href',myproj[i][2]);
    text.innerHTML=myproj[i][1];
    proj.appendChild(text);
    projcon.appendChild(proj);
}