class Ground{
constructor(x,y,height,width){
    var options={
'friction':1.5,
'density':1.0,
    }
    this.body=Body.rectangle(x,y,height,width)
    this.height=height
    this.width=width
    World.add(world,this.body);
}
display(){
var pos =this.body.position;
push();  
translate(pos.x,pos.y)
rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,this.width,this.height)
pop();

}




}