// ==UserScript==
// @name         PPSC Education Data
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  Auto-fill PPSC Add Education Details form
// @match        https://www.ppsc.gop.pk/*/UsersReg/PEducationSetWise.aspx
// @grant        none
// @author       Hamza Haroon
// @contact      botme@hamo.dev
// @repository   https://github.com/hamzaharoon1314/PPSC-Website-Bot
// ==/UserScript==

(function () {
    'use strict';

    function setValue(selector, val) {
        const el = document.querySelector(selector);
        if (!el) return;
        el.value = val;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
    }

    function fillForm(data) {
        setValue("[name*='drpInstitute']", data.boardValue);
        setValue("[name*='txtotherInsti']", data.otherUniversity || "");
        setValue("[name*='txtMajorSubject1']", data.major);
        setValue("[name*='txtPassingYear']", data.passingYear || "");
        setValue("[name*='txtRollNo']", data.rollNo || "");
        setValue("[name*='txtResultDeclaredDate']", data.resultDate || "");
        setValue("[name*='drpExamSystem']", data.examSystemValue);
        setValue("[name*='txtObtainedCGPA']", data.marksObtained);
        setValue("[name*='txtTotalMarksorGPA']", data.totalMarks);
        setValue("[name*='txtPercentage']", data.percentage || "");
        setValue("[name*='drpDivision']", data.divisionValue);
        setValue("[name*='drpGrade']", data.grade || "");
    }

    // Create button
    let btn = document.createElement("button");
    btn.textContent = "Auto Fill Education";
    Object.assign(btn.style, {
        position: 'fixed',
        top: '100px',
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

    btn.addEventListener("click", function () {
        let certSelect = document.querySelector("[name*='drpDegree']");
        if (!certSelect) {
            alert("Certificate dropdown not found!");
            return;
        }

        let certValue = certSelect.options[certSelect.selectedIndex].text.trim();

        if (certValue === "Matriculation") {
            fillForm({
                boardValue: "1018", // id number example: 1018 check from page source code.
                degree: "Matriculation",
                major: "Science", // Science, Arts or something
                resultDate: "", //dd-mm-yyyy
                rollNo: "", // 123456
                marksObtained: "", // 123
                totalMarks: "", //1000
                grade: "", // A,B,C,D
                divisionValue: "1st",
                examSystemValue: "A" // Annual
            });
        }
        else if (certValue === "Intermediate") {
            fillForm({
                boardValue: "1018", // id number example: 1018 check from page source code.
                degree: "Intermediate",
                major: "ICS", // Science, Arts or something
                resultDate: "", //dd-mm-yyyy
                rollNo: "", // 123456
                marksObtained: "", // 123
                totalMarks: "", //1000
                grade: "A", // A,B,C,D
                divisionValue: "1st",
                examSystemValue: "A" // Annual
            });
        }
        else if (certValue === "B.S. (Hons)") {
            fillForm({
                boardValue: "208", // id number example: 208 check from page source code.
                major: "Science", // Science, Arts or something
                resultDate: "", //dd-mm-yyyy
                examSystemValue: "S", // Semester
                marksObtained: "", // x.xx
                totalMarks: "4.00", //4.0 or 5.0
                percentage: "96.25", // xx.xx 82.12
                divisionValue: "A"
            });
        }
        else if (certValue === "Graduation") {
            fillForm({
                boardValue: "208", // id number example: 208 check from page source code.
                major: "Science", // Science, Arts or something
                resultDate: "", //dd-mm-yyyy
                examSystemValue: "S", // Semester
                marksObtained: "", // x.xx
                totalMarks: "4.00", //4.0 or 5.0
                percentage: "96.25", // xx.xx 82.12
                divisionValue: "A"
            });
        }
        else {
            alert("No autofill data for: " + certValue);
        }
    });
})();
