
	var v1;
	var v2;
	var r;
	v1 = v1.value;
	v2 = v2.value;
	r = r.value;

	function div(){
		alert("lo");
		try{
			r = parseInt(v1.value) / parseInt(v2.value);
			if(v2==0){
				throw = "Arithmetic Expection:Division by zero";
			}
		}
		catch(err){
			r.value = "Division by zero impossible";
			alert(err.stack);
		}
	}
	function times(){
		r = parseInt(v1) * parseInt(v2);
	}
