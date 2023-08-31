import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const useractiveGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  if(sessionStorage.getItem('isLogged')){
    return true;
  }
  else{
    router.navigate(['/login']);
    return false;
  }
};
