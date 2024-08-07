var posts=["2024/06/08/WineAus出口中国指南/","2024/04/08/常用话术以及邮件格式/","2024/04/08/红酒相关术语/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };