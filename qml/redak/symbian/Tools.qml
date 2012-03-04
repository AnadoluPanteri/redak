/* #ident "$Id: $"
 * @author: rzr@gna.org - rev: $Author: rzr$
 * Copyright: See README file that comes with this distribution
 *****************************************************************************/
import QtQuick 1.1
import com.nokia.symbian 1.1
import Core 1.0
import "../common/script.js" as Script
import "../common"
import "./"

ToolBar {
    anchors.bottom: parent.bottom
    tools:
        ToolBarLayout {

        ToolButton
        {
			// text: "quit"
            onClicked: { Qt.quit(); }
            iconSource: "toolbar-home"
        }

//        ToolButton
//        {
//            // text: "view"
//            iconSource: ( mainPage.isEdit ) ? "toolbar-search"
//                                            : "toolbar-search"; //TODO

//                                            // : "toolbar-search-selected";
//            onClicked: {
//        //console.log( iconSource );
//            mainPage.toggleEdit(); }
//        }


        ToolButton
        {
            // text: "menu"
            iconSource: "toolbar-menu"
            onClicked: (myMenu.status == DialogStatus.Closed) ? myMenu.open() : myMenu.close()
        }

    }
}