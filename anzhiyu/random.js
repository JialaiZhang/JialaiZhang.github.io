var posts=["2024/08/06/WineAus出口中国指南/","2024/08/05/红酒相关术语/","2024/08/04/常用话术以及邮件格式/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };