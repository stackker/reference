
global.fetch = require('node-fetch');

// test('test that the fetch works?', (done) => {
    // expect(functions.add(1,2)).toBe(3);
    // expect(functions.add(101,202)).toBe(303);
    // console.log("Hello World1");
    // return 'asdf';
    // console.log("Hello World2");
    // const data = testPost(done);
    // console.log(data);
    // done();
// });

test('test that the fetch works?', async () => {

    const url = 'http://localhost:8000/'
    const clients = [
        {key:1, name:"Larry"},
    ]

    let data = await postData(url + 'clear');

    data = await postData(url + 'all');
    expect(data.length).toBe(0);

    data = await postData(url + 'add', clients[0]);
    // console.log(data);
    expect(data).toEqual({});

    data = await postData(url + 'all');
    // console.log(data);
    // console.log(data.length);
    expect(data.length).toBe(1);
    // expect(data).toEqual({});

    data = await postData(url + 'add', clients[0]);
    console.log(data);
    expect(data.length).toBe(0);
    expect(data).toMatchObject({});

});


async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });
    console.log(response.status);
    console.log(response.statusText);
    return await response.json()    // parses JSON response into native JavaScript objects
}
