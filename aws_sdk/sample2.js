// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

// This sets your credentials correctly. 
var credentials = new AWS.SharedIniFileCredentials({profile: 's3'});
AWS.config.credentials = credentials;


// Create an S3 client
var s3 = new AWS.S3();


var params = {
    Bucket: 'node-sdk-sample-7cf6a7d4-4269-4e8c-b884-4cdce2447828', /* required */

  };


ObjectList = s3.listObjectsV2(params, function(err, data) {
if (err)
    console.log(err, err.stack); 
else 
    console.log('all is well');     // successful response
});

console.log(ObjectList.data)