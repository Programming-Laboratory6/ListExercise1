var calcCont = {
    
    init: function () {
        calcCont.readForm();
    },
    
    readForm: function () {
        
        var form = document.querySelector('form');
        
        var shwRes = function (result) {
            calcCont.showResult(result);
        };
        
        form.addEventListener('submit', function (event) {
            calcServ.takeValues(form, shwRes);
            event.preventDefault();
        });
    },
    
    showResult: function (result) {
        alert(result)
        
    }
}

calcCont.init();