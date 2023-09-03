const link = document.getElementById('origamid');

if (link instanceof HTMLAnchorElement) {
    console.dir(link.href)
    link.href = link.href.replace('http://', 'https://')
    console.dir(link.href)
}


