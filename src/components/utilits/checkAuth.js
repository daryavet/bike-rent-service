import { getToken } from "../../services/tokenService";

export const checkAuth =(userData, userStatus) => {
    if(userData && userStatus === 'fulfilled'){
        return true
    } else if(!userData && userStatus === 'pending' && getToken()){
        return true
    } else if(!userData && userStatus === 'reject'){
        return false
    } else if(!userData && userStatus === 'idle'){
        return false
    }
};