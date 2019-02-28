
const dataFetcher = (url, options) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    if ( typeof options.method === 'undefined' )
        options.method = "GET";

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            resolve(e);
        } else if (e.target.readyState === 4) {
            reject("Error fetching data: " + url);
        }
    })

    request.open(options.method, url);
    request.responseType = options.response_type;

    if ( typeof options.data !== 'undefined' ) {
        request.send( options.data );
    } else {
        request.send();
    }
});

var data = new FormData();

data.append('name1','value1');
data.append('name2','value2');
data.append('name3','value3');

dataFetcher('http://playground.local/test_api/index.php', { data: data, method: "POST" })
.then((d) => {
    console.log(JSON.parse(d.target.responseText));
})
.catch((e) => {
    console.log(e);
});
