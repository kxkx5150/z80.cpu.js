class CORE {
  constructor() {
    this.io = new IO(this)
    this.mem = new RAM(this);
    this.cpu = new Z80(this,this.mem);
    this.rom = null;
    this.reset();
  }
  setRom(arybuf){
    var u8array = new Uint8Array(arybuf);
    this.rom = u8array;
    for (var i = 0; i < u8array.length; i++) {
      main.mem.mem[0x0000 +i] = u8array[i];
    }
    this.init();
  }
  init(){
    this.run();
  }
  run(){
    for (let i = 0; i < 10; i++) {
      this.cpu.run_instruction(true)      
    }
  }



  reset(){
    this.io.reset();
    this.mem.reset();
    this.cpu.reset();
  }
}
