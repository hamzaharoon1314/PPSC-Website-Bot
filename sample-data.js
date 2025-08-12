// Personal Info Sample
let cnicWithDash = '12345-6789012-3';
let emailAddress = 'example.user@mail.com';
let mobileNumber = '03121234567';
let dateOfBirth = '01-01-1990';
let genderValue = 'F';  // 'M' or 'F'
let govtEmployee = 'False';  // 'True' or 'False'
let specialPerson = 'False';
let armedForces = 'False';
let graduationType = 'P';  // 'P' for Pakistani grad, 'F' for Foreign grad

// Additional Details Sample
const personalDetails = {
    name: "Poor Man",
    cnicIssueDate: "15-03-2020",
    cnicExpiryDate: "15-03-2030",
    postalAddress: "123 Street Name, Block B, Cityville",
    phoneNumber: "03121234567",
    fatherName: "Poor Man Father",
    domicileIssueDate: "10-10-2015",

    religion: "M",  // e.g., 'M' for Muslim, 'C' for Christian etc.
    fatherOccupation: "4",  // Occupation code
    domicile: "12",  // District/Province code
    maritalStatus: "M",  // 'S' = Single, 'M' = Married
    relativeInPPSC: "False",
    dismissed: "False",
    conCourt: "False",
    crimTrial: "False",
    chances: "0",
    centre: "L"  // Exam center code
};

// Education autofill sample
function fillEducation(certValue) {
    if (certValue === "Matriculation") {
        fillForm({
            boardValue: "1001",
            degree: "Matriculation",
            major: "Arts",
            resultDate: "20-05-2010",
            rollNo: "123456",
            marksObtained: "700",
            totalMarks: "850",
            grade: "B",
            divisionValue: "2nd",
            examSystemValue: "A"
        });
    }
    else if (certValue === "Intermediate") {
        fillForm({
            boardValue: "1001",
            degree: "Intermediate",
            major: "Pre-Engineering",
            resultDate: "15-07-2012",
            rollNo: "654321",
            marksObtained: "780",
            totalMarks: "1100",
            grade: "A",
            divisionValue: "1st",
            examSystemValue: "A"
        });
    }
    else if (certValue === "B.S. (Hons)") {
        fillForm({
            boardValue: "3001",
            major: "Information Technology",
            resultDate: "10-10-2016",
            examSystemValue: "S",
            marksObtained: "3.50",
            totalMarks: "4.00",
            percentage: "87.5",
            divisionValue: "B"
        });
    }
    else if (certValue === "Graduation") {
        fillForm({
            boardValue: "3001",
            major: "Information Technology",
            resultDate: "10-10-2016",
            examSystemValue: "S",
            marksObtained: "3.50",
            totalMarks: "4.00",
            percentage: "87.5",
            divisionValue: "B"
        });
    }
    else {
        alert("No autofill data for: " + certValue);
    }
}

// Service records sample
const records = [
    {
        name: "Junior Software Developer",
        post: "Software Developer",
        department: "Tech Solutions Ltd.",
        serviceType: "P", // Private
        serviceNature: "C", // Contract
        startDate: "01-06-2017",
        serving: "N", // No
        endDate: "31-12-2019",
        scale: "BPS-14",
        relevant: "Y" // Yes
    },
    {
        name: "IT Support Specialist",
        post: "IT Support",
        department: "Global Corp.",
        serviceType: "P",
        serviceNature: "F", // Full-time
        startDate: "01-01-2020",
        serving: "Y", // Yes, currently serving
        endDate: "",
        scale: "BPS-15",
        relevant: "Y"
    },
    {
        name: "Project Manager",
        post: "Project Manager",
        department: "Innovatech Pvt Ltd",
        serviceType: "P",
        serviceNature: "C",
        startDate: "01-03-2023",
        serving: "N",
        endDate: "30-06-2025",
        scale: "BPS-17",
        relevant: "Y"
    }
];
