# VIN Decoder SPA

Single Page Application for decoding vehicle VIN numbers using the NHTSA API.

🔗 **Live demo:**
[Open on GitHub Pages](https://nikita-7onenko-dev.github.io/vin-decoder/#/)
---

## 🧪 Test VINs

You can use any of the following VINs to test the application:

- [1FTFW1CT5DFC10312](https://nikita-7onenko-dev.github.io/vin-decoder/#/?vin=1FTFW1CT5DFC10312)  
- [WDDGF3BB4DF968608](https://nikita-7onenko-dev.github.io/vin-decoder/#/?vin=WDDGF3BB4DF968608)  
- [WVGEK9BP3CD010788](https://nikita-7onenko-dev.github.io/vin-decoder/#/?vin=WVGEK9BP3CD010788)

## ⚙️ Features

### VIN decoding
* Decode vehicle VIN numbers
* Client-side VIN validation before sending requests
* Display decoded vehicle specifications
* Display API warnings and decode errors
 
### Search history
* Stores recently decoded VINs in localStorage
* One-click repeat search
* Clear history

### Shareable URLs
* Synchronizes the current VIN with the URL
* Share links to specific VIN searches
* Restores application state when opening a shared link

### Caching
* Preserves the current search state during navigation
* Previously decoded VINs are restored without re-entering data
* API responses are cached in memory to avoid unnecessary requests

### Variables
* Browse the complete list of NHTSA variables
* Instant client-side search with highlighted matches
* Client-side pagination
* View detailed descriptions for each variable
* Safe rendering of API-provided HTML using DOMPurify and html-react-parser

---

## ⚠️ Error handling

The application distinguishes between different types of errors.

#### Transport (HTTP + network) errors

Errors that occur while communicating with the server. For example: 
  * Network errors
  * Internal server errors

#### Decode errors
The NHTSA API always responds with `200 OK`, even when a VIN cannot be decoded. So, the application parses the API response and extracts:
  * Invalid VIN errors
  * Decode warnings
  * Partial decode results

instead of relying solely on HTTP status codes.

#### Invalid URL handling
The application validates VINs restored from the URL. Malformed URLs such as:  
[vin-decoder/#/?vin=some%20bullshit](https://nikita-7onenko-dev.github.io/vin-decoder/#/?vin=some%20bullshit)  
are rejected on the client before any request is sent.


---

## 🎨 UI/UX
* Responsive layout
* Browser Back/Forward support
* Shareable search URLs
* Friendly validation messages
* Filtered empty and garbage values
* Reusable status components for loading and status messages

---

## 🛠️ Tech Stack
- React
- TypeScript
- React Router
- Vite
- DOMPurify
- html-react-parser

---

## 🚀 Running locally


#### 1. Clone the repository

```bash

git clone https://github.com/Nikita-7onenko-dev/vin-decoder.git

```

#### 2. Go to the project folder

```bash

cd vin-decoder

```

#### 3. Install dependencies

```bash
npm install
```

#### 4. Run the development server
```bash
npm run dev
```

#### 5. Open:

```bash
http://localhost:5173
```
