

const menu = document.querySelector(".manuteam");

let bars = document.querySelector("#bars");
let close = document.querySelector(".menuClose");
let menupage = document.querySelector("#manuPage");
let menuItem = document.querySelector(".manuteam");
let submenu = document.querySelector(".subManu");
let searchbtn = document.querySelector('#searchbtn');
let slidernav1 = document.querySelector('.secNav');
let uppingBtn = document.querySelector('.upBtn ')
let slidernav2 = document.querySelector('.firstNav');



bars.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.add("manuteam2")
});
close.addEventListener("click", function (e) {
    menu.classList.remove("manuteam2")
});

menupage.addEventListener("click", function (e) {
    e.stopPropagation();
    document.querySelector(".subManu").classList.toggle("subManu2")
});


submenu.addEventListener("click", (e)=>{e.stopPropagation()})
menuItem.addEventListener("click", (e)=>{e.stopPropagation()})

document.body.addEventListener("click", (e) => {

    if (submenu.classList.contains("subManu2")) {
        submenu.classList.remove('subManu2')

    } else if (menu.classList.contains("manuteam2")) {
        menu.classList.remove('manuteam2')
    }

})




searchbtn.addEventListener('click', function () {
    document.querySelector('.primarymanu').classList.toggle('srcDiv2')
})
document.querySelector('.srcDiv i').addEventListener('click', function () {
    document.querySelector('.srcDiv').classList.remove('srcDiv2')
    alert('This is not a real Website');
})

slidernav1.addEventListener('click', function () {
    document.querySelector('.homeslider').classList.remove('back1')
    document.querySelector('.homeslider').classList.add('back2')
    document.querySelector('.secNav').classList.add('Nav2')
    document.querySelector('.firstNav').classList.remove('Nav2')

})

slidernav2.addEventListener('click', function () {
    document.querySelector('.homeslider').classList.remove('back2')
    document.querySelector('.homeslider').classList.add('back1')
    document.querySelector('.secNav').classList.remove('Nav2')
    document.querySelector('.firstNav').classList.add('Nav2')

})

document.addEventListener('scroll', function () {
    if (document.body.scrollTop > 1400) {

        document.querySelectorAll('.count').forEach(count => {
            function myCount() {
                let datata = count.getAttribute('data-key');
                let counter = ++count.innerText;
                if (counter < datata) { setTimeout(myCount, 1) } else { count.innerText = datata }
            }
            myCount();
        })
    }
})

document.addEventListener('scroll', function () {
    if (document.body.scrollTop > 200) {
        document.querySelectorAll('.siglebox').forEach(s => {
            s.classList.remove('scale1');
        })
    }
})
document.addEventListener('scroll', function () {
    if (document.body.scrollTop > 400) {
        uppingBtn.style.opacity = "1"
    } else if (document.body.scrollTop < 400) {
        uppingBtn.style.opacity = "0"
    }
})
uppingBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
document.addEventListener('scroll', function () {
    if (document.body.scrollTop > 58) {
        document.querySelector(".primarymanu").classList.add('menuFixed')
    } else if (document.body.scrollTop < 58) { document.querySelector(".primarymanu").classList.remove('menuFixed') }
})