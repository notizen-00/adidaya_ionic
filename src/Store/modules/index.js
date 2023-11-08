// src/store/modules/index.js

import { useAuthStores } from './authStore'
import { useLokasiStores } from './lokasiStore'
import { useHotelStores } from './hotelStore'
import { useWarungStores } from './warungStore'
// Impor modul-modul lain jika ada

export function useStore() {
  return {
    authStore:useAuthStores(),
    lokasiStore:useLokasiStores(),
    hotelStore:useHotelStores(),
    warungStore:useWarungStores(),
    // Masukkan modul-modul lain di sini jika ada
  }
}
