Tax Authority in UK (HMRC) requires software providers using some of their APIs (Eg: MTD VAT API) to provide consistent headers known as Fraud Prevention headers as part of the request. These are HTTP headers that help HMRC to monitor and audit transactions to protect taxpayers’ data from fraudulent activities. 
Details here: <https://developer.service.hmrc.gov.uk/api-documentation/docs/fraud-prevention>

Fraud prevention headers submitted by an application are expected to meet the requirements of HMRC’s fraud prevention specification.

Here are some of HMRC's fraud prevention headers required to be sent by web applications, for which the values can be generated using this library in the format that HMRC expects:

1. Gov-Client-Timezone (The local timezone of the originating device, expressed as UTC±)
1. Gov-Client-Screens (Originating device’s screen details like width, height, scaling-factor, colour-depth)
1. Gov-Client-Window-Size (Originating device’s window width and height)
1. Gov-Client-Browser-Plugins (A list of browser plugins on the originating device)
1. Gov-Client-Browser-Do-Not-Track (Indicates whether 'Do Not Track option' is enabled on the browser)
1. Gov-Client-Local-IPs (A list of all local IPv4 and IPv6 addresses available to the originating device; format should be like `Gov-Client-Local-IPs-Timestamp: 2020-09-21T14:30:05.123Z`)

Detailed information about each of these headers can be found here:  https://developer.service.hmrc.gov.uk/guides/fraud-prevention/connection-method/web-app-via-server/
