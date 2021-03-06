import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { getAuthUser, logout } from '@sandbox-v240/admin/data-access-auth'
import { delay, tap } from 'rxjs/operators'

@Component({
  template: ` <div class="d-flex flex-column justify-content-center h-100 align-items-center">Logging out...</div> `,
})
export class LogoutComponent {
  getAuthUser = this.store.select(getAuthUser)

  constructor(private readonly store: Store, private readonly router: Router) {
    this.getAuthUser
      .pipe(
        delay(300),
        tap(() => this.store.dispatch(logout())),
      )
      .subscribe(() => this.router.navigate(['/']))
  }
}
