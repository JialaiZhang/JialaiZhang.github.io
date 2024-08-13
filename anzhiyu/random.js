var posts=["2024/08/11/Cubase101(壹)/","2024/08/12/Cubase中Effect Track的各种FX/","2024/08/06/WineAus出口中国指南/","2024/08/09/低成本高效搭建个人博客网站/","2024/08/04/常用话术以及邮件格式/","2024/08/05/红酒相关术语/","2024/08/13/红酒运输和相关文件/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };