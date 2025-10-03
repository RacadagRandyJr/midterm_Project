The function checks if the year is before, after, or 
exactly 1918—handling leap years differently for Julian (before 1918) 
and Gregorian (after 1918) calendars—and returns "12.09." + year if it's 
a leap year (meaning the 256th day falls on September 12), or "13.09." + year 
otherwise, while leaving the special case of 1918 to be handled separately due to 
Russia's calendar transition.
