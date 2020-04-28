<!-- 코드의 양이 많아서 result값 받아서 실행하는 proc(result) 함수 생성 -->
function proc(result){
  $.each(result, function (index, item) {

    <!-- tbody에 출력 -->

    var str = '<tr><td>'+item.name+'</td>';
      str += '<td>' + item.itemid + '</td>';
      str += '<td>' + item.bind + '</td>';
      str += '<td>' + item.level + '</td>';
      str += '<td>' + item.job + '</td></tr>';
      $("#equipdb-table").append(str);
  });
};
<!-- json 파일 불러오기-->
$(document).ready(function() {
    $.ajax({
      url: './json/equipdb.json',
      success : function (result) {
        proc(result);
      }
    });
<!-- 검색 기능-->
<!-- 첫페이지 로딩을 최소화 하기 위하여 keyup이 아닌 keypress로 설정 -->
    $("#equipdb-table > tbody").hide();  <!-- 첫페이지 DB 로딩 시간 절약을 위하여 숨김 처리 -->
    $("#keyword").keypress(function() {
      $("#equipdb-table > tbody").show(); <!-- 검색창 입력 시 DB 노출 -->
        var k = $(this).val();
        $("#equipdb-table > tbody > tr").hide();
        var temp = $("#equipdb-table > tbody > tr > td:nth-child(5n+1):contains('" + k + "')");

        $(temp).parent().show();
    });
});
