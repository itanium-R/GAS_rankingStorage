// ページにアクセスされたときに実行
function doGet(e) {  
  
  try{
    
    var mode    = e.parameter["mode"];
    var score   = e.parameter["score"];
    var user    = e.parameter["user"];
    
    if(mode == "get"){
      return ContentService.createTextOutput()
      .setMimeType(ContentService.MimeType.JSON)
      .setContent(JSON.stringify(getRanking()));
    }
    if(mode == "set"){
      return ContentService.createTextOutput()
      .setMimeType(ContentService.MimeType.JSON)
      .setContent(JSON.stringify(setRanking(score, user)));
    }
    if(mode == "reset"){
      return ContentService.createTextOutput()
      .setMimeType(ContentService.MimeType.JSON)
      .setContent(JSON.stringify(resetRanking()));
    }
    
  }catch(e){
    var errJson = {ok:false, error:e} 
    return ContentService.createTextOutput()
    .setMimeType(ContentService.MimeType.JSON)
    .setContent(JSON.stringify(errJson));   
  }
}

function getRanking(){
  var ranking = getCache() || [];
  var result  = {ok: true,
                 ranking: ranking,
                 len: ranking.length}
  return result;
}

function setRanking(score, user){
  var ranking = getCache() || [];
  
  var newRcd = {rank: 0, score: score, user:user};
  ranking.push(newRcd);
  
  var scoreCmp = (a, b) => {
    return b.score - a.score;
  }
  ranking.sort(scoreCmp);
  
  var len=ranking.length;
  for(var i=0; i<len; i++){
    ranking[i].rank = i+1;
  }
  
  setCache(ranking);
  return getRanking();
}

function resetRanking(){
  setCache([]);
  return getRanking();
}
 

function test11(){
  Logger.log(JSON.stringify(setRanking(84.6,"nittsu")));
}