function saveSignatureAsImage(req, resp){

     if(req.parts.length == 2){
     
        debugger;
         var imageToSave = req.parts[0].asPicture;
         
         var mySignature = new ds.Signature();
         mySignature.creationDate = new Date();
         mySignature.name = req.parts[1].asText;
         mySignature.signature_image = imageToSave;
         mySignature.save();
     
     }


}
