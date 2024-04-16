const search = ()  => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const college = document.getElementById("college")
    const feature = document.querySelectorAll(".feature")
    const fname  = college.getElementsByTagName("h2")

    for (var i=0; i < fname.length; i++) {
        let match = feature[i].getElementsByTagName("h2")[0];

        if(match){
           let textvalue = match.textContent || match.innerHTML
           
           if (textvalue.toUpperCase().indexOf(searchbox) > -1){
            feature[i].style.display = "";

            
           }
           else{
            feature[i].style.display = "none";
           }
        }
    }  

}


  