class Squad extends Figure{
    constructor(){
        super();
        this.posy = 150;
        this.color=(255,0,255);
        this.direc = 1;
    }

    draw(posx){
        rect(posx,this.posy,this.tam,this.tam);
    }

    movimiento(){
        this.posy += this.direc;
        if(this.posy <= 0 || this.posy >= 260){
            this.direc *= -1;
        }
    }
}