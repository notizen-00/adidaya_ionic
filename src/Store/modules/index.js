// src/store/modules/index.js

import { useAuthStores } from './authStore'
import { useLokasiStores } from './lokasiStore'
import { useHotelStores } from './hotelStore'
import { useWarungStores } from './warungStore'
import { useDeviceStores } from './deviceStore'
import { useNotificationStores } from './notificationStore'
// Impor modul-modul lain jika ada

export function useStore() {
  return {
    authStore:useAuthStores(),
    lokasiStore:useLokasiStores(),
    hotelStore:useHotelStores(),
    warungStore:useWarungStores(),
    deviceStore:useDeviceStores(),
    notificationStore:useNotificationStores(),
    
  }
}
