
## 27 预览请求的时间分解

时序故障阶段解释

**Queueing**: 浏览器在以下情况下将请求加入队列排队：
  * 有更高优先级的请求.
  * 这个站点已经打开了六个TCP连接，这是http请求限制。 仅适用于HTTP/1.0和HTTP/1.1。
  * 浏览器在磁盘缓存中短暂分配空间

**Stalled**: 请求可能由于排队中描述的任意一个原因而被延迟

**DNS Lookup**: 浏览器正在解析请求的IP地址。  

**Initial connection**: 浏览器正在建立连接，包括TCP握手/重试和协商SSL。  

**Proxy negotiation**: 浏览器正在与代理服务器协商请求。

**Request sent**: 正在发送请求。

**ServiceWorker Preparation**: 浏览器正在启动 service worker。

**Request to ServiceWorker**: 请求正在被发送到service worker。  

**Waiting (TTFB)**: 浏览器正在等待响应的第一个字节，TTFB代表第一个字节的返回时间， 这个计时包括1次延迟往返和服务器准备响应所花费的时间。  

**Content Download**: 浏览器正在接收响应，要么直接来自网络，要么来自service worker。 这个值是读取响应体所花费的总时间。 大于预期值可能表示网络较慢，或者表示浏览器正在忙于执行其他工作，从而延迟了响应的读取。  

**Receiving Push**: 浏览器通过HTTP/2服务器推送接收这个响应的数据。  

**Reading Push**: 浏览器正在读取之前收到的本地数据。