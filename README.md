# twillioSMSClient
Receive SMS Messages and Text Messages on a webpage!
Purpose of this project is to create a simple node.js based webserver which can act as receiver for SMS messages. This will be helpful if  you need to receive SMS messages as on a the web page instead of mobile phone.

Can be quiet handy for QA automation applications which need to receive text messages.

The project can be easily modified to receive/play voice commands too.

## Prerequisites
Node.js and npm must be installed.
Twillio servers need to access the system. Firewall ports should be opened.

## How to install
1. Make a new folder
2. git clone https://github.com/abhilashp/twillioSMSClient.git
3. npm install
4. node server.js
Note: Checkout 'forver' app for running the server for-ever..

## Set up on Twillio
1. Goto your twillio account. Buy phone number if needed.
2. Goto Phone number->Voice->Request Url. Set it as http://<yourip>:8080/mesg/phonereceive
3. Goto Phone number->Messaging->Request Url. Set it as http://<yourip>:8080/mesg/smsreceive
4. That is it!

Testing your setup:
1. Verify it by visiting http://<yourserverip>/mesg/phonereceive. Should give some xml response. If not check firewall settings
2. Send a text message to the number you bough. Visit http://<yourserverip>:8080/  Newly received text will be shown.

For doing qa-automation, if you need the results in json, simply add json=1 tag to url.
Eg: curl http://<yourip>:8080/mesg/smsmesg?json=1 will get you all messages received.

The messages are saved in memory, and no db persistance is provided. Can be added easily.
