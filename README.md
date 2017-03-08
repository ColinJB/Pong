# _Ping-Pong_

#### _Web application for ping-pong game, 03/07/2017_

#### By _**Colin Bloom (github/ColinJB)**_

## Description

_Web application takes a number from a user and returns a range of numbers from one to the chosen number with a few exceptions_
* Numbers divisible by 3 are replaced with "ping"
* Numbers divisible by 5 are replaced with "pong"
* Numbers divisible by 15 are replaced with "ping-pong"
_Everytime a user enters a new number, they will receive a new corresponding range._

## Setup/Installation Requirements.

* _Clone repo from GitHub_
* _Open in text editor/web browser_

## No known Bugs

## Support and contact details

_Please reach out if you have any ideas to contribute or critiques to convey! colinjbloom113@gmail.com_

## Technologies Used

_HTML_
_CSS_
_JavaScript_
_jQuery_

## Specifications

## Specifications
 Behavior|Input|Output|
 -----|-----|-----|
+Creates array from player input|8|[1,2,3,4,5,6,7]
+Replaces numbers divisible by 3 with "ping"|[3,4,5,7,9]|["ping",4,5,7,"ping"]
+Replaces numbers divisible by 5 with "pong"|[3,4,5,7,9]|[3,4,"pong",7,9]
+Replaces numbers divisible by 15 with "ping-pong"|[10,20,30]|[10,20,"ping-pong"]
+Creates new array with all new changes|[2,3,4,5,10,15]|[2,"ping",4,"pong",10,"ping-pong"]

### License

*GPL*

Copyright (c) 2017 **_Colin Bloom_**
