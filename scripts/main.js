var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var welcome = document.querySelector("#welcome");
var chapters = document.querySelectorAll("article > div.chapter-container")
console.log(chapters)


document.getElementById("content-wrapper").addEventListener('scroll', function (event) {
    for (var i = 0; i < chapters.length; i ++) {
        if (isInViewport(chapters[i])) {
            console.log(chapters[i].id);
            document.getElementById(chapters[i].id + "-toc").style = 
            "background-color: #9aa6b1; border-left: 6px solid #0c2856; border-bottom: 1px solid #0c2856; border-right: 1px solid #0c2856; border-top: 1px solid #0c2856;"; 
        } else if (!isInViewport(chapters[i])) {
            document.getElementById(chapters[i].id + "-toc").style = "background-color: null;";
        }
    }
})
