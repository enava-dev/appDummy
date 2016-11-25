
var express = require('express');
var bodyParser = require('body-parser');
var validate = require('express-jsonschema').validate;
var Joi = require('joi');






// TYPES
// null
// A JSON "null" production
// boolean
// A "true" or "false" value, from the JSON "true" or "false" productions
// object
// An unordered set of properties mapping a string to an instance, from the JSON "object" production
// array
// An ordered list of instances, from the JSON "array" production
// number
// An arbitrary-precision, base-10 decimal number value, from the JSON "number" production
// string
// A string of Unicode code points, from the JSON "string" production



// FORMATS
// "mongo-object-id" - check if the string is a valid hex-encoded representation of a MongoDB ObjectId
// "alpha" - check if the string contains only letters (a-zA-Z)
// "alphanumeric" - check if the string contains only letters and numbers
// "numeric" - check if the string contains only numbers
// "hexadecimal" - check if the string is a hexadecimal number
// "hexcolor" - check if the string is a hexadecimal color
// "base64" - check if a string is Base64 encoded
// "decimal" - check if a string is a decimal number, such as 0.1, .3, 1.1, 1.00003, 4.0, etc.
// "int" - check if a string is an integer
// "float" - check if a string is a float
// "uuid" - check if the string is UUID
// "date-time" - date representation, as defined by RFC 3339, section 5.6.
// "email" - internet email address, see RFC 5322, section 3.4.1.
// "hostname" - internet host name, see RFC 1034, section 3.1.
// "ipv4" - IPv4 address, according to dotted-quad ABNF syntax as defined in RFC 2673, section 3.2.
// "ipv6" - IPv6 address, as defined in RFC 2373, section 2.2.
// "uri" - a universal resource identifier (URI), according to RFC3986.



var LoginSchema = {
    id: 'loginSchema',
    type: 'object',
    properties: {
        email: {
            type: 'string',
            required: true,
            format: 'email'
        },
        password: {
            type: 'string',
            required: true,
            minLength: 1
        }
    }
};

var IntSchema = {
  id: 'instSchema',
  type: 'number',
  format: 'int',
  required: true
};






var app = express();



app.use(bodyParser.json());
app.post('/api/login',
    validate({body: LoginSchema}),
    findAndLoginUser
);





app.get('/api/institute/:instituteId/course',
    // validate(loginSchema),
    // validateDefault(loginSchema),
    findAndLoginUser
);


app.get('/api/institute/:instituteId/student',
    // validate(loginSchema),
    // validateDefault(loginSchema),
    findAndLoginUser
);



// app.param('instituteId', validate({institueId: IntSchema}));


app.param('instituteId', function(req, res, next, instituteId){
  console.log('app.param instituteId');
  console.log('instituteId:', instituteId);
  console.log('req.params.instituteId', req.params.instituteId);
  // validate({instituteId: IntSchema});


  console.log('before joi');
  Joi.validate(instituteId, Joi.number().integer(), function(err, value){
    console.log('after joi');
    if (err){
      console.log('joi err');
      console.log('err:', err);
    }

    console.log('value:', value);
    return next();
  });

  
});

app.use(handleErrors);

function findAndLoginUser (req, res, next) {
    // if schema validation fails 
    // this middleware won't be called
    console.log('findAndLoginUser');
    res.send('findAndLoginUser');
}

function handleErrors (err, req, res, next) {
    // validation error will be passed as first argument
    // you can return it or match with your api responses

    console.log('handleErrors');
    console.log('err.name:', err.name);
    if (err.name === 'JsonSchemaValidation') {
        console.log('err.message:', err.message);
        console.log('err.validations:', err.validations);
    
        var responseData = {
           statusText: 'Bad Request',
           jsonSchemaValidation: true,
           validations: err.validations  // All of your validation information
        };
        res.status(400);
        res.send(responseData);
        return;
    }


    console.log('default error 500');
    res.status(500);
    res.send({handleErrors: err});
    return;
}

app.listen(3000);