/*
 * DIDX.net api consumption script no Nodejs.
 * please make changes in your ./config file with your userid 
 * and password
 * to access service you have to signup at https://www.didx.net
 *
 * developed by Kamal Uddin Panhwar http://www.kamalpanhwar.com
 */

var request = require("request");
var config = require('./config');
var parseString = require('xml2js').parseString;

var VRatingFrom = 1;
var VRatingTo = 1;

	soap_header = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
 <soapenv:Header></soapenv:Header>
 <soapenv:Body>
 <urn:getDIDCountry>
 <user>`+config.didx.user_name+`</user>
     <password>`+config.didx.password+`</password>
     <from>`+VRatingFrom+`</from>
     <to>`+VRatingTo+`</to>
 </urn:getDIDCountry>
 </soapenv:Body>
</soapenv:Envelope>`;


var options = { method: 'POST',
  url: 'http://api.didx.net/webservice/WebGetDIDCountriesServer.php',
	headers: 
   { 
     'cache-control': 'no-cache',
     'Content-Type': 'text/xml' },
  body: soap_header };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
	parseString(body, function (err, result) {
    console.dir(JSON.stringify(result));
}); 

});
