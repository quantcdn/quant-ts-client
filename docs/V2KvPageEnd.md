# V2KvPageEnd

Why the page ended: end (no more items), limit (the page has limit items), bytes (the 4,000,000 byte page budget), budget (the read budget of one request). With bytes or budget a page can have fewer than limit items while has_more is true. Null when the KV service does not report it.

## Enum

* `End` (value: `'end'`)

* `Limit` (value: `'limit'`)

* `Bytes` (value: `'bytes'`)

* `Budget` (value: `'budget'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
