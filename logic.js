function ajax_request() {
    var word = document.getElementById("search_box").value.toLowerCase()
     var request = new XMLHttpRequest();
     let url = "/request.php?q="+word
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("response").innerHTML = this.responseText;
            }
        };
        request.open("GET",url,true);
        request.send();
}