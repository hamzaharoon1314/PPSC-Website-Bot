// ==UserScript==
// @name         PPSC Personal Information
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Adds button to auto-fill PPSC Personal Info form on click
// @match        https://www.ppsc.gop.pk/*
// @grant        none
// @author       Hamza Haroon
// @contact      botme@hamo.dev
// @repository   https://github.com/hamzaharoon1314/PPSC-Website-Bot
// ==/UserScript==

(function() {
    'use strict';

    // Your personal data here
    const formData = {
        name: "", //Name
        cnicIssueDate: "", //dd-mm-yyyy
        cnicExpiryDate: "", //dd-mm-yyyy
        postalAddress: "", // Full Address with City
        phoneNumber: "", // Phone Number 03001234567
        fatherName: "", // Father Name
        domicileIssueDate: "", //dd-mm-yyyy

        religion: "M", // Muslim
        fatherOccupation: "12", // id number example: 12 check from page source code.
        domicile: "12", // id number example: 12 check from page source code.
        maritalStatus: "S", // Single
        relativeInPPSC: "False",
        dismissed: "False",
        conCourt: "False",
        crimTrial: "False",
        chances: "0",
        centre: "S" // // id initial example: L check from page source code.
    };

    // Create the button
    let btn = document.createElement("button");
    btn.textContent = "Auto Fill Data";
    Object.assign(btn.style, {
        position: 'fixed',
        top: '60px',
        left: '20px',
        padding: '10px 15px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        zIndex: '9999',
    });
    document.body.appendChild(btn);

    // Fill function
    function fillForm() {
        // Fill text fields
        document.querySelector('#ctl00_ContentPlaceHolder1_txtName').value = formData.name;
        document.querySelector('#ctl00_ContentPlaceHolder1_txtCNICIssueDate').value = formData.cnicIssueDate;
        document.querySelector('#ctl00_ContentPlaceHolder1_txtCNICExpiryDate').value = formData.cnicExpiryDate;
        document.querySelector('#ctl00_ContentPlaceHolder1_txtPostAdd').value = formData.postalAddress;
        document.querySelector('#ctl00_ContentPlaceHolder1_txtPhoneNumber').value = formData.phoneNumber;
        document.querySelector('#ctl00_ContentPlaceHolder1_txtFatherName').value = formData.fatherName;
        document.querySelector('#ctl00_ContentPlaceHolder1_txtDomicileIssueDate').value = formData.domicileIssueDate;

        // Fill dropdowns
        document.querySelector('#ctl00_ContentPlaceHolder1_drpReligion').value = formData.religion;
        document.querySelector('#ctl00_ContentPlaceHolder1_drpFatherOccupation').value = formData.fatherOccupation;
        document.querySelector('#ctl00_ContentPlaceHolder1_drpDomicile').value = formData.domicile;
        document.querySelector('#ctl00_ContentPlaceHolder1_drpMartialStatus').value = formData.maritalStatus;
        document.querySelector('#ctl00_ContentPlaceHolder1_drpRelativeInPPSC').value = formData.relativeInPPSC;
        document.querySelector('#ctl00_ContentPlaceHolder1_drpDismissed').value = formData.dismissed;
        document.querySelector('#ctl00_ContentPlaceHolder1_drpConCourt').value = formData.conCourt;
        document.querySelector('#ctl00_ContentPlaceHolder1_drpCrimTrial').value = formData.crimTrial;
        document.querySelector('#ctl00_ContentPlaceHolder1_drpChances').value = formData.chances;
        document.querySelector('#ctl00_ContentPlaceHolder1_drpCentre').value = formData.centre;

        // Trigger change events for dropdowns
        document.querySelectorAll('select').forEach(sel => {
            sel.dispatchEvent(new Event('change', { bubbles: true }));
        });
    }

    // Wait for page to load before enabling the button click
    window.addEventListener('load', () => {
        btn.addEventListener('click', fillForm);
    });

})();
