function rot13(str) {
	let nice = [];
	for(let i=0; i<str.length; i++){
		if(str[i]>='A' && str[i]<='M'){
			nice.push(String.fromCharCode(str.charCodeAt(i)+13));
		}else if(str[i]>='N'&&str[i]<='Z'){
			nice.push(String.fromCharCode(str.charCodeAt(i)-13));
		}else{
			nice.push(str[i]);
		}
	}
    let ans = nice.join("");
    return ans;
}
let abc = document.getElementById("hello").innerText;
document.getElementById("hello") = rot13(abc);
