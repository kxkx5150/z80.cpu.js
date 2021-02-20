class RAM {
  constructor(core) {
    this.core = core;
    this.mem = new Uint8Array(0xffff);
  }
  readbyte(address) {
    if(this.core.info.mem)console.log("          readbyte  : "+this.toHex(address))
    return this.mem[address];
  }
  readword = function (address) {
    if(this.core.info.mem)console.log("          readword  : "+this.toHex(address))
    return (this.read(address + 1) << 8) | this.read(address);
  };
  writebyte(address, data) {
    if(this.core.info.mem)console.log("          writebyte : "+this.toHex(address))
    this.mem[address] = data & 0xff;
  }
  writeword = function (address, data) {
    if(this.core.info.mem)console.log("          writeword : "+this.toHex(address))
    this.write(address, data);
    this.write(address + 1, data >> 8);
  };
  toHex = (v) => {
    return '0x' + (('0000' + v.toString(16).toUpperCase()).substr(-4));
  }
  reset(hard) {
    this.mem.fill(0);
  }
}
