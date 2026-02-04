# Valentine's Day Invitation

Interactive Valentine's Day invitation with animated envelope, playful "No" button, and heart rain animation.

## Setup

```bash
npm install
npm start
```

## Customize

### Add Your Images
Put these in the `public` folder:
- `mobile-bg.jpg` - Mobile background
- `desktop-bg.jpg` - Desktop background  
- `happy-sticker.png` - Default sticker
- `sad-sticker.png` - Shows when hovering "No"
- `love-sticker.png` - Shows after "Yes"

### Change the Name
In `src/App.jsx` line ~108:
```javascript
<h1>Hi, Beautiful!</h1>  // Change "Beautiful" to their name
```

### Change Messages
- **Question** (line ~110): `Will you be my Valentine?`
- **Response** (line ~149): `Mayai Maya Timi Lai`

### Adjust Colors
- **Envelope border** (line ~62): `border-red-900`
- **Card border** (line ~103): `border-red-900`

### More Hearts
In line ~31:
```javascript
{[...Array(30)].map  // Change 30 to any number
```

## 📱 Features
- Responsive design (mobile & desktop)
- Interactive envelope animation
- Moving "No" button
- Dynamic stickers
- Heart rain on "Yes"

**Made with ❤️ for Valentine's Day**
