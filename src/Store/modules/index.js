// src/store/modules/index.js

import { useAuthStores } from './authStore'
import { useLokasiStores } from './lokasiStore'
import { useHotelStores } from './hotelStore'
// Impor modul-modul lain jika ada

export function useStore() {
  return {
    authStore:useAuthStores(),
    lokasiStore:useLokasiStores(),
    hotelStore:useHotelStores(),
    // Masukkan modul-modul lain di sini jika ada
  }
}
