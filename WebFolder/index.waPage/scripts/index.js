
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var button2 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
						if (waf.widgets.signaturePad1.isEmpty()) alert("You should first add signature before saving it !!");
				else {
				    // prepare the image file
				    var imageURL = waf.widgets.signaturePad1.toDataURL();
				    var imageFile = dataURItoBlob(imageURL);
				    var signatureName = waf.widgets.textField1.getValue();

				    // prepare the formData
				    var formData = new FormData();
				    formData.append("imageFile", imageFile);
				    formData.append("name",signatureName);
				    ;

				    // Send XHR appended with formData
				    var xhr = new XMLHttpRequest();
				    xhr.open("POST", "/saveImage", true);

				    xhr.onreadystatechange = function(e) {
				        if (this.readyState == 4 && this.status == 200) {
				            debugger;
				            sources.signature.query("name =:1 ", signatureName,{onSuccess : function(date){
				                        sources.signature.setCurrentEntity(data.dataSource);
				            }});
				            
				        }

				    };

				    xhr.send(formData);
				}				
        
         
	};// @lock
	
	// a function that convert a dataURI to JPEG image file
	function dataURItoBlob(dataURI) {
			    var binary = atob(dataURI.split(',')[1]);
			    var array = [];
					    for (var i = 0; i < binary.length; i++) {
					        array.push(binary.charCodeAt(i));
					    }
			         return new Blob([new Uint8Array(array)], {
			      type: 'image/jpeg'
			    });
           }

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		waf.widgets.signaturePad1.clear();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
// @endregion
};// @endlock
