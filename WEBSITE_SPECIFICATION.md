# Am Shalem USA - מפרט אתר מלא

## סקירה כללית

**שם הארגון:** Am Shalem  
**סוג:** עמותה ללא מטרות רווח (Non-Profit)  
**כתובת אתר נוכחית:** https://www.am-shalem.com/  
**אירוח יעד:** GitHub Pages (חינמי)  
**סוג אתר:** Static Website (ללא צד שרת)  
**שפת תוכן עיקרית:** אנגלית  

---

## 1. מבנה האתר (Site Architecture)

### 1.1 דפים באתר

| # | שם העמוד | נתיב URL | תיאור |
|---|----------|----------|-------|
| 1 | Home | `/` או `/index.html` | עמוד הבית הראשי |
| 2 | About Us | `/about` או `/about.html` | אודות הארגון |
| 3 | Contact | `/contact` או `/contact.html` | יצירת קשר |
| 4 | Get Involved | `/get-involved` או `/get-involved.html` | דרכי השתתפות |
| 5 | Privacy Policy | `/privacy-policy` או `/privacy-policy.html` | מדיניות פרטיות |

### 1.2 מבנה התפריט הראשי (Navigation)

```
Home | About Us | Contact | Get Involved
```

---

## 2. עיצוב ומיתוג (Branding & Design)

### 2.1 צבעים (Color Palette)

| שימוש | צבע | קוד HEX |
|-------|-----|---------|
| צבע ראשי - צהוב זהב | Donate Button | `#F5C842` |
| צבע לוגו - כתום | Star element | `#E67E22` |
| צבע לוגו - צהוב | Star element | `#F1C40F` |
| צבע לוגו - כחול | Star element | `#3498DB` |
| צבע לוגו - אפור כהה | Star element | `#5D6D7E` |
| רקע ראשי | Background | `#FFFFFF` (לבן) |
| רקע משני | Section backgrounds | `#F5F5F5` (אפור בהיר מאוד) |
| טקסט ראשי | Body text | `#333333` או `#000000` |
| כפתורים כהים | Submit buttons | `#000000` (שחור) |

### 2.2 לוגו

**תיאור:** מגן דוד צבעוני מורכב מצורות גיאומטריות משולבות בצבעים: כתום, צהוב, כחול ואפור.  
**טקסט:** "Am Shalem" מתחת ללוגו  
**קובץ:** יש לשמור את הלוגו כ-`logo.png` או `logo.svg`  

### 2.3 טיפוגרפיה (Fonts)

| סוג | פונט מומלץ | גיבוי |
|-----|------------|-------|
| כותרות | Playfair Display / Cormorant Garamond | Georgia, serif |
| גוף טקסט | Open Sans / Lato | Arial, sans-serif |

### 2.4 סגנון עיצוב

- **מינימליסטי ונקי** - הרבה רווח לבן
- **פינות מעוגלות** - לכפתורים ולכרטיסיות
- **תמונות עם טשטוש עדין** - אפקט blur על תמונות רקע
- **צללים עדינים** - לכרטיסיות וכפתורים
- **קו תחתון לפריט תפריט פעיל**

---

## 3. רכיבים משותפים (Shared Components)

### 3.1 Header (כותרת עליונה)

**מיקום:** קבוע בראש כל עמוד  
**רכיבים:**

1. **כפתור Donate** (צד שמאל עליון)
   - צבע רקע: צהוב זהב (#F5C842)
   - טקסט: "Donate" עם אייקון לב ♡
   - צורה: כפתור מעוגל (pill shape)
   - קישור: לעמוד תרומות חיצוני (לדוגמה: PayPal, GoFundMe, או דומה)

2. **לוגו** (מרכז)
   - תמונת לוגו מגן דוד צבעוני
   - טקסט "Am Shalem" מתחתיו
   - לחיצה מחזירה לעמוד הבית

3. **תיבת חיפוש** (צד ימין עליון) - אופציונלי
   - Placeholder: "Search..."
   - אייקון זכוכית מגדלת

4. **תפריט ניווט** (מתחת ללוגו, מרכז)
   - Home | About Us | Contact | Get Involved
   - קו תחתון מתחת לפריט הפעיל
   - Hover effect: שינוי צבע עדין

**קוד HTML מוצע:**
```html
<header class="site-header">
  <div class="header-top">
    <a href="donate-link" class="donate-btn">
      <span>Donate</span>
      <span class="heart-icon">♡</span>
    </a>
    
    <a href="/" class="logo-container">
      <img src="assets/images/logo.png" alt="Am Shalem Logo">
      <span class="site-name">Am Shalem</span>
    </a>
    
    <div class="search-box">
      <input type="text" placeholder="Search...">
      <button class="search-btn">🔍</button>
    </div>
  </div>
  
  <nav class="main-nav">
    <ul>
      <li><a href="/" class="active">Home</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/get-involved">Get Involved</a></li>
    </ul>
  </nav>
</header>
```

### 3.2 Footer (כותרת תחתונה)

**רקע:** לבן  
**רכיבים:**

1. **אימייל ליצירת קשר**
   - טקסט: `contact@am-shalem.com`
   - לחיץ (mailto link)

2. **Social Bar (רשתות חברתיות)**
   - אייקון קישור (link icon) - מוביל לאתר הארגון או לפרופיל חברתי

3. **זכויות יוצרים**
   - טקסט: `©2024 by Am Shalem. Proudly created by Yairix.com`
   - (לעדכן לשנה הנוכחית)

4. **קישור למדיניות פרטיות**
   - טקסט: "Privacy Policy"
   - לחיץ

**קוד HTML מוצע:**
```html
<footer class="site-footer">
  <div class="footer-content">
    <a href="mailto:contact@am-shalem.com" class="email-link">
      contact@am-shalem.com
    </a>
    
    <ul class="social-bar">
      <li><a href="#" aria-label="Website Link">🔗</a></li>
      <!-- ניתן להוסיף עוד רשתות חברתיות -->
    </ul>
    
    <div class="footer-bottom">
      <p>©2025 by Am Shalem. Proudly created by Yairix.com</p>
      <a href="/privacy-policy" class="privacy-link">Privacy Policy</a>
    </div>
  </div>
</footer>
```

---

## 4. עמוד הבית (Home Page)

### 4.1 Hero Section

**רקע:** תמונה של ספר תורה פתוח עם טקסט עברי  
**אפקט:** Parallax או תמונה קבועה עם overlay עדין  
**גובה:** 100vh או לפחות 500px  

**תוכן:**
- **כותרת ראשית (H1):**  
  `Back to the roots`
  - גופן: גדול, בולט, לבן
  - סגנון: אפשרות לאותיות italics

- **תת-כותרת:**  
  `Creating a more inclusive and vibrant Jewish world.`
  - גופן: בינוני, לבן, עם שקיפות קלה

### 4.2 About Section (תיאור הארגון)

**רקע:** לבן  
**מבנה:** שתי עמודות - לוגו בצד שמאל, טקסט בצד ימין  

**תוכן:**
```
Am Shalem is a non-profit dedicated to promoting Jewish identity, outreach, Torah study, and dissemination in a welcoming environment. We believe that every Jew deserves a place in the Jewish community, that Torah study is essential for Jewish growth, that community is vital to Jewish life, and that outreach is crucial to the future of the Jewish people.
```

**כפתור:** "Read more >" - מוביל לעמוד About Us

### 4.3 Cards Section (כרטיסיות)

**רקע:** אפור בהיר (#F5F5F5)  
**מבנה:** 4 כרטיסיות בשורה (רספונסיבי - 2 או 1 במובייל)  

**כרטיסיות:**

#### כרטיסייה 1: Activities
- **תמונה:** תמונת פעילות קהילתית (IMG_7068.jpeg)
- **כותרת:** `Activitis` [כך באתר המקורי, אפשר לתקן ל-Activities]
- **קישור:** "Read more >" - לדף פעילויות או חלק באתר

#### כרטיסייה 2: Mission Statement
- **תמונה:** תמונת פעילות קהילתית
- **כותרת:** `A mission statement`
- **קישור:** "Read more >"

#### כרטיסייה 3: Am Shalem Center JLM
- **תמונה:** תמונת המרכז בירושלים (PHOTO-2022-08-03-08-42-10-2.jpg)
- **כותרת:** `Am Shalem center JLM`
- **קישור:** "Read more >"

#### כרטיסייה 4: About Rabbi Amsellem
- **תמונה:** תמונת הרב חיים אמסלם (Rabbi-haim-amselem-about.jpg)
- **כותרת:** `About rabbi Amsellem`
- **קישור:** "Read more >"

**עיצוב כרטיסייה:**
- רקע לבן
- פינות מעוגלות
- צל עדין
- תמונה בחלק העליון
- כותרת וקישור בחלק התחתון

### 4.4 Newsletter Section

**רקע:** אפור בהיר (#F5F5F5)  
**מיקום:** מעל ה-Footer  

**תוכן:**
- **כותרת (H5):** `Subscribe our newsletter`
- **שדה אימייל:** 
  - Placeholder: `e.g., email@example.com`
  - רוחב: כ-60% מהמסך
- **כפתור שליחה:**
  - טקסט: `Join`
  - צבע רקע: שחור
  - צבע טקסט: לבן

**הודעת הצלחה:** `Thanks for subscribing!`

**הערה:** מכיוון שאין צד שרת, יש להשתמש ב:
- Google Forms מוטמע
- Formspree
- EmailJS
- או שירות דומה

---

## 5. עמוד About Us

### 5.1 Hero Section

**רקע:** תמונה מטושטשת של קבוצת אנשים  
**גובה:** כ-400px  

**תוכן:**
- **כותרת (H1):** `ABOUT US`
  - צבע: לבן
  - גופן: גדול, בולט

### 5.2 Main Content Section

**רקע:** לבן  

**כותרת:** `Am Shalem: Building an Inclusive Jewish Future`

**תוכן מלא:**
```
Am Shalem is a non-profit organization dedicated to promoting Jewish identity, outreach, Torah study, and dissemination in a welcoming environment.

Our Mission:
We believe that:
• Every Jew deserves a place in the Jewish community
• Torah study is essential for Jewish growth
• Community is vital to Jewish life
• Outreach is crucial to the future of the Jewish people

Our Vision:
Am Shalem strives to create a more inclusive and vibrant Jewish world by:
• Welcoming all Jews regardless of background
• Providing accessible Torah education
• Building strong Jewish communities
• Reaching out to unaffiliated Jews

Our Programs:
• Torah Study Groups
• Community Events
• Educational Workshops
• Youth Programs
• Family Activities

About Rabbi Haim Amsellem:
[מידע על הרב חיים אמסלם - מייסד הארגון, רקע, השכלה, ותפקידו בארגון]
```

---

## 6. עמוד Contact

### 6.1 Main Section

**רקע:** אפור בהיר (#F5F5F5)  
**מבנה:** שתי עמודות  

#### עמודה שמאלית - פרטי קשר

**כותרת (H1):** `CONTACT`

**פרטים:**
- **כתובת:** `1756 East 5th street, Brooklyn, NY 11223`
- **אימייל:** `contact@am-shalem.com`
- **טלפון:** `(347) 434-3973`

#### עמודה ימנית - טופס יצירת קשר

**שדות הטופס:**

| שדה | סוג | Placeholder | חובה |
|-----|-----|-------------|------|
| Name | text | Enter your name | כן (*) |
| Email | email | Enter your email | כן (*) |
| Phone | tel | Enter your phone number | לא |
| Address | text | Enter your address | לא |
| Subject | text | Type the subject | לא |
| Message | textarea | Type your message here... | לא |

**כפתור שליחה:**
- טקסט: `Submit`
- צבע רקע: שחור
- צבע טקסט: לבן
- רוחב: 100% מרוחב הטופס

**הערה לטופס ללא שרת:**
במקום טופס רגיל, יש להשתמש באחת מהאפשרויות הבאות:

**אפשרות 1: Google Forms מוטמע**
```html
<iframe src="YOUR_GOOGLE_FORM_URL" width="100%" height="800" frameborder="0">
</iframe>
```

**אפשרות 2: Formspree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- שדות הטופס -->
</form>
```

**אפשרות 3: EmailJS**
```javascript
// שימוש ב-EmailJS לשליחת מיילים ישירות מהדפדפן
```

---

## 7. עמוד Get Involved

### 7.1 Hero Section

**רקע:** לבן או אפור בהיר  
**גובה:** כ-200px  

**תוכן:**
- **כותרת (H1):** `TAKE PART`
- **תת-כותרת:** `You Can Make a Difference`

### 7.2 Cards Section

**רקע:** לבן  
**מבנה:** 3 כרטיסיות בשורה (רספונסיבי)  

#### כרטיסייה 1: Raise Awareness
- **תמונה:** תמונה רלוונטית (פעילות, אנשים)
- **רקע כותרת:** שחור
- **צבע טקסט:** לבן
- **כותרת:** `RAISE AWARENESS`
- **תת-כותרת:** `Become an Active Member`

#### כרטיסייה 2: Volunteer
- **תמונה:** תמונה של התנדבות
- **רקע כותרת:** שחור
- **צבע טקסט:** לבן
- **כותרת:** `VOLUNTEER`
- **תת-כותרת:** `Every Contribution Counts`

#### כרטיסייה 3: Make a Donation
- **תמונה:** תמונה (למשל, הכותל)
- **רקע כותרת:** תכלת בהיר (#E8F4F8)
- **צבע טקסט:** שחור
- **כותרת:** `MAKE A DONATION`
- **תת-כותרת:** `Be a Part of Real Change`

---

## 8. עמוד Privacy Policy

### 8.1 תוכן מוצע

```
Privacy Policy

Last updated: [DATE]

Am Shalem ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.

1. Information We Collect
- Personal information you provide (name, email, phone number)
- Usage data (how you interact with our website)

2. How We Use Your Information
- To respond to your inquiries
- To send newsletters (if subscribed)
- To improve our website and services

3. Information Sharing
We do not sell, trade, or otherwise transfer your personal information to third parties.

4. Data Security
We implement appropriate security measures to protect your information.

5. Contact Us
If you have questions about this Privacy Policy, please contact us at:
contact@am-shalem.com

6. Changes to This Policy
We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
```

---

## 9. דרישות טכניות

### 9.1 מבנה קבצים מומלץ

```
am-shalem-usa/
├── index.html
├── about.html
├── contact.html
├── get-involved.html
├── privacy-policy.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-torah.jpg
│   │   ├── about-hero.jpg
│   │   ├── rabbi-amsellem.jpg
│   │   ├── activities.jpg
│   │   ├── center-jlm.jpg
│   │   └── cards/
│   │       ├── raise-awareness.jpg
│   │       ├── volunteer.jpg
│   │       └── donation.jpg
│   └── fonts/
│       └── (if using local fonts)
├── CNAME (for custom domain)
└── README.md
```

### 9.2 GitHub Pages Configuration

**CNAME file content (אם יש דומיין מותאם):**
```
www.am-shalem.com
```

**או השארת ברירת מחדל:**
```
username.github.io/am-shalem-usa
```

### 9.3 דרישות רספונסיביות

| Breakpoint | רוחב | התאמות |
|------------|------|--------|
| Desktop | > 1024px | 4 כרטיסיות בשורה |
| Tablet | 768px - 1024px | 2 כרטיסיות בשורה |
| Mobile | < 768px | כרטיסייה אחת בשורה, תפריט המבורגר |

### 9.4 ביצועים ואופטימיזציה

- **תמונות:** WebP format כאשר אפשר, דחיסה מקסימלית
- **Lazy Loading:** לתמונות מתחת ל-fold
- **Minification:** CSS ו-JS מינימליים
- **Font Loading:** font-display: swap

### 9.5 נגישות (Accessibility)

- Alt text לכל התמונות
- Semantic HTML (header, nav, main, footer, section)
- ARIA labels כשנדרש
- יחס ניגודיות מספק (WCAG AA)
- Focus states לכל האלמנטים האינטראקטיביים

---

## 10. שירותים חיצוניים נדרשים

### 10.1 טפסים ללא שרת

**המלצה ראשית: Google Forms**
- חינמי
- קל להגדרה
- נתונים נשמרים ב-Google Sheets

**חלופות:**
- Formspree (חינמי עד 50 submissions/חודש)
- Netlify Forms (אם מארחים ב-Netlify)
- EmailJS

### 10.2 תרומות

**אפשרויות:**
- PayPal Donate Button
- Stripe Payment Links
- GoFundMe
- Donorbox

### 10.3 Newsletter

**אפשרויות:**
- Mailchimp (חינמי עד 500 contacts)
- Buttondown
- Substack (אם רוצים גם בלוג)

---

## 11. SEO ומטא-דאטה

### 11.1 Meta Tags לכל עמוד

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Am Shalem is a non-profit dedicated to promoting Jewish identity, outreach, Torah study, and dissemination in a welcoming environment.">
  <meta name="keywords" content="Am Shalem, Jewish, Torah, Community, Non-profit, Rabbi Amsellem">
  <meta name="author" content="Am Shalem">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Am Shalem - Back to the Roots">
  <meta property="og:description" content="Creating a more inclusive and vibrant Jewish world.">
  <meta property="og:image" content="assets/images/og-image.jpg">
  <meta property="og:url" content="https://www.am-shalem.com">
  <meta property="og:type" content="website">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  
  <title>Home | Am Shalem</title>
  <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">
</head>
```

### 11.2 Structured Data (Schema.org)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NonProfit",
  "name": "Am Shalem",
  "url": "https://www.am-shalem.com",
  "logo": "https://www.am-shalem.com/assets/images/logo.png",
  "description": "A non-profit dedicated to promoting Jewish identity, outreach, Torah study, and dissemination.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1756 East 5th street",
    "addressLocality": "Brooklyn",
    "addressRegion": "NY",
    "postalCode": "11223",
    "addressCountry": "US"
  },
  "telephone": "(347) 434-3973",
  "email": "contact@am-shalem.com"
}
</script>
```

---

## 12. סיכום משימות לפיתוח

### Phase 1: Setup
- [ ] יצירת Repository ב-GitHub
- [ ] הגדרת מבנה קבצים
- [ ] הכנת תמונות ואססטים

### Phase 2: Development
- [ ] פיתוח Header component
- [ ] פיתוח Footer component
- [ ] פיתוח עמוד Home
- [ ] פיתוח עמוד About Us
- [ ] פיתוח עמוד Contact (עם Google Form)
- [ ] פיתוח עמוד Get Involved
- [ ] פיתוח עמוד Privacy Policy

### Phase 3: Styling
- [ ] עיצוב בסיסי (typography, colors)
- [ ] עיצוב רספונסיבי
- [ ] אנימציות והנפשות
- [ ] בדיקת cross-browser

### Phase 4: Optimization
- [ ] אופטימיזציית תמונות
- [ ] בדיקת ביצועים (Lighthouse)
- [ ] בדיקת נגישות
- [ ] הוספת meta tags ו-SEO

### Phase 5: Deployment
- [ ] העלאה ל-GitHub Pages
- [ ] הגדרת דומיין מותאם (אם רלוונטי)
- [ ] בדיקה סופית

---

**מסמך זה הוכן על בסיס ניתוח האתר הקיים ב-https://www.am-shalem.com/**  
**תאריך: ינואר 2026**
