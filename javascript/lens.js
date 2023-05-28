    //script for modal
    var modalBtns = [...document.querySelectorAll(".cs_button")];
    modalBtns.forEach(function(btn){
      btn.onclick = function() {
        var modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = "block";
      }
    });
    
    var closeBtns = [...document.querySelectorAll(".close")];
    closeBtns.forEach(function(btn){
      btn.onclick = function() {
        var modal = btn.closest('.modal');
        modal.style.display = "none";
      }
    });
    
    window.onclick = function(event) {
      if (event.target.className === "modal") {
        event.target.style.display = "none";
      }
    }
        
    //script for price range checkboxes
    
    function checkfunction1(){
        if ((document.getElementById("check")).checked) {
            alert("Price range $20-$30 selected");
        }
        else{
            alert("Price range not selected")
        }
    }
    
    function checkfunction2(){
        if ((document.getElementById("check1")).checked) {
            alert("Price range $30-$40 selected");
        }
        else{
            alert("Price range not selected")
        }
    }
    function checkfunction3(){
        if ((document.getElementById("check2")).checked) {
            alert("Price range $40-$50 selected");
        }
        else{
            alert("Price range not selected")
        }
    }
    
    function checkfunction4(){
        if ((document.getElementById("check3")).checked) {
            alert("Price range $50-$60 selected");
        }
        else{
            alert("Price range not selected")
        }
    }
    function checkfunction5(){
        if ((document.getElementById("check4")).checked) {
            alert("Price range $60-$70 selected");
        }
        else{
            alert("Price range not selected")
        }
    }
    