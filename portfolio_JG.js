
//creates a tag to download cv from cloud.
function download() {
    var anchor = document.createElement('a');
    anchor.setAttribute('href', "https://1drv.ms/w/s!Ag7OG9yYzTBJb2AD09jpVPaaeZQ?e=GcA2wg");
    anchor.setAttribute('download','text/html');
    anchor.setAttribute('target', '_blank');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
}

