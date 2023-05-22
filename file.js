  <script type="text/javascript">
     	function cal(){
     		var opr1 = document.getElementByid('first').value
     	    var	opr2 = document.getElementByid('second').value
     	    var ope  = document.getElementByid('ope').value 
     	    if (ope == '+') {
     	    	var res = parseint(opr1)+parseint(opr2)
     	    }
     	    alert(res);
     	}
     	
     </script>