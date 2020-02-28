function setCache(data) {
  var cache = CacheService.getDocumentCache();
  cache.put('data', JSON.stringify(data));
}

function getCache(){
  var cache = CacheService.getDocumentCache();
  return JSON.parse(cache.get('data'));
}

function remember(){
  setCache(getCache());
}

function test(){
  var ranking = [];
  ranking.push({rank:1,score:80.7,user:"taro"});
  ranking.push({rank:2,score:80.2,user:"jaro"});
  setCache(ranking);
  Logger.log(getCache());
}