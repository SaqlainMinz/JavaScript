const clock =document.querySelector('#clock')
function digitalClock(){
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    
    clock.innerHTML=`${h} : ${m} : ${s}`
}
setInterval(digitalClock,1000);
