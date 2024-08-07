var posts=["2024/08/07/常用话术以及邮件格式/","2024/08/07/WineAus出口中国指南/","2024/08/07/红酒相关术语/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };