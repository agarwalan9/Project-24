class Iron{
	constructor(x,y){
		var options = {
			'restitution': 0.8,
            'friction': 3.0,
            'density': 30.0
		}
		this.width = 50;
		this.height = 50;
		this.body=Bodies.rect(x,y,this.width,this.height,options)
		World.add(world, this.body);
	}
	display()
    {
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the rectange here to iron the stone
            rect(200,200,this.width,this.height);

			pop()
	}

}