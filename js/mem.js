class RAM {
  constructor(core) {
    this.core = core;
    this.mem = new Uint8Array(0xffff);
  }
  read(address) {
    return this.mem[address];
  }
  read16 = function (address) {
    return (this.read(address + 1) << 8) | this.read(address);
  };
  write(address, data) {
    this.mem[address] = data & 0xff;
  }
  write16 = function (address, data) {
    this.write(address, data);
    this.write(address + 1, data >> 8);
  };
  reset(hard) {
    this.mem.fill(0);
  }
}
