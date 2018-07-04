import * as request from 'request'

let req = request.get('http://codekul.com', (err: any, res: any, bdy: any) => {

    console.log(err)
    console.log(res)
    console.log(bdy)
})
