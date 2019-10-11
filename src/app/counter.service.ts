

export class CounterService
{
    activeToInactiveCounter=0;
    inactiveToactiveCounter=0;

    incrementActiveToInactive()
    {
        this.activeToInactiveCounter++;
        console.log('Active To Inactive'+this.activeToInactiveCounter);
    }

    incrementInactiveToActive()
    {
        this.inactiveToactiveCounter++;
        console.log('Inactive To Active'+this.inactiveToactiveCounter);
    }
}