function validate() {
	let n1 = document.getElementById("fname").value;
	let n2 = document.getElementById("lname").value;
	let e = document.getElementById("mail").value;
	let s = document.getElementById("tour").value;
	let dmy = document.getElementById("date1").value;
	let num1 = document.getElementById("persons").value;
	let name1 = /^[a-z A-Z]{2,15}$/;
	let email = /^[A-Z a-z 0-9]+@[A-Z a-z]+\.[A-Z a-z]{2,4}$/;
	let pregx = /^[0-9]+$/;
	if (n1 == "") {
		alert("Name field is required");
		return false;
	} else if (n2 == "") {
		alert("Enter last name");
		return false;
	} else if (!name1.test(n1)) {
		alert("Name should be in alphabets");
		return false;
	} else if (e == "") {
		alert("Enter email address");
		return false;
	} else if (!email.test(e)) {
		alert("Enter valid email address");
		return false;
	} else if (s == "select") {
		alert("Select any package");
		return false;
	} else if (dmy == 0) {
		alert("Enter the date");
		return false;
	} else if (num1 == 0) {
		alert("Please enter number of persons");
		return false;
	} else if (!pregx.test(num1)) {
		alert("Enter number only");
		return false;
	} else if (
		document.getElementById("boarding").checked == false &&
		document.getElementById("fooding").checked == false &&
		document.getElementById("sight").checked == false
	) {
		alert("select the options what do you want avail");
		return false;
	} else if (
		document.getElementById("agree").checked == false &&
		document.getElementById("disagree").checked == false
	) {
		alert("You should agree with terms and conditions");
	} else {
		return true;
	}
}
