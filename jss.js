   window.onload=function ()
    {
            document.getElementById("can").ondragleave=(e)=>
            {
             kill_e(e)
            };
            document.getElementById("can").ondragover=(e)=>
            {
             kill_e(e)
            };

    };

    function kill_e(e) {
        e.stopPropagation();
        e.preventDefault();
                 e.target.classList = e.type.search("dragover") > -1 ? "dd" : "";
    }
