function output()	{
	var day = document.getElementById("day").value;
	var dd = parseInt(day);
	var month = document.getElementById("month").value;
	var mm = parseInt(month);
	var year = document.getElementById("year").value;
	var yy = parseInt(year);
	var cc = (yy-1) / 100+1;
	var result = parseInt(((cc / 4) - 2 * cc - 1) + (5*yy / 4)) + ((26 * )mm + 1) / 10 )) + dd) % 7;
	var boy = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
	var girl = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];
	if (document.getElementById("gender").checked)	{
		var gender = 'male';
	}
	else	{
		var gender = 'female';
	}
	if (mm < 1 || mm > 12 || mm == 2 && dd 29)
}
