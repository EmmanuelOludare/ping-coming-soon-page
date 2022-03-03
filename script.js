const email = document.getElementById("email");
const errorMessage = document.getElementById("error");
const submit = document.getElementById("button");
const container = document.getElementById("contain");
var pattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const animItem = bodymovin.loadAnimation({
									 wrapper: container,
									 animType: 'svg',
									 loop:false,
									 autoplay:false,	           path:"https://assets9.lottiefiles.com/packages/lf20_obhph3sh.json"});
errorMessage.style.display="none";
submit.addEventListener("click",() => {
				if(email.value.match(pattern)) {
	container.classList.remove("hide");
									animItem.goToAndPlay(0,true);
									email.style.border="solid hsl(223, 100%, 88%) 2px";
			errorMessage.style.display="none";	
				}else {
				email.placeholder="example@email/com";
email.style.border="solid red 2px";
errorMessage.style.display="inline";
				}
});
		animItem.addEventListener("complete",()=>{
								container.classList.add("hide");	
					});

