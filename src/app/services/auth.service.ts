import {Injectable} from "@angular/core";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private tokenEncoded: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZXhwIjoiMTU3NzgzNjc5OSJ9.5s8DnWj71HcOiPXbG95h5h7K8bJCgmgDllWFUgRzXZ8';
    private tokenFromLocalStorage: string;

    constructor(private readonly jwtHelper: JwtHelperService) {
    }


    isAuthenticated(): boolean {
        localStorage.setItem(this.tokenEncoded, 'token');
        this.tokenFromLocalStorage = localStorage.getItem('token');
        return this.jwtHelper.isTokenExpired(this.tokenFromLocalStorage);
    }
}
