// ==UserScript==
// @name         PPSC Planner – Display All Records (Run Once)
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Automatically set "Display records per page" to All on PPSC planner page (only once after full load)
// @match        https://www.ppsc.gop.pk/*/planner/showdata.aspx
// @grant        none
// @author       Hamza Haroon
// @contact      botme@hamo.dev
// @repository   https://github.com/hamzaharoon1314/PPSC-Website-Bot
// ==/UserScript==

(function () {
    'use strict';

    window.addEventListener('load', function () {
        const select = document.querySelector('select[name="DataTables_Table_0_length"]');
        if (select) {
            select.value = '-1'; // "All" option in DataTables
            select.dispatchEvent(new Event('change'));
            console.log('[PPSC Planner Script] Records per page set to ALL.');
        } else {
            console.warn('[PPSC Planner Script] Dropdown not found.');
        }
    });
})();
