var text=prompt("enter the text");
var vowels=["a","e","i","o","u"];

for(i=0;i<text.length;i++){
    vowels.forEach(function(e){
        if(text.toLocaleLowerCase().charAt(i)==e){
            document.write(text.charAt(i));
            document.write("<br>");
        }
    })
}