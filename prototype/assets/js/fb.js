function statusChangeCallback(response){
	console.log('statusChangeCallback');
	console.log(response);
	if(response.status==='connected'){testAPI();}}
function checkLoginState(){
	FB.getLoginStatus(function(response){statusChangeCallback(response);});}
window.fbAsyncInit=function(){FB.init({appId:'812071988882674',cookie:true,xfbml:true,version:'v2.2'});
	FB.getLoginStatus(function(response){statusChangeCallback(response);});
	FB.Event.subscribe('auth.logout',logout_event);
	function logout_event(){window.location.href="index.php";}};
(function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0];
	if(d.getElementById(id))return;
	js=d.createElement(s);
	js.id=id;
	js.src="//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js,fjs);
	}
	(document,'script','facebook-jssdk'));
function testAPI(){
	console.log('Welcome!  Fetching your information.... ');
	FB.api('/me',function(response){
		document.getElementById("nimi").innerHTML=response.name;
		});}