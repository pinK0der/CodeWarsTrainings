/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/

function doubleChar(str)
{
    var returned = "";

    for(let i = 0; i < str.length; i++)
    {
        returned += str[i] + str[i];
    }

    return returned;
}
  