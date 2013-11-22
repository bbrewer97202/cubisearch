var request = require("request");

var API_KEY = "9popn4ei009ggv20nsuvk4evc1fl5c2pcq61mhsg74melpu2kj4rfc015opg1i69";
var CUBICULUS_BASE_URL = "http://www.cubiculus.com/api-rest/";

var getRequest = function(url, res) {
    request({ method: 'GET', uri: url }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.json({
                statusCode: 200,
                response: JSON.parse(response.body)
            });
        } else {
            res.json({
                statusCode: response.statusCode,
                response: {}
            });
        }
    });
};

module.exports = {

    default: function(req, res) {
        response.send("");
    },

    instructions: function(req, res) {
        getRequest(CUBICULUS_BASE_URL + "building-instruction/" + API_KEY, res);
    },

    setById: function(req, res) {
        if (! req.params.id) {
            res.json({
                statusCode: 500,
                response: {},
                error: "Invalid id"
            });            
        } else {
            getRequest(CUBICULUS_BASE_URL + "lego-set/" + API_KEY + "/" + req.params.id, res);
        }
    },

    instructionsById: function(req, res) {
        if (! req.params.id) {
            res.json({
                statusCode: 500,
                response: {},
                error: "Invalid id"
            });            
        } else {
            getRequest(CUBICULUS_BASE_URL + "building-instruction/" + API_KEY + "/" + req.params.id, res);
        }
    }
}
