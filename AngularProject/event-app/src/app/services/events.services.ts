import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService
{
    private _eventUrl='https://localhost:44355/api/Events/events';
    private _specialUrl='https://localhost:44355/api/Events/specials';
    constructor(private http:HttpClient) {
               
    }

    getEvents()
    {
        return this.http.get<any>(this._eventUrl);
    }

    getSpecialEvents()
    {
        return this.http.get<any>(this._specialUrl);
    }
}