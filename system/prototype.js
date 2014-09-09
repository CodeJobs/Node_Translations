/**
 *  Checks if a value exists in an array
 *
 *  @param array key
 *  @return Returns true if needle is found in the array, false otherwise
 */
Array.prototype.inArray = function()
{ 
  for (var j in this) { 
    if (this[j] == arguments[0]) { 
      return true;
    } 
  }

  return false;     
}