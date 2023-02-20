// ==UserScript==
// @name         QOL tweaks for UniSA portal
// @namespace    https://ferrisfox.me
// @copyright    Mozilla Public License 2.0
// @version      0.1
// @description  QOL tweaks to UniSA student portal
// @author       Ferrisfox
// @homepage     https://my.unisa.edu.au/Student/myEnrolment/myEnrolment/TimetableCalendar.aspx
// @match        https://my.unisa.edu.au/Student/myEnrolment/myEnrolment/TimetableCalendar.aspx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=unisa.edu.au
// @grant        none
// ==/UserScript==

/// Add a "now" button to Timetable.
(function() {
    'use strict';
    // define method that will be called when "now" button is pressed
    var onclick = function() {
        // get elements we need to interact with
        var dateIn = document.getElementById("ctl00_ctl00_wpManager_wpTimeTableCalendar_caltxtCurrentDate");
        var goBtn = document.getElementById("ctl00_ctl00_wpManager_wpTimeTableCalendar_btnGo");

        // format current date
        var date = (new Date(Date.now())).format("dd MMM yyyy");

        // enter current date into input and simulate click
        dateIn.value = date;
        goBtn.click();
    }

    // get elements we need to interact with
    var parent = document.getElementById("ctl00_ctl00_wpManager_wpTimeTableCalendar_pnlActionBar").children[1];
    var nextBtn = document.getElementById("ctl00_ctl00_wpManager_wpTimeTableCalendar_ibtnNext");

    // create the button & set attributes
    var node = document.createElement("input");
    node.setAttribute("class","btn btn-primary btn-sm");
    node.setAttribute("value","Now");
    node.setAttribute("style","width:3rem;margin-left:10px;vertical-align: middle;");

    // attach the onclick function
    node.addEventListener("click", onclick);

    // insert button into a nice spot on the action bar
    parent.insertBefore(node, nextBtn);
})();