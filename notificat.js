var cm_config_defaults={home_page:"http://zbanget.blogspot.com",max_result:7,t_w:32,t_h:32,summary:9999,new_tab_link:true,ct_id:"comments-container",new_cm:" Komentar Baru!",interval:30000,alert:true},_cookie={set:function(g,f,j){var i,h;if(j){i=new Date();i.setTime(i.getTime()+(j*24*60*60*1000));h="; expires="+i.toGMTString()}else{h=""}document.cookie=g+"="+f+h+"; path=/"},get:function(f){var e=f+"=",h=document.cookie.split(";"),j;for(var g=0;g<h.length;g++){j=h[g];while(j.charAt(0)==" "){j=j.substring(1,j.length)}if(j.indexOf(e)==0){return j.substring(e.length,j.length)}}return null},del:function(b){this.set(b,"",-1)}},tt_cm=(_cookie.get("tt_cm"))?_cookie.get("tt_cm"):0,doc_title=document.title;for(var i in cm_config_defaults){cm_config_defaults[i]=(typeof(cm_config[i])=="undefined")?cm_config_defaults[i]:cm_config[i]}function showRecentComments(json){var entry=json.feed.entry,total=parseInt(json.feed.openSearch$totalResults.$t,10),skeleton="",oldCount=tt_cm,co=cm_config_defaults;if(oldCount<total){if(co.alert===true){alert((total-oldCount)+co.new_cm)}else{if(co.alert===false){document.title="("+(total-oldCount)+co.new_cm+") "+doc_title}else{co.alert((total-oldCount),co.new_cm)}}}var totalComments=total-oldCount>5?"5+":total-oldCount;if(oldCount<total){if(co.alert===true){alert(totalComments+co.new_cm)}else{if(co.alert===false){document.title="("+totalComments+co.new_cm+") "+doc_title}else{co.alert(totalComments,co.new_cm)}}}skeleton='<ul class="cm-outer">';for(var i=0;i<entry.length;i++){for(var j=0;j<entry[i].link.length;j++){if(entry[i].link[j].rel=="alternate"){link=entry[i].link[j].href;break}}var dash=link.lastIndexOf("/")+1,dot=link.lastIndexOf("."),title=link.split("-").join(" ").substring(dash,dot)+"&hellip;";author=entry[i].author[0],name=author.name.$t,avatar=author.gd$image.src.replace(/\/s[0-9]+(\-c|\/)/,"/s"+co.t_w+"$1").replace(/http\:\/\/www.google.com\/url\?source\=imglanding(.*?)q\=/i,"").replace(/\.(jpg|jpeg|png|bmp|gif)(.*?)$/i,".$1"),profile=(author.uri)?author.uri.$t:"#nope",u=entry[i].id.$t.replace(/^.*?blog\-([0-9]+).*?post\-([0-9]+)/,"http://www.blogger.com/delete-comment.g?blogID=$1&postID=$2"),r=entry[i]["thr$in-reply-to"].source.split("default/")[1],d=entry[i].id.$t.replace(/^.*?blog\-([0-9]+).*?post\-([0-9]+)/,"http://www.blogger.com/comment-iframe.g?blogID=$1&postID="+r+"&parentID=$2"),date=entry[i].gd$extendedProperty[1].value,content=("content"in entry[i])?entry[i].content.$t.replace(/<br ?\/?>/ig," ").replace(/<i rel="pre">(.*?)<\/i>/ig,"<pre><code>$1</code></pre>").replace(/<i rel="image">(.*?)<\/i>/ig,"<img class='cm-image' src='$1' alt='loading...' />").replace(/<i rel="code">(.*?)<\/i>/ig,"<code>$1</code>"):"",nt=(co.new_tab_link)?' target="_blank"':"";content=(content.length>co.summary)?content.substring(0,co.summary)+"&hellip;":content;skeleton+="<li>";skeleton+='<div class="cm-header"><a href="'+profile+'" rel="nofollow"'+nt+'><img alt="Loading..." style="width:'+co.t_w+"px;height:"+co.t_h+'px;" src="'+avatar+'"></a><span class="author"><a href="'+profile+'" rel="nofollow"'+nt+">"+name+'</a></span> pada <a href="'+link+'" title="'+title+'"'+nt+">"+title+"</a></div>";skeleton+='<div class="cm-content">';skeleton+='<span class="cm-text">'+content+"</span>";skeleton+='<div class="cm-footer">'+date+' <a href="'+d+'" onclick="window.open(this.href,&#39;_cf&#39;,&#39;scrollbars=1,width=470,height=250,left=355,top=135&#39;);return false;" title="Balas komentar">Balas</a> <a href="'+u+'" title="Hapus komentar ini..." target="_blank">Hapus</a></span> </span>';skeleton+="</div></li>"}skeleton+="</ul>";document.getElementById(co.ct_id).innerHTML=skeleton;_cookie.set("tt_cm",total,7000);tt_cm=total}(function(){var head=document.getElementsByTagName("head")[0],script=document.createElement("script"),co=cm_config_defaults;script.type="text/javascript";script.id="cm-feed-script";script.src=co.home_page+"/feeds/comments/default?alt=json-in-script&redirect=false&max-results="+co.max_result+"&callback=showRecentComments";head.appendChild(script);setInterval(function(){var newScript=document.createElement("script");newScript.type="text/javascript";newScript.id="cm-feed-script";newScript.src=co.home_page+"/feeds/comments/default?alt=json-in-script&redirect=false&max-results="+co.max_result+"&callback=showRecentComments";var oldScript=document.getElementById("cm-feed-script");oldScript.parentNode.removeChild(oldScript);head.appendChild(newScript)},co.interval)})();
