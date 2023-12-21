(function () {
    function browseByAjax(hash) {
        if (!hash) return;

        const link = document.querySelector(`[wm-link='${hash}']`);
        if(!link) return;

        const destiny = document.querySelector('[wm-link-destiny]');

        const url = hash.substring(1);
        fetch(url)
            .then(response => response.text())
            .then(html => {
                destiny.innerHTML = html;

                //Case uses tooltip
                
                //const result = html.match(/\<script\>([\s\S]*)\<\/script\>/);
                //if(result && result.length >= 2) eval(result[1]);
            })
    }

    function linksConfig() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    function startedBrowse() {
        if (location.hash) {
            browseByAjax(location.hash);
        } else {
            const firstLink = document.querySelector('[wm-link]');
            browseByAjax(firstLink.hash);
        }
    }

    window.onhashchange = e => browseByAjax(location.hash);
    
    linksConfig();
    startedBrowse();
})();