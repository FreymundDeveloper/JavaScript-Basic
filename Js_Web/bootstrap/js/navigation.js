(function () {
    function browseByAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[wm-link='${hash}']`)
        if(!link) return

        const destiny = document.querySelector('[wm-link-destiny]')

        const url = hash.substring(1)
        fetch(url)
            .then(response => response.text())
            .then(html => {
                destiny.innerHTML = html
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
            browseByAjax(location.hash)
        } else {
            const firstLink = document.querySelector('[wm-link]')
            browseByAjax(firstLink.hash)
        }
    }

    window.onhashchange = e => browseByAjax(location.hash)
    
    linksConfig()
    startedBrowse()
})()