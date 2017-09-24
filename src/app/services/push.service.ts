import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PushService {

  private swScope: string = './';

  constructor() { }

  subscribeToPush(compagnyId: String): void {

    const convertedVapidKey = this.urlBase64ToUint8Array(environment.vapidPublicKey);

    navigator['serviceWorker']
      .getRegistration(this.swScope)
      .then(registration => {

        registration.pushManager
          .subscribe({ userVisibleOnly: true, applicationServerKey: convertedVapidKey })
          .then(function (subscription) {
            return fetch(environment.urlOfApi + '/api/compagnies/' + compagnyId + '/carts/webpush', {
              method: "POST",
              body: JSON.stringify({
                endpoint: subscription.endpoint,
                publicKey: subscription.toJSON().keys.p256dh,
                auth: subscription.toJSON().keys.auth
              }),
              headers: { 'Content-Type': 'application/json' }
            })
              .then(response => {
                return response.json()
              })
              .then(json => {
                console.log('Subscription request answer', json)
              })
              .catch(error => {
                console.log('Subscription request failed', error)
              });
          });

      })
      .catch(error => {
        console.log(error);
      })

  }

  private urlBase64ToUint8Array(base64String): Uint8Array {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }


}
