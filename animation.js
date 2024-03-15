class rec {

    constructor (num, f, speed){

        this.id = "num" + num;
        this.x = (Math.random() -0.5)*2*16/9*speed;
        this.y = (Math.random() -0.5)*2*speed;
        this.fade = 1;
        this.f = f;
        this.width = (Math.random()*25 + 25);

        const o = document.createElement("div");
        const r = document.createElement("img");
        r.setAttribute("src", "./img/test.svg");
        r.setAttribute("width", this.width + "px");
        r.setAttribute("class", "rec")
        o.setAttribute("id", "num"+num);
        o.setAttribute("style", "position:absolute; z-index:-1;")

        o.appendChild(r);
        document.getElementById("spawn").appendChild(o);

        const dummy = o.getBoundingClientRect();
        this.posx = dummy.left + window.scrollX;
        this.posy = dummy.top + window.scrollY;
        this.startx = dummy.left + window.scrollX;
        this.starty = dummy.top + window.scrollY;
    }

    anim (){
        if(this.fade < 0 || this.posx<0 || this.posy<0 || this.posx>(window.innerWidth-this.width*1.75) ||this.posy>window.innerHeight){
            document.getElementById(this.id).setAttribute("style", "position:absolute; z-index:-1; top:" + this.starty + "px; left:" + this.startx + "px; opacity:" + 1);
            this.fade = 1;
            this.posx = this.startx;
            this.posy = this.starty;
        }
        this.fade -= this.f;
        this.posx += this.x;
        this.posy += this.y;
        document.getElementById(this.id).setAttribute("style", "position:absolute; z-index:-1; top:" + this.posy + "px; left:" + this.posx + "px; opacity:" + this.fade);
    }

    remove(){
        document.getElementById(this.id).remove();
    }
}

class master {

    constructor (number, fadeSpeed, speed){
        this.counter = 0;
        this.n = number;
        this.arr = new Array();
        for (let i = 0; i < number; i++) {
            this.arr.push(new rec(i, fadeSpeed, speed));
        }
    }

    animate(){
        for (let i = 0; i < this.arr.length; i++) {
            if(this.counter >= i) this.arr[i].anim();
        }
        if(this.counter <= this.arr.length) this.counter++;
    }

    delete(){
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i].remove();
        }
    }
}

/*
class master2 {

    constructor (parts, number, fadeSpeed, speed){
        this.time = 300;
        this.counter = 0;
        this.arr = new Array();
    }

    animate (){
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i].animate();
        }
    }

}
*/