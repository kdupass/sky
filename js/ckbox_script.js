
function checkBox() {
var check_Box = document.getElementsByName("ckbox"); //체크박스 name
for (j = 0; j < check_Box.length; j++) {
 var disign = document.getElementById("q"+[j+1]); // 보여질내용
 if(check_Box[j].checked == true ){
  disign.style.display = "block";
 }else{
  check_Box[j].checked = false;
  disign.style.display = "none";
};
};
};

function checkjob() {
var check_job = document.getElementsByName("ckjob"); //체크박스 name
for (k = 0; k < check_job.length; k++) {
  var disign = document.getElementById("j"+[k+1]); // 보여질내용
  if(check_job[k].checked == true ){
    disign.style.display = "block";
  }else{
    check_job[k].checked = false;
    disign.style.display = "none";
};
};
};
