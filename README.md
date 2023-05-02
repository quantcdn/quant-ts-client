# QuantCDN client API

Provides a client to common API interfaces on QuantCDN.

## Install

The preferred method for installation is via npm.

```
npm i @quantcdn/quant-cli
```

## Usage

The API client expects the following environment variables are present in order to make a successful API connection:
* `QUANT_CUSTOMER`: The organization/customer identifier
* `QUANT_PROJECT`: The project identifier
* `QUANT_TOKEN`: The project token

These values can be found from the "Integrations" page of the QuantCDN Dashboard.

```
import { QuantClient } from "@quantcdn/quant-client"

// Purge QuantCDN edge caches for a single route.
QuantClient().purge('/path/to/content')

// Purge all QuantCDN edge caches.
QuantClient().purge('/*')
``