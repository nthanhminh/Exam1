# Exam1

---

## 1. Cách chạy

```bash
npm install
npm run start:dev
```

## 2. Minh họa
* Minh họa API Document

<img width="1786" height="684" alt="image" src="https://github.com/user-attachments/assets/3f3e39ce-4d20-49fc-a05a-add866e69e74" />

* Minh họa kết quả

<img width="1732" height="912" alt="image" src="https://github.com/user-attachments/assets/35142b81-fc13-4cea-a4b7-4e80737891f7" />

## 3. Mẫu kết quả trả về

```json
{
  "statusCode": 200,
  "data": {
    "basic": {
      "fullAddress": "18 Hoppin Ave, Montauk, NY 11954",
      "propertyType": "Single-family",
      "bedrooms": "—",
      "bathrooms": "—",
      "totalSqft": "—",
      "lotSqft": "7,405 square feet",
      "yearBuilt": "—",
      "imageUrls": [
        "https://ssl.cdn-redfin.com/photo/269/bigphoto/021/855021_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_1_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_2_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/bigphoto/021/855021_3_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_4_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_5_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/bigphoto/021/855021_6_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_7_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_8_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/bigphoto/021/855021_9_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_10_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_11_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/bigphoto/021/855021_12_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_13_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_14_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/bigphoto/021/855021_15_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_16_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_17_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/bigphoto/021/855021_18_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_19_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_20_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/bigphoto/021/855021_21_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_22_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_23_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/bigphoto/021/855021_24_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_25_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_26_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/bigphoto/021/855021_27_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_28_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_29_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/bigphoto/021/855021_30_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_31_0.jpg",
        "https://ssl.cdn-redfin.com/photo/269/mbpaddedwide/021/genMid.855021_32_0.jpg"
      ]
    },
    "details": {
      "parkingInfo": {
        "Carport YN": "No"
      },
      "interiorInfo": {
        "Has Fireplace": "true",
        "Fireplaces Total": "1",
        "Fireplace Features": "Living Room",
        "Cooling": "None",
        "Heating": "Forced Air",
        "Interior Features": "First Floor Bedroom,First Floor Full Bath,Built-in Features,Ceiling Fan(s),Dry Bar,Entrance Foyer,Granite Counters,Kitchen Island,Master Downstairs,Natural Woodwork,Open Floorplan,Open Kitchen,Storage,Washer/Dryer Hookup",
        "Appliances": "Cooktop, Dishwasher, Electric Cooktop, Electric Range, Freezer, Microwave, Refrigerator",
        "Flooring": "Combination",
        "Basement YN": "Yes",
        "Attic": "None",
        "Rooms Total": "9",
        "Basement": "Bilco Door(s), Full",
        "Bathrooms Full": "3"
      },
      "exteriorInfo": {
        "Construction Materials": "Aluminum Siding",
        "Waterfront YN": "No",
        "Additional Parcels YN": "No",
        "Living Area (Sq. Ft.)": "2080.00",
        "Building Area Total (Sq. Ft.)": "2080.00",
        "Property Sub Type": "Single Family Residence"
      },
      "financialInfo": {
        "Tax Year": "2025",
        "Tax Source": "Municipality",
        "Tax Annual Amount": "$6,780"
      },
      "utilitiesInfo": {
        "Electric Company": "PSEG",
        "Sewer": "Septic Tank",
        "Utilities": "Cable Available, Electricity Connected, Propane, Water Connected"
      },
      "locationInfo": {
        "Elementary School": "Contact Agent",
        "Middle Or Junior School": "Contact Agent",
        "High School": "Contact Agent",
        "High School District": "Montauk",
        "County Or Parish": "Suffolk County"
      }
    }
  }
}
```


