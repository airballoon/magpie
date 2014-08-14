//图片上传
var upload = new Uploader({
  trigger: '#uploader',
  name: 'swf',
  action: '/upload',
  accept: 'swf/*',
  data: {},
  multiple: true
}).change(function(files) {
  this.submit();
}).success(function(response) {
  uploadCallback(response);
}).error(function(file) {
  console.log(file);
});


function uploadCallback(res) {
  createSwfObject("pz-xia-huanjuan", res);
}

function createSwfObject(swfDivId, swfUrl){
  var swfVersionStr = "9.0.0";
  var xiSwfUrlStr = "";
  var attributes = {};
   var flashUrl = "http://www.sogou.com/web?query=sogou&_asf=www.sogou.com&_ast=1407995672&w=01019900&p=40040100&ie=utf8&sut=2579&sst0=1407995671853&lkt=6%2C1407995669276%2C1407995671447";

  var flashvars = { "jump_url" : encodeURIComponent(flashUrl) };
  var params = {};
  params.quality = "high";
  params.allowscriptaccess = "always";
  params.allowfullscreen = "true";
  params.wmode = "window";
  attributes.id = "pz-float-swf-obj";
  var width = 960;
  var height = 400;
  swfobject.embedSWF(swfUrl, swfDivId, width,height,swfVersionStr,xiSwfUrlStr,flashvars,params,attributes);
}

function hideFlash(){
  document.getElementById("pz-xia-amazon").innerHTML = "";
  document.getElementById("pz-xia-flash").style.display = "none";
}

function api_btn_close (argument) {
  console.log('close');
  hideFlash();
}

function api_play_over() {
  console.log('play over');
  hideFlash();
}

function api_event_click(url) {
  console.log('click');
}

