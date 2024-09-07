
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';




export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if(auth.isLoggedIn){
    return true;

  } 
  
  else {
    auth.redirectUrl = router.url;
    router.navigate(['/login']);
    return false;
  }
  
};


 
