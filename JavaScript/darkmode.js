
  function darkmode(){
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark")
    var theme;
    if(SetTheme.classList.contains("dark")){
        theme = "DARK";
    }else{
        theme = "LIGHT";
    }
    // save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    // ensure you convert to JSON like i have done -----JSON.stringify(theme)
}
setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    if(GetTheme === "DARK"){
        document.body.classList = "dark";
    }else{
        document.body.classList = "";
    }
}, 5);

