// ==UserScript==
// @name         PPSC Employment Data
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Fill PPSC Service Record form with dropdown menu
// @match        https://www.ppsc.gop.pk/*/UsersReg/PersonalExperience.aspx
// @grant        none
// @author       Hamza Haroon
// @contact      botme@hamo.dev
// @repository   https://github.com/hamzaharoon1314/PPSC-Website-Bot
// ==/UserScript==

(function () {
    'use strict';

    // Your service records
    const records = [
        {
            name: "Menu 1",
            post: "", // Job Title
            department: "", // Company Name
            serviceType: "P", // Private
            serviceNature: "C", // Contract
            startDate: "", //dd-mm-yyyy
            serving: "N", // No
            endDate: "", //dd-mm-yyyy
            scale: "",
            relevant: "Y" // Yes
        },
        {
            name: "Menu 2",
            post: "", // Job Title
            department: "", // Company Name
            serviceType: "P", // Private
            serviceNature: "C", // Contract
            startDate: "", //dd-mm-yyyy
            serving: "N", // No
            endDate: "", //dd-mm-yyyy
            scale: "",
            relevant: "Y" // Yes
        },
        {
            name: "Menu 3",
            post: "", // Job Title
            department: "", // Company Name
            serviceType: "P", // Private
            serviceNature: "C", // Contract
            startDate: "", //dd-mm-yyyy
            serving: "N", // No
            endDate: "", //dd-mm-yyyy
            scale: "",
            relevant: "Y" // Yes
        }
    ];

    function fillForm(record) {
        document.querySelector('#ctl00_ContentPlaceHolder1_txtpostName').value = record.post;
        document.querySelector('#ctl00_ContentPlaceHolder1_txtDepartment').value = record.department;
        document.querySelector('#ctl00_ContentPlaceHolder1_drpServiceType').value = record.serviceType;
        document.querySelector('#ctl00_ContentPlaceHolder1_drpServiceNature').value = record.serviceNature;
        document.querySelector('#ctl00_ContentPlaceHolder1_txtpostStartDate').value = record.startDate;
        document.querySelector('#ctl00_ContentPlaceHolder1_DrpServing').value = record.serving;
        document.querySelector('#ctl00_ContentPlaceHolder1_txtPostEndingDate').value = record.endDate;
        document.querySelector('#ctl00_ContentPlaceHolder1_txtScale').value = record.scale;
        document.querySelector('#ctl00_ContentPlaceHolder1_drp_Relevant').value = record.relevant;
    }

    // Create floating panel
    const panel = document.createElement('div');
    panel.style.position = 'fixed';
    panel.style.bottom = '20px';
    panel.style.left = '20px';
    panel.style.zIndex = '9999';
    panel.style.background = '#333';
    panel.style.padding = '10px';
    panel.style.borderRadius = '8px';
    panel.style.color = 'white';
    panel.style.fontSize = '14px';
    panel.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';

    // Dropdown
    const select = document.createElement('select');
    select.style.marginRight = '10px';
    select.style.padding = '5px';
    select.style.borderRadius = '4px';
    select.style.border = 'none';
    select.style.outline = 'none';
    select.style.color = 'black';

    records.forEach((rec, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = rec.name;
        opt.style.color = 'black';
        select.appendChild(opt);
    });

    // Button
    const btn = document.createElement('button');
    btn.innerText = 'Fill Form';
    btn.style.padding = '5px 10px';
    btn.style.border = 'none';
    btn.style.borderRadius = '4px';
    btn.style.background = 'green';
    btn.style.color = 'white';
    btn.style.cursor = 'pointer';

    btn.addEventListener('click', () => {
        const idx = parseInt(select.value, 10);
        fillForm(records[idx]);
        alert(`Form filled for: ${records[idx].name}`);
    });

    panel.appendChild(select);
    panel.appendChild(btn);
    document.body.appendChild(panel);
})();
