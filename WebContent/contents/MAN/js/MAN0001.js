var page={
		init : function(args){
			
			page.initInterface(args.data);
			page.initLayout(args.data);
			
			// args -> 이전페이지에서 oMessage로 보낸 object
			//alert(JSON.stringify(args.data));
			
			/*console.log(args.data.name+' '+args.data.class);
			
			
			$("#back_btn").click(function(){
					
				LEMP.Window.close();
				
				});
			
		*/
			
		},
		
		initInterface : function(data){
			
			var className = data.class+data.name;
			console.log(className);
			
			
			$("#back_btn").click(function(){
				
				LEMP.Window.close({
					
					  "_oMessage" : {
						  "newName" : className
						  
					  },
					  
					  "_sCallback" : "page.callback"
				});
				
				});
			
			
		},
		
		initLayout : function(data){
			/*data.name
			data.class
			data.company*/
			
			$("#lb_name").text(data.name);
			$("#lb_class").text(data.class);
			$("#lb_company").text(data.company);
		}
		
}