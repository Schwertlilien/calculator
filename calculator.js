//获取运算符元素
var addBtn = document.getElementById("add");
var subBtn = document.getElementById("sub");
var mulBtn = document.getElementById("mul");
var divBtn = document.getElementById("div");

//获取显示结果的段落元素
var show = document.getElementById("re");

//定义一个全局变量用于存放计算结果
var result;

//显示计算过程
function get(num) {
	var shownums = document.getElementById("display");
	shownums.value += num;
}

//清空
var cc = document.getElementById("clear");
function clear() {
	document.getElementById("display").value="";
}
cc.addEventListener("click",clear,false);

//回删
var dd = document.getElementById("delete");
function backspace(){
	var shownums = document.getElementById("display");
	shownums.value = shownums.value.substring(0,shownums.value.length-1);
}
dd.addEventListener("click",backspace,false);

//计算
var re = document.getElementById("cal");
function calculates() {
	var result = 0;
	result = document.getElementById("display").value;
	document.getElementById("display").value = eval(result);
}
re.addEventListener("click",calculates,false);

//加减乘除的运算函数
function addtion(x,y) {
	return x+y;
}
function substraction(x,y){
	return x-y;
}
function multiplication(x,y) {
	return x*y;
}
function division(x,y) {
	if(y==0){
		alert("0不能当除数");
		return null;
	}else{
		return x/y;
	}
}

function getInputNums() {
	//获取输入框中数字的值
	var a = document.getElementById("num1").value;
	var b = document.getElementById("num2").value;
	a_float = parseFloat(a);
	b_float = parseFloat(b);
}

function sendResult(r) {
	show.innerHTML = r;
}

addBtn.onclick = function() {
	getInputNums();
	result = addtion(a_float, b_float);
	sendResult = (result);
}

subBtn.onclick = function() {
	getInputNums();
	result = substraction(a_float, b_float);
	sendResult = (result);
}

mulBtn.onclick = function() {
	getInputNums();
	result = multiplication(a_float, b_float);
	sendResult = (result);
}

divBtn.onclick = function() {
	getInputNums();
	result = division(a_float, b_float);
	sendResult = (result);
}