 function ajax_request() {
     var request = new XMLHttpRequest();
     let url = "/request.php?q="+"definition"
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.response);
            }
        };
       request.open("GET",url,true);
        request.send();
}