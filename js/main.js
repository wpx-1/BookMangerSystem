// 动态加载js脚本文件
  function loadScript(url) {
    if($("script[id='bookTable-js']").length>0){
      $("script[id='bookTable-js']").remove();
    }
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "bookTable-js";
      script.src = url;
      document.body.appendChild(script);
  }
// 动态加载css文件
  function loadStyles(url) {
    if($("link[id='bookTable-css']").length>0){
      $("link[id='bookTable-css']").remove();
    }
      var link = document.createElement("link");
      link.type = "text/css";
      link.id = "bookTable-css";
      link.rel = "stylesheet";
      link.href = url;
      document.getElementsByTagName("head")[0].appendChild(link);
 }

//ajxa方法
  function loadHtml(selector,htmlUrl,cssUrl,scriptUrl,data) {
    $(selector).load(htmlUrl,data,function(responseTxt,statusTxt,xhr){
      if(statusTxt=="success"){
        console.log("外部内容加载成功!");
        loadStyles(cssUrl);
        loadScript(scriptUrl);
      }
      if(statusTxt=="error")
        console.log("Error: "+xhr.status+": "+xhr.statusText);
    });

  }
