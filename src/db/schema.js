import Dexie from 'dexie'

export const db = new Dexie('ClothShopDB')

db.version(1).stores({
  bills:          '++id, bill_number, branch_id, status, created_at',
  bill_items:     '++id, bill_id',
  held_bills:     '++id, branch_id, created_at',
  sync_queue:     '++id, table_name, operation, synced, created_at',
  customers:      '++id, phone, shop_id',
  inventory:      '++id, branch_id, variant_id',
  settings:       'key',
})
