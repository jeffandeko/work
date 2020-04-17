const url = 'http://192.168.100.6:3001/';
const server = data => new Promise((resolve, reject) => {
    fetch(url + data.page, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(res => resolve(res)).catch(e => reject(e))
});;
export {
    server
}
