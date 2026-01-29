# WEBSITE PHOTO UPDATE GUIDE
**Professional Photos for UCM & RSave Launch**

---

## PHOTO REQUIREMENTS

### **UCM WEBSITE PHOTOS NEEDED:**

**1. HERO SECTION BACKGROUND:**
- **Current:** `images/IMG_5352.heic`
- **Needs:** Professional photo of people helping others, community service, or inspiring landscape
- **Size:** 1920x1080 pixels minimum
- **Format:** JPG (convert from HEIC)

**2. MINISTRY PHOTOS (Optional but Recommended):**
- **Outreach:** People helping on streets
- **Housing:** Families in homes, keys being handed over
- **Recovery:** Group therapy, counseling sessions
- **Food:** Food distribution, community meals
- **Size:** 800x600 pixels
- **Format:** JPG

**3. SUCCESS STORY PHOTOS:**
- **Before/After:** Program participants (with permission)
- **Testimonials:** People sharing their stories
- **Volunteers:** Team members in action
- **Size:** 400x400 pixels
- **Format:** JPG

### **RSAVE WEBSITE PHOTOS NEEDED:**

**1. SERVICE PHOTOS:**
- **Solar Installation:** Panels being installed, happy families
- **Internet Setup:** Technician installing fiber, fast internet
- **Business Services:** Professional office, merchant processing
- **Size:** 800x600 pixels
- **Format:** JPG

**2. VACATION INCENTIVE PHOTOS:**
- **Beach Getaways:** Beautiful vacation destinations
- **Restaurant Experiences:** Fine dining, family meals
- **Hotel Stays:** Luxury accommodations
- **Size:** 600x400 pixels
- **Format:** JPG

---

## PHOTO SOURCES

### **FREE PROFESSIONAL PHOTOS:**

**1. UNSPLASH.COM (Best Option):**
- Search: "community service," "helping others," "solar panels," "business meeting"
- High-quality, free for commercial use
- Download in highest resolution

**2. PEXELS.COM:**
- Search: "volunteers," "technology," "family," "business"
- Free, no attribution required
- Good selection of diverse photos

**3. PIXABAY.COM:**
- Search: "charity," "solar energy," "internet," "restaurant"
- Free for commercial use
- Decent quality options

### **PAID PROFESSIONAL PHOTOS (If Budget Allows):**

**1. SHUTTERSTOCK.COM:**
- $10-30 per photo
- Highest quality
- Huge selection

**2. GETTY IMAGES:**
- Premium quality
- More expensive but professional

---

## PHOTO EDITING (SIMPLE)

### **BASIC EDITING TOOLS:**

**1. PREVIEW (Mac Built-in):**
- Resize photos
- Convert HEIC to JPG
- Basic brightness/contrast

**2. CANVA.COM (Free):**
- Resize to exact dimensions
- Add text overlays
- Basic filters and adjustments

**3. PHOTOPEA.COM (Free Photoshop Alternative):**
- Advanced editing if needed
- Works in web browser
- Professional tools

---

## HOW TO UPDATE PHOTOS

### **UCM WEBSITE (index.html):**

**1. HERO BACKGROUND:**
```html
<!-- Find this line in index.html: -->
<section id="home" class="hero" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('images/IMG_5352.heic');">

<!-- Change to: -->
<section id="home" class="hero" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('images/hero-background.jpg');">
```

**2. ADD NEW PHOTOS:**
- Create `images` folder if it doesn't exist
- Upload photos with descriptive names:
  - `hero-background.jpg`
  - `outreach-ministry.jpg`
  - `housing-ministry.jpg`
  - `success-story-1.jpg`

### **RSAVE WEBSITE:**

**1. ADD IMAGES FOLDER:**
- Create `rsave-website/images/` folder
- Upload service photos:
  - `solar-installation.jpg`
  - `internet-service.jpg`
  - `business-meeting.jpg`
  - `vacation-beach.jpg`
  - `restaurant-dining.jpg`

**2. UPDATE HTML:**
```html
<!-- Add photos to service sections -->
<div class="service-card">
    <img src="images/solar-installation.jpg" alt="Solar Installation">
    <div class="service-icon">☀️</div>
    <h3>Solar Installation</h3>
    <!-- rest of content -->
</div>
```

---

## STEP-BY-STEP PHOTO UPDATE PROCESS

### **STEP 1: GATHER PHOTOS (30 minutes)**
1. Go to Unsplash.com
2. Search for each photo type needed
3. Download in highest resolution
4. Save to Desktop with descriptive names

### **STEP 2: OPTIMIZE PHOTOS (15 minutes)**
1. Open Canva.com
2. Resize photos to required dimensions
3. Adjust brightness if needed
4. Download as JPG

### **STEP 3: UPLOAD TO WEBSITES (10 minutes)**
1. Create `images` folders in both websites
2. Upload optimized photos
3. Update HTML file references
4. Test that photos load correctly

### **STEP 4: DEPLOY UPDATES (5 minutes)**
1. Upload updated files to hosting
2. Clear browser cache
3. Check both websites load properly

---

## RECOMMENDED PHOTO SEARCHES

### **FOR UCM:**
- "community volunteers helping"
- "people praying together"
- "homeless assistance"
- "addiction recovery group"
- "family reunion happy"
- "professional counseling"
- "food distribution charity"

### **FOR RSAVE:**
- "solar panels installation"
- "fiber optic internet"
- "business handshake"
- "family using technology"
- "luxury vacation resort"
- "fine dining restaurant"
- "professional office space"

---

## PHOTO SPECIFICATIONS

### **TECHNICAL REQUIREMENTS:**
- **Format:** JPG (not HEIC, PNG, or WEBP)
- **Quality:** High resolution, professional looking
- **File Size:** Under 2MB each (for fast loading)
- **Aspect Ratio:** Match the space they'll fill

### **CONTENT REQUIREMENTS:**
- **Diverse:** Show people of different backgrounds
- **Professional:** Clean, well-lit, high quality
- **Relevant:** Match the service or message
- **Positive:** Uplifting, hopeful, inspiring
- **Legal:** Free for commercial use or properly licensed

---

## QUICK PHOTO CHECKLIST

### **BEFORE LAUNCH:**
☐ UCM hero background updated
☐ Ministry photos added (at least 3)
☐ Success story photos ready
☐ RSave service photos added
☐ Vacation incentive photos uploaded
☐ All photos optimized for web
☐ Both websites tested with new photos
☐ Mobile version looks good
☐ Photos load quickly

---

## LAUNCH READINESS

### **ONCE PHOTOS ARE UPDATED:**
✅ **UCM Website:** Professional, inspiring, trustworthy
✅ **RSave Website:** Modern, service-focused, appealing
✅ **Both Mobile-Friendly:** Look great on phones
✅ **Fast Loading:** Optimized file sizes
✅ **Professional Appearance:** Ready for marketing campaigns

**THEN YOU'RE READY TO:**
1. Deploy both websites
2. Launch Facebook advertising
3. Start Grace AI calling
4. Begin generating revenue

**Let's get these photos updated and LAUNCH! 🚀📸**