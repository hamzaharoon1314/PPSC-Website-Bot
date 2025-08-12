// ==UserScript==
// @name         PPSC Application CNIC
// @namespace    http://tampermonkey.net/
// @version      3.2
// @description  Show a button to trigger auto-fill once for PPSC application pages
// @author       Hamza Haroon
// @contact      botme@hamo.dev
// @repository   https://github.com/hamzaharoon1314/PPSC-Website-Bot
// @match        https://www.ppsc.gop.pk/*/UsersReg/PreliminaryInfo.aspx
// @match        https://www.ppsc.gop.pk/*/UsersReg/ContactInfo.aspx
// @match        https://www.ppsc.gop.pk/*/UsersReg/MorePreliminaryInfo.aspx
// @grant        none
// ==/UserScript==

/*
Author: Hamza Haroon
Description: This script adds a floating button to PPSC application pages to auto-fill CNIC, email, mobile, and other details.
Version: 3.2
*/

(function() {
    'use strict';

    // ================================
    // 🔧 USER DATA (Edit as needed)
    // ================================
    let cnicWithDash = ''; // 12345-1212121-0
    let emailAddress = ''; // me@example.com
    let mobileNumber = ''; // 03001234567
    let dateOfBirth = ''; // dd-mm-yyyy
    let genderValue = ''; // M or F
    let govtEmployee = 'False';
    let specialPerson = 'False';
    let armedForces = 'False';
    let graduationType = 'P'; // Pakistani

    // ================================
    // 🛠 Helper
    // ================================
    function setValue(el, value) {
        if (!el) return;
        el.value = value;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // ================================
    // 🖱 Auto-fill Logic
    // ================================
    function autoFill() {
        let cnicWithoutDash = cnicWithDash.replace(/-/g, '');
        let dashField = document.getElementById('ctl00_ContentPlaceHolder1_txtCNICWithDash');
        if (dashField) setValue(dashField, cnicWithDash);
        let noDashField = document.getElementById('ctl00_ContentPlaceHolder1_txtCNIC');
        if (noDashField) setValue(noDashField, cnicWithoutDash);

        let proceedBtn = document.getElementById('ctl00_ContentPlaceHolder1_btnSubmit');
        if (proceedBtn) proceedBtn.disabled = false;

        let emailField = document.getElementById('ctl00_ContentPlaceHolder1_txtEmail');
        if (emailField) setValue(emailField, emailAddress);

        let mobileField = document.getElementById('ctl00_ContentPlaceHolder1_txtMobile');
        if (mobileField) {
            setValue(mobileField, mobileNumber);
        } else {
            let netCodeRem = document.getElementById('ctl00_ContentPlaceHolder1_txtNetworkCodeRemaining');
            let mobNum = document.getElementById('ctl00_ContentPlaceHolder1_txtMobNumber');
            if (netCodeRem && mobNum && mobileNumber.length === 11) {
                setValue(netCodeRem, mobileNumber.substring(2, 4));
                setValue(mobNum, mobileNumber.substring(4));
            }
        }

        let genderSelect = document.getElementById('ctl00_ContentPlaceHolder1_drpGender');
        if (genderSelect) setValue(genderSelect, genderValue);

        let dobField = document.getElementById('ctl00_ContentPlaceHolder1_txtdateofbirth');
        if (dobField) setValue(dobField, dateOfBirth);

        let govtEmpSelect = document.getElementById('ctl00_ContentPlaceHolder1_drpGovtEmp');
        if (govtEmpSelect) setValue(govtEmpSelect, govtEmployee);

        let specialSelect = document.getElementById('ctl00_ContentPlaceHolder1_drpDisable');
        if (specialSelect) setValue(specialSelect, specialPerson);

        let armedSelect = document.getElementById('ctl00_ContentPlaceHolder1_drpArmedServant');
        if (armedSelect) setValue(armedSelect, armedForces);

        let gradSelect = document.getElementById('ctl00_ContentPlaceHolder1_drp_GraduationType');
        if (gradSelect) setValue(gradSelect, graduationType);
    }


    function createButtonOnce() {
        if (document.getElementById('ppsc-autofill-btn')) return; // button already created

        if (document.body) {
            let btn = document.createElement('button');
            btn.id = 'ppsc-autofill-btn';
            btn.innerText = 'CNIC/Email Auto Fill';
            btn.style.position = 'fixed';
            btn.style.top = '20px';
            btn.style.left = '20px';
            btn.style.padding = '10px 15px';
            btn.style.backgroundColor = '#4CAF50';
            btn.style.color = '#fff';
            btn.style.border = 'none';
            btn.style.borderRadius = '6px';
            btn.style.cursor = 'pointer';
            btn.style.fontSize = '14px';
            btn.style.zIndex = '9999';
            btn.addEventListener('click', autoFill);
            document.body.appendChild(btn);

            clearInterval(checkReadyInterval);
        }
    }
    let checkReadyInterval = setInterval(createButtonOnce, 500);
})();
