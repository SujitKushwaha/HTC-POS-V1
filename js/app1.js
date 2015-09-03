var ionicApp = angular.module("starter",[]);

ionicApp.controller('MainController', ['$scope', function($scope) {
 
	$scope.btnstring="";
	$scope.userIdFlag=false;
	var btnstring="";
	var i=0;
	var arr=[];
	$scope.btnpress= function(btnid) 
    {	
		btnstring=$scope.btnstring;//Required if mixing both type of inputs at same time in same box
		btnstring+=btnid;
	   	$scope.btnstring=btnstring;
    }
	
	$scope.doubleZero=function()
	{
		if(btnstring.length>0)
		{
			btnstring=$scope.btnstring;
			btnstring+="00";
			$scope.btnstring=btnstring;
		}
	}
	$scope.cncpress= function() 
    {
		btnstring=btnstring.substring(0,btnstring.length-1);
		$scope.btnstring=btnstring;
    }
	
	$scope.cancelpress= function() 
    {
		
		btnstring="";
		$scope.btnstring=btnstring;
    } 
	
	$scope.enterbtnpress=function()
	{	
		$scope.userIdFlag=true;
		arr[i++]=btnstring;
		if(i==2)
		{
			if(arr[0]==arr[1])
			{
				window.location="transactionScreen.html";
			}
			else
			alert("UserId or Password is wrong");
			arr.length=0;
			i=0;
			$scope.userIdFlag=false;
		}
		$scope.btnstring="";
	}
	
	$scope.okpress= function() 
    {
		if($scope.btnstring==="")
		{
		alert("Blank Fields Not Allowed");
		$scope.cancelpress();
		return;
		}
		// If planning to use input box type as text
		if(/^[a-zA-Z]+$/.test($scope.btnstring))
		{
			alert("Alphabets not allowed. Only Numbers");
			$scope.cancelpress();
		}
        $scope.btnstring=btnstring;
	}
	
}]);