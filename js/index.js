let imgs=document.querySelectorAll(".bn-box li");
let dians=document.querySelectorAll(".lunbo li");
let banners=document.querySelector(".banner");
dians.forEach(function (ele,index) {
  ele.onclick=function () {
      for(let i=0;i<imgs.length;i++){
          dians[i].classList.remove("active");
          imgs[i].classList.remove("active");
      }
    imgs[index].classList.add("active");
      this.classList.add("active");
      n=index;
  }
});
let n=0;
function bannerFn(dir="r") {
    // n++;
    if(dir==="r"){
        n++;
        if(n===imgs.length){
            n=0;
        }
    }else if(dir==="l"){
        n--;
        if(n===-1){
            n=imgs.length-1;
        }
    }

    for(let i=0;i<imgs.length;i++){
        dians[i].classList.remove("active");
        imgs[i].classList.remove("active");
    }
    imgs[n].classList.add("active");
    dians[n].classList.add("active");
}
let st=setInterval(bannerFn,3000);
banners.onmouseover=function () {
    clearInterval(st);
};
banners.onmouseout=function () {
    st=setInterval(bannerFn,3000);
};