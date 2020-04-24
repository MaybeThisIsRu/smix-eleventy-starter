// https://rusingh.com/blog/2019/09/19/opening-all-external-links-in-new-tab-securely/
const safeLinks = function () {
    let links = document.links;
    if (links.length) {
        // links is an HTMLCollection, an array-like object.
        // We cannot directly call the forEach method on it.
        // We can use the same function through the Array prototype object.
        Array.prototype.forEach.call(links, link => {
            if (link.hostname != window.location.hostname) {
                link.target = "_blank";
                link.setAttribute("rel", "noopener noreferrer");
                link.classList.add("externalLink");
            } else {
                link.classList.add("localLink");
            }
        });
    }
};

export { safeLinks };