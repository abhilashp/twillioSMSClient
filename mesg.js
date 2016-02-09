function smsmesg(req, resp){
    var url = require("url");
    var query = url.parse(req.url, true).query;
    var jsonflg =  query.json;
    if(jsonflg === "1"){   
        resp.json(global.mesgArray);
    }else{
        resp.render("mesglogs.jade", {"val": global.mesgArray});
    }
}
function smsreceive(req, resp){

        var url = require("url");
        var query = url.parse(req.url, true).query;

        var fromPhone =  query.From;
        var toPhone =  query.To;
        var body =  query.Body;
        var timestr= new Date().toString();
        global.mesgArray.push({"rectime":timestr, "tonumber":toPhone, "fromnumber": fromPhone, "message":body});

        resp.writeHead(200, {"Content-Type": "text/xml"});
        resp.end("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"+
                "<Response></Response>");

}
function phonereceive(req, resp){
        resp.writeHead(200, {"Content-Type": "text/xml"});
        //Change to whatever you want.
        resp.end("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"+
                "<Response><Say>Abhi hasnt configured this number for voice yet. Good bye!</Say></Response>");
}
exports.smsmesg=smsmesg;
exports.phonereceive=phonereceive;
exports.smsreceive=smsreceive;
