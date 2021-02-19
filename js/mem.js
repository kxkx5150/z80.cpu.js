class RAM {
  constructor(core) {
    this.core = core;
    this.mem = new Uint8Array(0xffff);
  }
  read(address) {
    if(this.core.info.mem)console.log("          read    : "+this.toHex(address))
    return this.mem[address];
  }
  read16 = function (address) {
    if(this.core.info.mem)console.log("          read16  : "+this.toHex(address))
    return (this.read(address + 1) << 8) | this.read(address);
  };
  write(address, data) {
    if(this.core.info.mem)console.log("          write   : "+this.toHex(address))
    this.mem[address] = data & 0xff;
  }
  write16 = function (address, data) {
    if(this.core.info.mem)console.log("          write16 : "+this.toHex(address))
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
