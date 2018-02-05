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
var chapHeaders = document.querySelectorAll("article > div.chap-header")
console.log(chapHeaders)


document.getElementById("content-wrapper").addEventListener('scroll', function (event) {
    for (var i = 0; i < chapHeaders.length; i ++) {
        if (isInViewport(chapHeaders[i])) {
            console.log(chapHeaders[i].id);
            document.getElementById(chapHeaders[i].id + "-toc").style = 
                "background-color: #708090; border-left: 6px solid #0c2856";
        } else if (!isInViewport(chapHeaders[i])) {
            document.getElementById(chapHeaders[i].id + "-toc").style = "background-color: null;";
        }
    }
})
