// Q5. Boolean Logic Access System

function checkAccess(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  // Door "closed" is treated as locked; all conditions must hold
  const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

  console.log(
    `Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, ` +
    `Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside} -> ${isSecure ? "Secure" : "Unsafe"}`
  );
}

// Test multiple outcomes
checkAccess(true, true, true, true);    // Secure
checkAccess(false, true, true, true);   // Unsafe (door not locked)
checkAccess(true, false, true, true);   // Unsafe (window open)
checkAccess(true, true, false, true);   // Unsafe (alarm off)
checkAccess(true, true, true, false);   // Unsafe (owner not inside)
checkAccess(false, false, false, false);// Unsafe (everything off)
