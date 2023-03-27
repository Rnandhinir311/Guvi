$(document).ready(function(){
//alert("hi");
	$("#clear").click(function(){
		//alert("hi");
		$("#username").val('');
		$("#password").val('');
	});
	$("#login").click(function(){
		//alert("hi");
		if($("#username").val()==""){
			$("#username").css("border","1px solid red");
			$("#username").focus();
			return false;
		}else{
			$("#username").css("border","1px solid green");
		}
		if($("#password").val()==""){
			$("#password").css("border","1px solid red");
			$("#password").focus();
			return false;
		}else{
			$("#password").css("border","1px solid green");
		}
		 // var username=$("#username").val();
		 // var password=$("#password").val();
		 // alert(username);
		 $.ajax({
		 	type:"POST",
		 	url:"php/login.php",
		 	dataType:"JSON",
		 	//data:{"username":username,"password":password},
		 	data:$("#login").serialize(),
		 	success:function(res){
		 		if(res.status=="Login"){
		 			window.location="profile.html";
		 		}else{
		 			alert(res.mgs);
		 		}
		 	}
		 })
	})
})
