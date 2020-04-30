/*
  Social Bookmarking Script
  
  Version: 2.0.0
  
  Copyright (c) 2008,2009 by Christian Petersen (www.iscp.de) - All rights reserved
  
  This script is licensed under: Creative Commons Attribution-Share Alike 3.0 
  http://creativecommons.org/licenses/by-sa/3.0/
  
  This means, that you can use this script free of charge for commercial and noncommercial.
  We would like if you put an seo-friendly ("do follow") link to http://www.social-bookmarking-script.com on the site
  which uses this script.
  
  For the newest version of the Social Bookmarking Script visit: http://www.social-bookmarking-script.com
 
*/

/*  *********************************************************
    Functions for internal use
    ********************************************************* 
*/

function sbsintern_title(title,encoding) {
    /* 
      This function tests if a external title is given. If not the title of the document is used.
      It encodes the url if wanted:
      encoding:
        0: encodeURIComponent 
        1: no encoding
        3: escape
        
        
        Call: sbsintern_title(title,encoding)
        
     */ 
      
      var functiontitle = "";
      
      if (typeof title != "undefined") functiontitle = title;
      else functiontitle = document.title;
      
//      return functiontitle;
      switch(encoding){
       case 1: 
        return functiontitle;
        break;
       case 2: 
        return escape(functiontitle);
        break;
       default:
        return encodeURIComponent(functiontitle);
      }
      
}

function sbsintern_url(url,encoding) {
    /* 
      This function tests if a external url is given. If not the url of the document is used.
      It encodes the url if wanted:
      encoding:
        0: encodeURIComponent 
        1: no encoding
        3: escape
        
        
        Call: sbsintern_url(url,encoding)
     */ 
     
    var functionurl = "";
      
    if (typeof url != "undefined") {
      if (url != "") functionurl = url
      else functionurl = location.href;
    }
    else functionurl = location.href; 
    
    switch(encoding){
      case 1: 
        return functionurl;
        break;
      case 2: 
        return escape(functionurl);
        break;
      default:
        return encodeURIComponent(functionurl);
    }

}
  
/*  *********************************************************
    Functions for calling bookmarking-services
    ********************************************************* 
*/
  
function sbs_blinkbits(url,title) { window.open('http://www.blinkbits.com/bookmarklets/save.php?v=1&amp;title='+sbsintern_title(title,0)+'&amp;source_url='+sbsintern_url(url,0)+'&amp;source_image_url=&amp;rss_feed_url=&amp;rss_feed_url=&amp;rss2member=&amp;body='); return false; }
function sbs_blinklist(url,title) { window.open('http://www.blinklist.com/index.php?Action=Blink/addblink.php&amp;Description=&amp;Tag=&amp;Url='+sbsintern_url(url,0)+'&amp;Title='+sbsintern_title(title,0)); return false; }
function sbs_blogmarks(url,title) { window.open('http://blogmarks.net/my/new.php?mini=1&amp;simple=1&amp;url='+sbsintern_url(url,0)+'&amp;content=&amp;public-tags=&amp;title='+sbsintern_title(title,0)); return false; }
function sbs_bonitrust(url,title) { window.open('http://www.bonitrust.de/account/bookmark/?bookmark_url='+ sbsintern_url(url,1)); return false; }
function sbs_bookmarkscc(url,title) { window.open('http://www.bookmarks.cc/bookmarken.php?action=neu&amp;url='+(document.location.href)+'&amp;title='+sbsintern_title(title,1)); return false; }
function sbs_delicious(url,title) { window.open('http://del.icio.us/post?v=2&url='+sbsintern_url(url,0)+'&notes=&tags=&title='+sbsintern_title(title,0)); return false; }
function sbs_delicious2(url,title) { window.open('http://del.icio.us/post?v=2&url='+encodeURIComponent(location.href)+'&notes=&tags=&title='+encodeURIComponent(document.title)); return false; }
function sbs_digg(url,title) { window.open('http://digg.com/submit?phase=2&amp;url='+sbsintern_url(url,0)+'&amp;bodytext=&amp;tags=&amp;title='+sbsintern_title(title,0)); return false; }
function sbs_diigo(url,title) { window.open('http://www.diigo.com/post?url='+sbsintern_url(url,0)+'&amp;title='+sbsintern_title(title,0)+'&amp;tag=&amp;comments='); return false; }
function sbs_facebook(url,title) { window.open('http://www.facebook.com/sharer.php?u='+sbsintern_url(url,0)+'&amp;t='+sbsintern_title(title,0)); return false; }
function sbs_favit(url,title) { window.open('http://www.favit.de/submit.php?url='+sbsintern_title(title,1)); return false; }
function sbs_favoriten(url,title) { window.open('http://www.favoriten.de/url-hinzufuegen.html?bm_url='+sbsintern_url(url,0)+'&amp;bm_title='+sbsintern_title(title,0)); return false; }
function sbs_folkd(url,title) { window.open('http://www.folkd.com/submit/'+sbsintern_title(title,1)); return false; }
function sbs_furl(url,title) { window.open('http://www.furl.net/storeIt.jsp?u='+sbsintern_url(url,0)+'&keywords=&t='+sbsintern_title(title,0)); return false; }
function sbs_googlebm(url,title) { window.open('http://www.google.com/bookmarks/mark?op=add&bkmk='+sbsintern_url(url,0)+'&annotation=&labels=&title='+sbsintern_title(title,0)); return false; }
function sbs_healthr(url,title) { window.open('http://healthranker.com/submit.php?url='+sbsintern_url(url,1)+'&title='+sbsintern_title(title,1)); return false; }
function sbs_icio(url,title) { window.open('http://www.icio.de/add.php?url='+sbsintern_url(url,0)); return false; }
function sbs_jumptags(url,title) { window.open('http://www.jumptags.com/add/?url='+sbsintern_url(url,0)+'&amp;title='+sbsintern_title(title,0)); return false; }
function sbs_kledy(url,title) { window.open('http://www.kledy.de/submit.php?url='+sbsintern_title(title,1)); return false; }
function sbs_linkarena(url,title) { window.open('http://linkarena.com/bookmarks/addlink/?url='+sbsintern_url(url,0)+'&amp;title='+sbsintern_title(title,0)+'&amp;desc=&amp;tags='); return false; }
function sbs_linksilo(url,title) { window.open('http://www.linksilo.de/index.php?area=bookmarks&amp;func=bookmark_new&amp;addurl='+sbsintern_url(url,0)+'&amp;addtitle='+sbsintern_title(title,0)); return false; }
function sbs_magnolia(url,title) { window.open('http://ma.gnolia.com/bookmarklet/add?url='+sbsintern_url(url,0)+'&amp;title='+sbsintern_title(title,0)+'&amp;description=&amp;tags='); return false; }
function sbs_mrwong(url,title) { window.open('http://www.mister-wong.de/index.php?action=addurl&amp;bm_url='+sbsintern_url(url,0)+'&amp;bm_notice=&amp;bm_description='+sbsintern_title(title,0)+'&amp;bm_tags='); return false; }
function sbs_muskelspanner(url,title) { window.open('http://www.muskelspanner.de/node/add/drigg?url='+sbsintern_title(title,2)+'&amp;title='+sbsintern_title(title,2)); return false; }
function sbs_netvouz(url,title) { window.open('http://www.netvouz.com/action/submitBookmark?url='+sbsintern_url(url,0)+'&amp;description=&amp;tags=&amp;title='+sbsintern_title(title,0)+'&amp;popup=yes'); return false; }
function sbs_newsider(url,title) { window.open('http://www.newsider.de/submit.php?url='+sbsintern_title(title,1)); return false; }
function sbs_newskick(url,title) { window.open('http://www.newskick.de/submit.php?url='+sbsintern_title(title,1)); return false; }
function sbs_newsvine(url,title) { window.open('http://www.newsvine.com/_wine/save?popoff=1&amp;u='+sbsintern_url(url,0)+'&amp;tags=&amp;blurb='+sbsintern_title(title,0)); return false; }
function sbs_oneview(url,title) { window.open('http://www.oneview.de/quickadd/neu/addBookmark.jsf?URL='+sbsintern_url(url,0)+'&amp;title='+sbsintern_title(title,0)); return false; }
function sbs_propeller(url,title) { window.open('http://www.propeller.com/submit/?U='+sbsintern_url(url,0)+'&amp;T='+sbsintern_title(title,0)); return false; }
function sbs_publishr(url,title) { window.open('http://www.publishr.de/account/bookmark/?bookmark_url='+sbsintern_title(title,1)); return false; }
function sbs_readster(url,title) { window.open('http://www.readster.de/submit/?url='+sbsintern_url(url,0)+'&amp;title='+sbsintern_title(title,0)); return false; }
function sbs_reddit(url,title) { window.open('http://reddit.com/submit?url='+sbsintern_url(url,0)+'&amp;title='+sbsintern_title(title,0)); return false; }
function sbs_seekxl(url,title) { window.open('http://social-bookmarking.seekxl.de/?add_url='+sbsintern_url(url,0)+'&amp;title='+sbsintern_title(title,0)); return false; }
function sbs_seoigg(url,title) { window.open('http://www.seoigg.de/node/add/storylink?edit[url]='+sbsintern_url(url,0)+'&amp;edit[title]='+sbsintern_title(title,0)); return false; }
function sbs_shopbm(url,title) { window.open('http://www.shop-bookmarks.de/bookmarken.php?action=neu&amp;url='+sbsintern_title(title,1)+'&amp;title='+sbsintern_title(title,1)); return false; }
function sbs_simpy(url,title) { window.open('http://www.simpy.com/simpy/LinkAdd.do?title='+sbsintern_title(title,0)+'&amp;tags=&amp;note=&amp;href='+sbsintern_url(url,0)); return false; }
function sbs_slashdot(url,title) { window.open('http://slashdot.org/bookmark.pl?url='+sbsintern_url(url,0)+'&amp;title='+sbsintern_title(title,0)); return false; }
function sbs_smarking(url,title) { window.open('http://smarking.com/editbookmark/?url='+ sbsintern_url(url,1) +'&amp;description=&amp;tags='); return false; }
function sbs_stumbleupon(url,title) { window.open('http://www.stumbleupon.com/submit?url='+sbsintern_url(url,0)+'&amp;title='+sbsintern_title(title,0)); return false; }
function sbs_spurl(url,title) { window.open('http://www.spurl.net/spurl.php?v=3&amp;tags=&amp;title='+sbsintern_title(title,0)+'&amp;url='+sbsintern_url(url,0)); return false; }
function sbs_technorati(url,title) { window.open('http://technorati.com/faves?add='+sbsintern_url(url,0)+'&amp;tag='); return false; }
function sbs_tipd(url,title) { window.open('http://tipd.com/submit.php?url='+sbsintern_url(url,0)); return false; }
function sbs_webnews(url,title) { window.open('http://www.webnews.de/einstellen?url='+sbsintern_url(url,0)+'&amp;title='+sbsintern_title(title,0)); return false; }
function sbs_yahoobm(url,title) { window.open('http://myweb2.search.yahoo.com/myresults/bookmarklet?t='+sbsintern_title(title,0)+'&d=&tag=&u='+sbsintern_url(url,0)); return false; }
function sbs_yigg(url,title) { window.open('http://yigg.de/neu?exturl='+sbsintern_url(url,0)); return false; }
