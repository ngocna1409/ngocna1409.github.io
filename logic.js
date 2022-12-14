var codename_validation;
var is_the_link_displayed;

function siteInit()
{
	codename_validation = "";
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
	var codename_validation = prompt("Nhập mã bệnh viện của bạn:");
	
	// Compares a literal string with all arrays defined.
	const is_it_really_valid = valid_hospitals.some(element => {
	if (codename_validation.toLowerCase().includes(element.toLowerCase())){ return true; } return false; });
	
	// REALLY?
	if (is_it_really_valid === true  | codename_validation !== "") {
		toggleElements(document.getElementById(codename_validation));
		is_the_link_displayed = true;
	}
	else if (is_it_really_valid === true | codename_validation === "")
	{
		alert("Chưa nhập thông tin.");
		is_the_link_displayed = false;
	}
	else
	{
		alert("Sai mã bệnh viện.");
		is_the_link_displayed = false;
	}
}
