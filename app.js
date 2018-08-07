var express = require("express");
const rp = require('request-promise')
var app = express();


const getdata = {
    method: 'POST',
    uri: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,LTC,ETH'
}


rp(getdata)
    .then(function (response) {

        console.log(response);
        data = JSON.stringify(response);
        console.log(data);


                var senddata = {
                    method: 'POST',
                    uri: 'https://support.alphateca.com/test.php',
                    body: {
                        ajax: response
                    },
                    json: true // Automatically stringifies the body to JSON
                };

                rp(senddata)
                    .then(function (parsedBody) {
                        console.log('success');
                        // POST succeeded...
                    })
                    .catch(function (err) {
                        console.log(err);
                        // POST failed...
                    });

    })
    .catch(function (err) {
        console.log(err);
    });

app.listen(5000);