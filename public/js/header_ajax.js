$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(result){
                $(result).replaceAll("#header_ajax");
                $(`<link rel="stylesheet" href="css/head.css">`).appendTo("head");
                $(`<script src="js/jquery-1.11.3.js"></script>
                <script src="js/header.js"></script>
                <script src="js/top_fixed.js"></script>
                <script src="js/header_jquery.js"></script>
                `).replaceAll("#script_js")
        }
    })
})