class Dbg {
  dlog(data) {
    var caller = dlog.caller.name;
    if (caller == null || caller == undefined || caller == "") {
      caller = "Unknown";
    }
    console.log("caller | " + caller + " data | " + data);
    console.log(data);
  }
}

module.exports = new Dbg();