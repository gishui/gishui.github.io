var posts=["2024/08/27/hello-world/","2024/08/27/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };