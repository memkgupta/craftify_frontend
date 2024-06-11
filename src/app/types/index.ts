export type AuthUser = {
    email:string,
    role:string,
    profile_pic:string,
    full_name:string
}

export interface AuthContextProps {

isAuthenticated:Boolean,
loading:Boolean,
user:AuthUser
}