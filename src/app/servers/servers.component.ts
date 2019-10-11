import {Component,OnInit} from '@angular/core';

@Component ({

selector:'./app/servers',
templateUrl:'./app/servers.Component.html',
styleUrls:['./app/servers.Component.css']

})
export class ServersComponent implements OnInit
{
    allowNewServer=false;
constructor (){

    setTimeout(()=>{


this.allowNewServer
    },2000);
}
ngOnInit(){}
}