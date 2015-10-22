$(document).ready(function(){
    var navs = ["preface", "c1", "c1-1", "c1-1-1", "c1-1-2", "c1-1-3", "c1-1-4", 
                "c1-1-5", "c1-1-6", "c1-1-7", "c1-2", "c1-2-1", "c1-2-2", 
                "c1-2-3", "c1-2-4", "c1-2-5", "c1-2-6", "c1-3", "c1-3-1", "c1-3-2",
                "c1-3-3", "c1-4", "c2", "c2-1","c2-1-1", "c2-1-2", "c2-1-3", "c2-2",
                "c3", "c3-1","c3-2", "c3-3", "c3-4", "c3-4-1", "c3-4-2", "c3-4-3", "c3-4-4",
                "c3-4-5", "c3-4-6", "c3-5", "c3-6", "c3-7", "c3-8", "c3-9", "c3-9-1", "c3-9-2", "c3-9-3",
                "c4", "c4-1", "c4-1-1", "c4-1-2", "c4-1-3", "c4-1-4", "c4-2", "c4-3", "c4-4", "c4-5", "c4-6",
                "c5", "c5-1", "c5-1-1", "c5-1-2", "c5-1-3", "c5-1-4", "c5-1-5", "c5-1-6", "c5-1-7" , "c5-1-8", 
                "c5-1-9", "c5-1-10", "c5-1-11", "c5-2", "c5-2-1", "c5-2-2", "c5-2-3", "c5-3", "c5-4", "c5-4", 
                "c5-5", "c5-6", "c5-7", "c6", "c6-1", "c6-1-1", "c6-1-2", "c6-1-3", "c6-2", "c6-3", "c6-4", "c6-4-1", 
                "c6-4-2", "c6-4-3", "c6-5", "c7", "c7-1", "c7-2", "c7-2-1", "c7-2-2", "c7-2-3", "c7-3", "c7-3-1", "c7-3-2", 
                "c7-3-3", "c7-3-4", "c7-3-5", "c7-4", "c8", "c8-1", "c8-2", "c8-2-1", "c8-2-2", "c8-2-3", "c8-3", "c8-3-1",
                "c8-3-2", "c8-3-3", "c8-3-4", "c8-4", "c8-4-1", "c8-4-2", "c8-5", "c8-5-1", "c8-5-2", "c8-5-3", "c8-6",
                "c9", "c9-1", "c9-2", "c9-3", "c9-4", "c9-5", "c10", "c10-1", "c10-1-1", "c10-1-2", "c10-1-3", "c10-1-4",
                "c10-1-5", "c10-1-6", "c10-1-7", "c10-2", "c11", "c11-1", "c11-2", "c11-3", "c11-4", "c11-4-1", "c11-4-2",
                "c11-4-3", "c11-4-4", "c11-5", "c11-6", "c11-7", "c11-8", "c11-9", "c11-10", "c11-11", "c11-12", "c12",
                "c12-1", "c12-1-1", "c12-1-2", "c12-1-3", "c12-1-4", "c12-2", "c12-2-1", "c12-2-2", "c12-2-3", "c13", 
                "c13-1", "c13-1-1", "c13-1-2", "c13-1-3", "c13-1-4", "c13-2", "c13-2-1", "c13-2-2", "c13-2-3", "c13-2-4", 
                "c13-3", "c13-3-1", "c13-3-2", "c13-3-3", "c13-3-4", "c13-4", "c13-5", "c14", "c14-1", "c14-2", "c14-3", "c15",
                "c15-1", "c15-2", "c15-3", "c15-4", "c16", "c16-1", "c16-2", "c16-3", "c16-4", "c16-5", "c16-6", "c16-7", "c16-8",
                "c16-9", "c16-10", "c16-11", "c16-12", "c16-13", "c16-14", "c16-15", "c16-16", "c16-17", "c16-18", "c17", "c17-1",
                "c17-2", "c17-3", "c17-4", "c17-5", "c17-6", "c17-7", "c17-8", "c17-9", "c17-10", "c17-11", "c18", "c18-1",
                "c18-1-1", "c18-1-2", "c18-1-3", "c18-1-4", "c18-1-5", "c18-1-6", "c18-1-7", "c18-2", "c18-2-1", "c18-2-2", 
                "c18-3", "c18-4", "c19", "c19-1", "c20", "c20-1", "c20-1-1", "c20-1-2", "c20-1-3", "c20-1-4", "c20-1-5",
                "c20-1-6", "c20-1-7", "c20-1-8", "c20-2", "c20-2-1", "c20-2-2", "c20-2-3", "c20-2-4", "c20-2-5", "c20-2-6",
                "c20-3", "c20-4", "c20-4-1", "c20-4-2", "c20-5", "c20-5-1", "c20-5-2", "c20-5-3", "c20-6", "c20-6-1", 
                "c20-6-2", "c20-6-3", "c20-6-4", "c20-7", "c20-7-1", "c20-7-2", "c21", "c21-1", "c21-1-1", "c21-1-2", "c21-1-3",
                "c21-1-4", "c21-1-5", "c21-1-6", "c21-1-7", "c21-1-8", "c22", "c22-1", "c22-1-1", "c22-1-2", "c22-1-3", "c22-1-4",
                "c22-2", "c22-2-1", "c22-2-2", "c23", "c23-1", "c23-2", "c23-3", "c23-4", "c23-5", "c24", "c24-1", "c24-2",
                "c24-3", "c25", "c25-1", "c25-2", "c25-3", "c25-4", "c25-4-1", "c25-4-2", "c25-4-3", "c25-4-4", "c25-4-5",
                "c26", "c27", "c27-1", "c27-2", "c27-3", "c27-4", "c27-5", "c27-6"];
    
    
    $(window).scroll(function(){
        var currentTop = $(window).scrollTop();
        if(currentTop + 50 < $("#" + navs[0]).offset().top) {
        	 $("a[href='#"+navs[0]+"']").click();
        	 return;
        }
        for(var i=0; i<navs.length; i++) {
        	if(i != navs.length - 1 ) {
        		if($("#" + navs[i + 1]).offset() == undefined) {
        			alert(navs[i + 1]);
        		}
	            if(currentTop + 50 >= $("#" + navs[i]).offset().top && (currentTop+50) < $("#" + navs[i + 1]).offset().top) {
	                $("a[href='#"+navs[i]+"']").click();
	                $("#currentChapter").val(navs[i]);
	                break;
	            }
        	} else {
        		$("a[href='#"+navs[i]+"']").click();
        	}
        }
    });
    
    function initScroll() {
    	var chapter = $("#currentChapter").val();
    	if(chapter == "top") {
    		return;
    	}
    	var chapterTop = $("#" + chapter).offset().top;
    	if(chapterTop + 50 < $("#" + navs[0]).offset().top) {
    		$("a[href='#"+navs[0]+"']").click();
    		return;
    	}
    	for(var i=0; i<navs.length; i++) {
    		if(i != navs.length - 1 ) {
	            if(chapterTop + 50 >= $("#" + navs[i]).offset().top && (chapterTop+50) < $("#" + navs[i + 1]).offset().top) {
	                $("a[href='#"+navs[i]+"']").click();
	                break;
	            } 
    		} else {
    			 $("a[href='#"+navs[i]+"']").click();
    		}
        }
    	$(window).scrollTop(chapterTop);
    }
    
    initScroll();
    
    var titleHeight = $("#title").height() + 100;
    $("#side-menu").affix({
    	offset: {
    		top: titleHeight,
    		bottom: function () {
    			return (this.bottom = $('.footer').outerHeight(true));
    		}
    	}
	});
    
    $(document).delegate("#btnChangeLanguage", "click", function() {
    	var href = $(this).attr('href');
    	var currentChapter = $("#currentChapter").val();
    	$(this).attr("href", href + "&currentChapter=" + currentChapter);
    });
    
    $(document).delegate("#toTop", "click", function() {
    	$("a[href='#preface']").click();
    });
    
});