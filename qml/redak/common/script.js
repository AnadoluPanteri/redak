/* #ident "$Id: $"
 * @author: rzr@gna.org - rev: $Author: rzr$
 * Copyright: See README file that comes with this distribution
 *****************************************************************************/
var g_font_pixelSize = 30;

/// http://doc.qt.nokia.com/qt-components-symbian/qml-style.html
var g_color_normal = "#00AAAAAA";
var g_color_bg_normal = "#00000000";
var g_color_bg_pressed = "steelblue";

var g_info = "redak : text editor\n\nURL: http://rzr.online.fr/q/redak\nLicense: GPL-3+\nContact: Phil Coval <rzr@gna.org>\n";


function image(filename)
{
    //    "image://theme/icon-m-common-drilldown-arrow"
    //                                + (theme.inverted ? "-inverse" : "")
    var res = filename; //
    //res += ( platformInverted )  ? "-inverse" : "";
    return res;
}

function save(content, filename)
{
    var content = "content";
    var filename = "filename";

    filename = currentFileNameView.text;

    //content = mainPage.textView.text; //TODO
    //core.save(content,filename);

    core.save( mainPage.content , currentFileNameView.text);

}


function load( filename_arg )
{
    //console.log("log: filename: " + filename);
    filename = filename_arg;

    //mainPage.load( filename );//TODO
    mainPage.content = core.load( filename );

    //console.log("log: content: " + mainPage.content.length );

    appWindow.pageStack.pop();
}


/// obsolete
function loadUrl(filename)
{
    parent.visible = true;
    textView.text = "loading: " + filename;
    var url = null;
    url =  Qt.resolvedUrl( filename );
    var loader = new XMLHttpRequest();
    loader.open( "GET", url );
    loader.onreadystatechange = function() {
                if (XMLHttpRequest.DONE == loader.readyState ) {
                    textView.text = loader.responseText;
                } }
    loader.send();
}