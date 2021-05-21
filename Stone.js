class Stone{
	constructor(x,y){
		var options = {
			'restitution': 0.8,
            'friction': 0.9,
            'density': 12.0
		}
		this.width = 50;
		this.height = 50;
		this.body=Bodies.rect(x,y,this.width,this.height,options)
		World.add(world, this.body);
	}
	display()
    {
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the rectange here to display the stone
            rect(200,200,this.width,this.height);

			pop()
	}

}