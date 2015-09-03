	app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	var ivst=1;
	var ivbutton;
	var init=0;
	var myCart = [];
	var enFlag=0;
	$scope.newObject={};
	$scope.items=[{name:"Apple",rate:30}, {name:"Orange",rate:40}, {name:"Watermelon",rate:50},{name:"Mango",rate:50},{name:"Banana",rate:50},{name:"Litchi",rate:50}];
	
	if(init==0)
	{
		ivbutton="Suspend";
		init=1;
	}
	$scope.addToCart = function(frootid) {
		
		alert(frootid+" typed and submitted");
		$scope.myForm.formid = "";
		
		
	}

	$scope.ivclick=function()
	{
		
		if(ivst==1)
		{
			$scope.ivbutton="Resume";
			ivst=0;
		}
		else if(ivst==0)
		{
			$scope.ivbutton="Suspend";
			ivst=1;
		}

		
	};
	
	$scope.getSelData=function()
	{	
		
		var pos1=0;
		for(item in $scope.newObject)
		{
			var itName=JSON.stringify(item);
			alert(itName);
			for(var z=0;z<($scope.items).length;z++)
			{
				if(itName==z.name)
				{
					pos1=z;
					break;
					alert("Position in array is "+pos1);
				}
			}
				
			//Create a new object and push it into cart
			var myItem=new Object();
			myItem.name=itName;
			myItem.rate=$scope.items[pos1].rate;
			myItem.qty=1;
			enFlag=0;
			if(myCart.length!=0)
			{	//Check whether the item exists and increment its quantity
				for(var i=0;i<myCart.length;i++)
				{
					if(myCart[i].name==itName)
					{
						alert("Already present");
						myCart[i].qty++;//Item present in cart,so increase its quantity
						enFlag=1;
						break;
					}
				}
				if(enFlag==0)//Item not present in the cart
				{
					alert("First Item of its kind");
					myCart.push(myItem);
				
				}
				enFlag=0;
				
			}
			else
			{
			//Empty cart. So first item to be pushed.
			alert("First Item in the cart");
			myCart.push(myItem);
			
			
			}
		}
		var str="";
		for(var j=0;j<myCart.length;j++)
		{
			str+=myCart[j].name+myCart[j].qty;
		
		}
		confirm(str);
		$scope.newObject={};
		$scope.myCart=myCart;
	};
	
	$scope.taxCalculation=function()
	{
	    var serviceTax;
		var vatTax;
		var query = "SELECT TaxValue FROM TaxMaster where TaxID=1";
            $cordovaSQLite.execute(db, query, []).then(function(res) {
			//confirm("In db function");
            if(res.rows.length > 0) {
                for(var i = 0; i < res.rows.length; i++) {
					//confirm("User id from db"+res.rows.item(i).UserID);
					//confirm("Password from db"+res.rows.item(i).Password);
                    if((res.rows.item(i).UserID==userid)&& (res.rows.item(i).Password==paswd))
					{
						alert("LOGIN SUCCESSFUL");
						window.location="1.html";
						
						pflag=1;
						break;
					}
                }
				
            }
			if(pflag==0)
			{ 
				alert("UserID or Password is wrong");
			}
        }, function (err) {
            confirm(err);
        });
	}

	$scope.ivbutton=ivbutton;
	}]);