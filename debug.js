class Dbg {
  dlog(data) {
    //const caller = arguments.callee.caller.name;
    //console.log("caller | " + caller + " data | " + data);
    console.log(data);
  }
}

module.exports = new Dbg();