const express = require('express')
const next = require('next')
const comperssion = require('compression')
const LRUCache = require('lru-cache')
const openBrowser = require('react-dev-utils/openBrowser');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
    max: 100,
    maxAge: 1000 * 60 * 60
})

app.prepare()
    .then(() => {
        const server = express()
        server.use(comperssion())
        server.get('/supplierCenter/:id', (req, res) => {
            const actualPage = '/post'
            const queryParams = { title: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })
        server.get('/', (req, res) => {
            renderAndCache(req, res, '/')
        })
        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(8087, (err) => {
            if (err) throw err
            openBrowser("http://localhost:8087");
            console.log('> Ready on http://localhost:8087')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })

function getCacheKey(req) {
    return `${req.url}`
}
function renderAndCache(req, res, pagePath, queryParams) {
    const key = getCacheKey(req)
    if (ssrCache.has(key)) {
        console.log(`CACHE HIT: ${key}`)
        res.send(ssrCache.get(key))
        return
    }
    app.renderToHTML(req, res, pagePath, queryParams)
        .then((html) => {
            console.log(`CACHE MISS: ${key}`)
            ssrCache.set(key, html)
            res.send(html)
        })
        .catch((err) => {
            app.renderError(err, req, res, pagePath, queryParams)
        })
}