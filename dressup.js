function saveindex(){
    //alert("Leaving Page")
    var o = { pant: pants_picker.i,
             shirt: shirts_picker.i,
             bed: beds_picker.i,
             wardrobe: wardrobes_picker.i,
             desk: desks_picker.i,
             light: lights_picker.i,
             decoration: decorations_picker.i
    }

    localStorage.ind=JSON.stringify(o);
}

function ImageSwitcher(elem, choices) {
    this.i = 0;
    this.elem = elem;
    this.choices = choices;

    this.Next = function(elem, arr) {
        this.i ++;
        if(this.i == (choices.length)) this.i = 0;
        this.elem.src = this.choices[this.i];
        //saveindex();
    }
    this.set = function (ind) {
        this.i = ind;
        this.elem.src = this.choices[ind];
    }
}

var pants = [
    "https://s-media-cache-ak0.pinimg.com/originals/b3/c2/4d/b3c24d75d647564cdaa1d85f854587ba.png",
    "https://s-media-cache-ak0.pinimg.com/originals/a5/3a/56/a53a562de60d53e341289584e585f776.png",
    "https://s-media-cache-ak0.pinimg.com/originals/c3/78/78/c3787895d353d3b4d8534855ae0b1d83.png"
]
var shirts = [
    "https://s-media-cache-ak0.pinimg.com/originals/25/43/a9/2543a9ef622c17ca0ccd1fae4441a8ac.png",
    "https://s-media-cache-ak0.pinimg.com/originals/05/b5/56/05b556aee24a79e17050270c7274de8c.png",
    "https://s-media-cache-ak0.pinimg.com/originals/d7/5c/ba/d75cbab4c752bcd839098e7304fa449b.png",
    "https://s-media-cache-ak0.pinimg.com/originals/84/07/2f/84072f86cc9c7700367b958b1252527b.png",
    "https://s-media-cache-ak0.pinimg.com/originals/d3/72/cf/d372cf67ffa1073da171f6824ed30140.png",
    "https://s-media-cache-ak0.pinimg.com/originals/20/72/f6/2072f64b75fb5753a6b038312697fa0d.png",
    "https://s-media-cache-ak0.pinimg.com/originals/1f/86/b1/1f86b13b426f5ab1483326c97eaa962c.png"
]

var beds = [
    "letto.png", 
    "letto2.png",
    "letto4.png"
]

var wardrobes = [
    "armadio1.png"
]

var desks = [
    "scrivania1.png",
    "specchio.png",
    "specchiera2.png",
    "specchiera3.png"
]

var lights = [
    "luci.png",
    "luci2.png",
    "stars.png"
]

var decorations = [
    "mirror1.png",
    "mirror2.png",
    "finestra.png",
    "orologio1.png",
    "orologio3.png"
]

var pants_picker;
var shirts_picker;
var beds_picker;
var wardrobes_picker;
var desks_picker;
var lights_picker;
var decorations_picker;

$(document).ready(function(){
        
     pants_picker = new ImageSwitcher(pants_img,pants);
     pant_button.onclick = function() {pants_picker.Next(); };
     shirts_picker=new ImageSwitcher(shirts_img, shirts);
     shirt_button.onclick = function() {shirts_picker.Next(); };
     beds_picker = new ImageSwitcher(beds_img, beds);
     bed_button.onclick = function() {beds_picker.Next();};
     wardrobes_picker = new ImageSwitcher(wardrobes_img, wardrobes);
     wardrobe_button.onclick = function() {wardrobes_picker.Next();};
     desks_picker = new ImageSwitcher(desks_img,desks);
     desk_button.onclick = function() {desks_picker.Next(); };
     lights_picker = new ImageSwitcher(lights_img,lights);
     light_button.onclick = function() {lights_picker.Next(); };
     decorations_picker = new ImageSwitcher(decorations_img,decorations);
     decoration_button.onclick = function() {decorations_picker.Next(); };

    
    if (localStorage.ind) {
        //alert("LS")
        var o = JSON.parse(localStorage.ind);
        pants_picker.set(o.pant);
        shirts_picker.set(o.shirt);
        beds_picker.set(o.bed);
        wardrobes_picker.set(o.wardrobe);
        desks_picker.set(o.desk);
        lights_picker.set(o.light);
        decorations_picker.set(o.decoration);
    }
    
    window.addEventListener("beforeunload", saveindex, false);
});

    
