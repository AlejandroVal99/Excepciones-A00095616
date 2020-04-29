class Ball extends Figure{
    constructor(){
        super()
        this.posy = 450;
        this.color=(255,255,0);
        this.direc = 1;
    }

    draw(posx){
        //fill(color);
        ellipse(posx,this.posy,this.tam,this.tam);
    }
    movimiento(){
        this.posy += this.direc;
        if(this.posy <= 300 || this.posy >= 540){
            this.direc *= -1;
        }
    }
}