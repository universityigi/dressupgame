$(document).ready(function(){

    function ImageSwitcher(choices, i) {
        i = 0;
        
        this.Next = function() {
            hide_current_image();
            show_next_image();
        }
        
        var hide_current_image = function() {
            if(choices){
                choices[i].style.visibility = "hidden";
                i += 1;
            }
        }
        var show_next_image = function() {
            if(choices){
                if(i == (choices.length)) {
                    i = 0;
                }
                choices[i].style.visibility = "visible";
            }
        }
    }
      
        var pants = $(".pant");
        var shirts = $(".shirt");
        var beds = $(".bed");
        var wardrobes = $(".wardrobe");
        var desks = $(".desk");
        var backgrounds = $(".bg");
    
        var shirt_picker = new ImageSwitcher(shirts);
        document.getElementById("shirt_button").onclick = function() { shirt_picker.Next(); };
        
        var pants_picker = new ImageSwitcher(pants);
        document.getElementById("pant_button").onclick = function() {pants_picker.Next(); };

        var beds_picker = new ImageSwitcher(beds);
        document.getElementById("bed_button").onclick = function() {beds_picker.Next(); };

        var wardrobes_picker = new ImageSwitcher(wardrobes);
        document.getElementById("wardrobe_button").onclick = function() {wardrobes_picker.Next(); };

        var desks_picker = new ImageSwitcher(desks);
        document.getElementById("desk_button").onclick = function() {desks_picker.Next(); };
        
        var bg_picker = new ImageSwitcher(backgrounds);
        document.getElementById("bg_button").onclick = function() {bg_picker.Next(); };
    
    });
    
      $("#shirt_button").click(function(){
      $("#shirt-menu").css("visibility", "visible"); });