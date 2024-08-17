
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';




export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if(auth.isLoggedIn){
    console.log("lien : " + auth.redirectUrl);
    return true;

  } 
  
  else {
    auth.redirectUrl = router.url;
    console.log("lien : " + auth.redirectUrl);
    router.navigate(['/login']);
    return false;
  }
  
};


 
