# Pre-ExpressJS - Project Setup
## Purpose
- Demonstrates the creation of an http server and the serving of static routes and files using
  plain NodeJS.

Files in this folder demonstrate a NodeJS HTTP web-server implementation.
NodeJS can accomplish the same tasks as express, however, the task is not simple.

Steps To Demo
- `git clone https://github.com/troveofgems/express.git`
- `cd pre-express`
- `node nodeServer`
- `Open URL http://localhost:PORT`

# A Quick Explanation On How The Internet Works

---------------------------------------------------------------

## OSI Models

| 7-Layer  | 5-Layer | Description |
| ------------- | ------------- | ------------- |
| Application  | Application  | End User Layer - HTTP, FTP, IRC, SSH, DNS
| Presentation  |   | Syntax Layer - SSL, SSH, IMAP, FTP, MPEG, JPEG|
| Session  |   | Sync & Send To Port - APIs, Sockets, WinSock |
| Transport  | Transport  | End-To-End Connections - TCP/UDP |
| Network  | Network  | Packets - IP, ICMP, IPSec, IGMP |
| Data-link  | Data-link  | Frames - Ethernet, PPP, Switch, Bridge |
| Physical  | Physical  | Physical Structures - Co-Ax/Fiber cables, Wireless APs, Hubs, Repeaters, electricity.

## Networking - TCP & UDP
|   | UDP | TCP |
| ------------- | ------------- | ------------- |
| Name  | User Datagram Protocol  | Transmission Control Protocol|
| Desc  | Lightweight Headers @ 8-bytes, Connectionless Consistency.  | Persistent connection that utilizes 3-way handshake for communication. Reliable with delivery acknowledgements. Retransmission of data if needed, ordered packets. And congestion control with latency injection. |
| Pros  | UDP IS FAST  | Reliability over HTTP  |
| Cons  | Possible: Packet-loss, traffic congestion, jumbled packets, un-reliable  | TCP/IP CAN BE SLOW |
| Use Cases  | Online Video Games or RealTime Communications  | Bank or User specific Application Data |

## HTTP
HTTP - Hypertext Transfer Protocol. 

Default is HTTP/1.1 however HTTP/2 is available though not without some [drawbacks](https://almanac.httparchive.org/en/2019/http#http2-issues).

[HTTP/3](https://blog.cloudflare.com/http3-the-past-present-and-future/) is the intended future. Check out my [nginx project](https://github.com/troveofgems/nginx) for more details.

Created to pass HTML to requesters. Today, it delivers far more digital files than just HTML.
HTTP is an efficient delivery method and only connects when required (HTTP/1.1) otherwise it is stateless/no dialog with server.

HTTP Skeleton

![alt text](https://www.cleantutorials.com/wp-content/uploads/2015/11/http-header-and-body.png)

Req. get / http/2

Res. http/2 200 ...