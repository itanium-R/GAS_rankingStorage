function doPost(e) {
  try{
    // TODO: POST時の処理をかく
  }catch(e){
    let output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(JSON.stringify({error:JSON.stringify(e)}));
    
    return output; 
  }
}