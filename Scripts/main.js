window.addEventListener('load', function () {
    console.log(document.getElementsByClassName('bio'))

    if (document.getElementsByClassName("bio").length > 0)
        document.getElementsByClassName("bio")[0].style.opacity = 100;
    if (document.getElementsByClassName("f1").length > 0)
        document.getElementsByClassName("f1")[0].style.opacity = 100;
    if (document.getElementsByClassName("f2").length > 0)
        document.getElementsByClassName("f2")[0].style.opacity = 100;
    if (document.getElementsByClassName("f3").length > 0)
        document.getElementsByClassName("f3")[0].style.opacity = 100;
    if (document.getElementsByClassName("f4").length > 0)
        document.getElementsByClassName("f4")[0].style.opacity = 100;
    if (document.getElementsByClassName("f5").length > 0)
        document.getElementsByClassName("f5")[0].style.opacity = 100;
    if (document.getElementsByClassName("footer").length > 0)
        document.getElementsByClassName('footer')[0].style.opacity = 100;
});