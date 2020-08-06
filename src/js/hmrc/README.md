Tax Authority in UK (HMRC) requires software providers using some of their APIs (Eg: MTD VAT API) to provide consistent headers known as Fraud Prevention headers as part of the request. These are HTTP headers that help HMRC to monitor and audit transactions to protect taxpayers’ data from fraudulent activities.

Fraud prevention headers submitted by an application are expected to meet the requirements of HMRC’s fraud prevention specification.

Here are some of HMRC's fraud prevention headers for which the values can be generated using this library in the format that HMRC expects:

1. Gov-Client-Timezone
1. Gov-Client-Screens
1. Gov-Client-Window-Size
1. Gov-Client-Browser-Plugins
1. Gov-Client-Browser-Do-Not-Track
1. Gov-Client-Local-IPs

Information about these headers can be found here: <https://developer.service.hmrc.gov.uk/api-documentation/docs/fraud-prevention>
