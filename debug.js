function dlog(data) {
  const caller = arguments.callee.caller.name;
  console.log("caller | " + caller + " data | " + data);
}