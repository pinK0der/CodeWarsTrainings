/*Write a function that checks if a given string (case insensitive) is a palindrome.*/

function isPalindrome(x)
{
    //must return true/false

    let halfLenght = x.length / 2;

    let returned = true;

    for(let i = 0; i < halfLenght; i++)
    {
        if(x[i].toLowerCase() !== x[x.length - 1 - i].toLowerCase())
        {
            returned = false;
        }
    }
 
    return returned;
}