# Google Analytics Setup Guide

## 📊 Setting Up Google Analytics

### 1. Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Enter your account name (e.g., "Rafael Kawagoe Portfolio")
5. Click "Next"

### 2. Set Up a Property

1. Enter property name: "Portfolio Website"
2. Select your timezone and currency
3. Click "Next"

### 3. Configure Data Stream

1. Select "Web" as platform
2. Enter your website URL
3. Enter stream name: "Portfolio"
4. Click "Create stream"

### 4. Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)
2. Copy this ID

### 5. Add to Your Project

1. Open your `.env.local` file
2. Add your Measurement ID:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Save the file
4. Restart your development server

## 📈 What's Being Tracked

### Automatic Tracking:

- ✅ **Page Views**: Every page navigation
- ✅ **Scroll Depth**: At 25%, 50%, 75%, and 100%
- ✅ **Time on Page**: Duration spent on each page
- ✅ **Navigation Clicks**: Home and About page clicks
- ✅ **Social Links**: WhatsApp, LinkedIn, Gmail, GitHub clicks
- ✅ **Language Changes**: PT-BR ↔ EN-US switches
- ✅ **Button Clicks**: "Learn More" button
- ✅ **Project Clicks**: Portfolio project card clicks
- ✅ **Carousel Interactions**: Next, Previous, Dot navigation

### Custom Events Structure:

#### Social Link Clicks

```typescript
Event: social_link_click
Parameters:
  - social_platform: "WhatsApp" | "LinkedIn" | "Gmail" | "GitHub"
  - link_url: string
```

#### Navigation Clicks

```typescript
Event: navigation_click
Parameters:
  - destination: "home" | "about"
```

#### Language Changes

```typescript
Event: language_change
Parameters:
  - from_language: "pt-BR" | "en-US"
  - to_language: "pt-BR" | "en-US"
```

#### Button Clicks

```typescript
Event: button_click
Parameters:
  - button_name: string
  - button_location: string
```

#### Scroll Depth

```typescript
Event: scroll_depth
Parameters:
  - scroll_percentage: 25 | 50 | 75 | 100
```

#### Time on Page

```typescript
Event: time_on_page
Parameters:
  - duration_seconds: number
  - page_path: string
```

## 🔍 Viewing Analytics Data

### Real-Time Reports

1. Go to Google Analytics dashboard
2. Click "Realtime" in the left sidebar
3. See users currently on your site

### Custom Events

1. Go to "Reports" → "Engagement" → "Events"
2. See all tracked events with their parameters

### Page Views

1. Go to "Reports" → "Engagement" → "Pages and screens"
2. See most visited pages

## 🛠️ Testing Analytics

### In Development:

```bash
npm run dev
```

1. Open browser DevTools (F12)
2. Go to Network tab
3. Filter by "google-analytics" or "gtag"
4. Interact with your site
5. Watch for analytics requests

### In Production:

Use [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger) Chrome extension

## 🚀 Additional Tracking (Optional)

Add more tracking by importing and calling analytics functions:

```typescript
import {
  trackProjectClick,
  trackCarouselInteraction,
  trackExternalLink,
} from "./utils/analytics";

// Track project clicks
trackProjectClick("Project Name", "https://github.com/...");

// Track carousel interactions
trackCarouselInteraction("next", "projects_section");

// Track external links
trackExternalLink("https://example.com", "Example Link");
```

## 📋 Best Practices

✅ **Do:**

- Test in production environment
- Use descriptive event names
- Track user flows and conversions
- Respect user privacy (GDPR/CCPA)

❌ **Don't:**

- Track personal information
- Send sensitive data
- Track before user consent (if required)
- Overwhelm with too many events

## 🔒 Privacy Compliance

For GDPR/CCPA compliance, consider:

- Adding cookie consent banner
- Allowing users to opt-out
- Implementing IP anonymization
- Creating privacy policy

Add to analytics init:

```typescript
initGA(GA_MEASUREMENT_ID, {
  anonymize_ip: true,
  cookie_flags: "SameSite=None;Secure",
});
```

## 📊 Useful Google Analytics Views

1. **Acquisition** → See where users come from
2. **Engagement** → Time spent, pages viewed
3. **Demographics** → Age, gender, location
4. **Technology** → Browser, OS, device
5. **Events** → Custom event tracking

## 🆘 Troubleshooting

**Analytics not working?**

- Check if `VITE_GA_MEASUREMENT_ID` is set in `.env.local`
- Verify Measurement ID format: `G-XXXXXXXXXX`
- Check browser console for errors
- Disable ad blockers during testing
- Clear browser cache and restart dev server

**Events not showing up?**

- Wait 24-48 hours for data to appear in reports
- Use Realtime view for immediate feedback
- Check event parameters are correct
- Verify network requests in DevTools
