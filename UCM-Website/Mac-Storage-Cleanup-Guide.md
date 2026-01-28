# MAC STORAGE CLEANUP & PHOTO TRANSFER GUIDE
**Free Up Space & Fix SanDisk Issues**

---

## IMMEDIATE MAC STORAGE CLEANUP

### **1. CHECK STORAGE USAGE**
```bash
# Open Terminal and run:
df -h
du -sh ~/Pictures/
du -sh ~/Downloads/
du -sh ~/Desktop/
```

**Or use GUI:**
- Apple Menu → About This Mac → Storage → Manage
- See what's taking up the most space

### **2. QUICK STORAGE CLEANUP**

**Empty Trash:**
- Right-click Trash → Empty Trash
- This can free up several GB immediately

**Clear Downloads Folder:**
- Open Finder → Downloads
- Delete old files you don't need
- Move important files to external storage

**Clear Desktop:**
- Move files from Desktop to Documents or external drive
- Desktop files use extra memory for thumbnails

**Clear Cache Files:**
```bash
# In Terminal:
sudo rm -rf ~/Library/Caches/*
sudo rm -rf /Library/Caches/*
```

### **3. PHOTOS APP CLEANUP**

**Optimize Photo Storage:**
- Photos App → Preferences → iCloud
- Check "Optimize Mac Storage"
- This keeps thumbnails locally, full photos in iCloud

**Delete Duplicate Photos:**
- Photos App → View → Show Hidden Photo Album
- Delete duplicates and unwanted photos
- Empty "Recently Deleted" album

---

## SANDISK TROUBLESHOOTING

### **1. BASIC SANDISK FIXES**

**Check Connection:**
- Try different USB ports
- Use USB 2.0 port if USB 3.0 isn't working
- Try a different USB cable if possible

**Restart Finder:**
```bash
# In Terminal:
sudo killall Finder
```

**Check Disk Utility:**
- Applications → Utilities → Disk Utility
- Select your SanDisk drive
- Click "First Aid" → Run
- This fixes minor disk errors

### **2. FORMAT SANDISK (IF NEEDED)**

**⚠️ WARNING: This erases all data on the SanDisk**

**Steps:**
1. Open Disk Utility
2. Select SanDisk drive
3. Click "Erase"
4. Format: "ExFAT" (works with Mac and PC)
5. Name: "Photos_Backup"
6. Click "Erase"

### **3. ALTERNATIVE SANDISK MOUNTING**

**Force Mount in Terminal:**
```bash
# List all drives:
diskutil list

# Mount the SanDisk (replace disk2 with your drive):
diskutil mount disk2s1
```

---

## PHOTO TRANSFER SOLUTIONS

### **OPTION 1: DIRECT PHOTO TRANSFER**

**Using Image Capture:**
1. Connect SanDisk to Mac
2. Applications → Image Capture
3. Select iPhone from devices
4. Select SanDisk as destination
5. Select all photos → Import

**Using Photos App:**
1. Photos App → File → Export → Export Photos
2. Choose destination: SanDisk drive
3. Select quality: "Original" for full resolution
4. Click "Export"

### **OPTION 2: CLOUD STORAGE FIRST**

**If SanDisk still not working:**
1. **Upload to iCloud Photos** (temporary)
2. **Use Google Photos** (15GB free)
3. **Use Dropbox** (2GB free)
4. **Use OneDrive** (5GB free)

**Then download to SanDisk later when fixed**

### **OPTION 3: ALTERNATIVE EXTERNAL STORAGE**

**If SanDisk completely broken:**
- **USB Flash Drive** (32GB+ recommended)
- **External Hard Drive** (1TB+ for all photos)
- **SD Card + Card Reader**
- **Another SanDisk** (backup option)

---

## STEP-BY-STEP PHOTO BACKUP PROCESS

### **IMMEDIATE STEPS:**

**1. Free Up Mac Space (5 minutes):**
```bash
# Empty trash
# Clear Downloads folder
# Delete unnecessary Desktop files
```

**2. Test SanDisk (2 minutes):**
- Plug into different USB port
- Check if it appears in Finder
- Run Disk Utility First Aid if visible

**3. Transfer Photos (30-60 minutes):**
- Use Image Capture for direct iPhone → SanDisk
- Or Photos App → Export → SanDisk
- Transfer in batches if needed

### **IF SANDISK WON'T WORK:**

**Plan B - Cloud Backup:**
1. **Enable iCloud Photos** (Settings → Photos → iCloud Photos)
2. **Optimize iPhone Storage** (keeps originals in cloud)
3. **Free up Mac space** for now
4. **Buy new external drive** if needed

**Plan C - New Storage Device:**
- **Amazon:** Search "USB 3.0 Flash Drive 128GB" (~$15-25)
- **Best Buy:** SanDisk Ultra 128GB USB 3.0 (~$20)
- **Target:** PNY Turbo 128GB USB 3.0 (~$18)

---

## PREVENT FUTURE ISSUES

### **AUTOMATIC PHOTO MANAGEMENT:**

**iCloud Photos Setup:**
- iPhone: Settings → Photos → iCloud Photos → ON
- Mac: Photos → Preferences → iCloud → iCloud Photos → ON
- Choose "Optimize Mac Storage"

**Regular Backups:**
- Weekly photo exports to external drive
- Monthly cleanup of unwanted photos
- Quarterly full backup verification

### **STORAGE MONITORING:**

**Mac Storage Alerts:**
- System Preferences → Apple ID → iCloud → Manage
- Set up low storage notifications
- Regular cleanup schedule

---

## EMERGENCY WORKAROUNDS

### **IF NOTHING WORKS:**

**1. Use iPhone Directly:**
- Keep photos on iPhone temporarily
- Use iPhone hotspot for internet
- Continue with RSave website work

**2. Cloud-Only Solution:**
- Upload all photos to Google Photos (unlimited with compression)
- Delete from iPhone after upload
- Download to external drive later

**3. Professional Help:**
- Apple Store Genius Bar appointment
- Local computer repair shop
- Data recovery service (if SanDisk has important data)

---

## QUICK COMMANDS SUMMARY

```bash
# Check storage space
df -h

# Clear caches
sudo rm -rf ~/Library/Caches/*

# Restart Finder
sudo killall Finder

# List all drives
diskutil list

# Mount drive (replace disk2s1 with your drive)
diskutil mount disk2s1

# Check SanDisk health
diskutil verifyDisk /dev/disk2
```

---

## IMMEDIATE ACTION PLAN

**Next 10 Minutes:**
1. Empty Mac Trash
2. Clear Downloads folder
3. Try SanDisk in different USB port
4. Run Disk Utility First Aid on SanDisk

**If SanDisk Works:**
1. Transfer photos in batches
2. Verify transfer completed
3. Delete photos from iPhone
4. Continue RSave website work

**If SanDisk Doesn't Work:**
1. Enable iCloud Photos
2. Order new USB drive from Amazon
3. Continue website work while photos upload
4. Transfer to new drive when it arrives

**The key is don't let storage issues stop your RSave momentum - we can work around this!**