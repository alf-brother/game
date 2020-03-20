
class Exception 
{
  constructor (message)
  {
    this.message = message;
    this.name = "Standard exception!"
  }
}
class DisplayException extends Exception
{
  constructor (message)
  {
    super (message);
    this.name="Display Exception";
  }
}
