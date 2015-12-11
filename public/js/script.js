window.onload = function() {
    var nsOption = {
        strikethrough:true,
        tables: true, 
        tableHeaderId: true,
        ghCodeBlocks: true,
        tasklists: true,
        simplifiedAutoLink: true,
        parseImgDimensions: true
    }
    
    var converter = new showdown.Converter(nsOption);
    var pad = document.getElementById('ns-editor');
    var markdownArea = document.getElementById('markdown');   

    var convertTextAreaToMarkdown = function(){
        var markdownText = pad.value;
        html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    };

    pad.addEventListener('input', convertTextAreaToMarkdown);

    convertTextAreaToMarkdown();
};