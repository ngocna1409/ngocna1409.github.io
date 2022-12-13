// Is this really necessary?
var hospital_codename = "";

function siteInit()
{
	// Something interesting goes here. Maybe a password prompt?
}

function toggleElements(element)
{
	if (element.style.display === "none")
	{
		element.style.display = "block";
	}
	else
	{
		element.style.display = "none";
	}
}

function badSecurityCheck()
{
	// If you want to find the code. This is it.
	const valid_hospitals = ['bvqv','bvqt'];
	var hospital_codename = prompt("Nhập mã bệnh viện của bạn để hiển thị:");
	
	// Compares a literal string with all arrays defined.
	const is_it_really_valid = valid_hospitals.some(element => {
	if (hospital_codename.toLowerCase().includes(element.toLowerCase())){ return true; } return false; });
	
	// REALLY?
	if (is_it_really_valid === true) {
		toggleElements(document.getElementById(hospital_codename));
	}
	else
	{
		alert("Sai mã bệnh viện hoặc bạn đã từ chối nhập.");
	}
}

