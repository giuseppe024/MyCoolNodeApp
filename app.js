const http = require('http');

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

// res.end('<h1>Hello World, Happy New Year</h1>');
res.end(response(req, res));
});

server.listen(port,() => {
    let today = new Date();

    console.log(dateTimeForLog(today) + ' ' + `Server running at port `+ port + '. CTRL-C to stop');

});

function response(req, res) {
    let head = '<!DOCTYPE html><html><head><meta charset="UTF-8">';
    let body = '<body id"theBody">'
    let bodyEnd = '</body></html>'

    let hello = '<h1>Hello World, Happy New Year 2019 (16.07.2019 08:50)</h1>';
    
    let xfp = req.headers['x-forwarded-proto']  || 'GC undefined';
    let xProto = '<h5>x-forwarded-proto = ' + xfp + '</h5>';
    
    return head + body + hello + xProto + bodyEnd;
}

function dateTimeForLog(dt) {
    let dd = dt.getDate(); //1..31
    let mm = dt.getMonth()+1; //0..11, January is 0!
    let hh = dt.getHours(); //0..23
    let mn = dt.getMinutes(); // 0..59
    let ss = dt.getSeconds(); // 0..59

    if(dd<10) {
        dd = '0'+dd;
    } 

    if(mm<10) {
        mm = '0'+mm;
    } 

    if(hh<10) {
        hh = '0'+hh;
    } 

    if(mn<10) {
        mn = '0'+mn;
    } 

    if(ss<10) {
        ss = '0'+ss;
    } 

    return dt.getFullYear() + mm + dd + '_' + hh + mn + ss;
}
