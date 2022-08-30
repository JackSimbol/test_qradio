/* 单选题交互js
 * tid: 题干id
 * oid：选项id(sid)的序列
 * sid: 单个选项id(响应选择的radio)
 */
function check_radio(tid, sid){ //选择单选题某一选项时触发
    document.getElementById(sid).getAttribute("checked") = true;
    var oid = get_id(document.getElementById(tid).getAttribute("idlist"));
    for(var id of oid){
        iid = document.getElementById(id).getAttribute("in_id");
        if(iid !== sid){
            document.getElementById(iid).getAttribute("checked") = true;

/*
 * 选择题文本示例：
 * "id=abc,type=radio,body=[Who is the most beautiful woman?],options=[A.Queen][B.Snowwhite],checked=abc_a"
 * 选项id表示为 选择题id+"_"+选项序号(A,B,C,...)
 */

// tid、body、type已预先在总函数中执行
function unparse_radio(tid){ //将单选题结果处理成文本
    var oid = get_id(document.getElementById(tid).getAttribute("idlist"));
    var checked = "";
    var opt_body = "options=";
    for(var id of oid){ //oid内包含：input与text(选项内容)
        var in_id = document.getElementById(id).getAttribute("in_id");
        var ob_id = document.getElementById(id).getAttribute("ob_id");
        opt_body += "["+document.getElementById(ob_id).innerHTML + "]";
        if(document.getElementById(in_id).getAttribute("checked")==true){
            checked = id;
        }
    }
    return opt_body+","+checked;
}

document.getElementById("a_in").onclick = function(){
            check_radio("a_in", "test_radio");
}
document.getElementById("b_in").onclick = function(){
            check_radio("b_in", "test_radio");
}
document.getElementById("c_in").onclick = function(){
            check_radio("c_in", "test_radio");
}
document.getElementById("unparse").onclick = function(){
            console.log(unparse_radio("test_radio"));
}
