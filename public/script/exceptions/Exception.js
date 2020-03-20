/*
 * class Exception
 * The basice exception class with a message and a name.
 * author: ALF
 * date: 2020-03-20
 */
class Exception 
{
  constructor (message)
  {
    this.message = message;
    this.name = "Standard exception!"
  }
}
/*
 * class DisplayException
 * A extension of the Exception which handles exceptions regarding the 
 * Display class.
 * author: ALF
 * date: 2020-03-20
 * */
class DisplayException extends Exception
{
  constructor (message)
  {
    super (message);
    this.name="Display Exception";
  }
}
