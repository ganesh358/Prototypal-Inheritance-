

const SUV = {
    Tire : 4,
    side_Mirror : 2,
    roof_panel : 1,
    front_bumper:1,
    ACcondenser : 1,
    ACradiatorfan:1,
    RearBumper :1,
    hood:1,
    headLight:2,
    tailLight:2,
    wheels:4,
};

const Compact_SUVs = Object.create(SUV);
console.log(Compact_SUVs)



function FourWheelerAutomobile(type){
      this.type = type;
      this.Tire = 4 ;
      this.side_Mirror = 2 ;
      this.roof_panel = 1 ;
      this.front_bumper = 1;
      this.ACcondenser = 1 ;
      this.ACradiatorfan = 1 ;
      this.RearBumper = 1 ;
      this.hood = 1 ;
      this.headLight = 2 ;
      this.tailLight = 2 ;
      this.wheels = 4 ;
}

let p1 = new FourWheelerAutomobile("car");
console.log(p1);