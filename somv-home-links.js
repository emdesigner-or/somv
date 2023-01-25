<script
  src="https://code.jquery.com/jquery-3.6.1.min.js"
  integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
  crossorigin="anonymous"></script>
<script>
window.onload = function () { 
  var b = document.getElementById("dynamic-profiles").querySelectorAll("a.small-img-wr"); 
  b.forEach((value, i) => 
  {
  	value.setAttribute("href", "");
	});
}
