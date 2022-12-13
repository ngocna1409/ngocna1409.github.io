var hospital_codename;
var is_the_link_displayed;

function siteInit()
{
	hospital_codename = "";
	is_the_link_displayed = false;
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

// This won't prevent user entering the same string again (It will toggles visibility).
function isLinkDisplayedCheck()
{
	if (is_the_link_displayed === true)
	{	
		if (confirm("Liên kết đã hiển thị ở bên dưới.\nBạn muốn chọn mã khác?"))
		{
			badSecurityCheck();
		}
		else
		{
			return;
		}
	}
	else
	{
		badSecurityCheck();
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
		is_the_link_displayed = true;
	}
	else
	{
		alert("Sai mã bệnh viện hoặc bạn đã từ chối nhập.");
		is_the_link_displayed = false;
	}
}
