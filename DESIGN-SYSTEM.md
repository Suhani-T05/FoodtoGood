# FoodtoGood – Design System

## 1. Color Palette
- Primary: #228B22
- Secondary: #7BA05B
- Background: #FFFAF0
- Text: #263238
- Accent: #FED8B1
- Error: #D32F2F
- Success: #388E3C

## 2. Typography
- Font Family: Poppins
- H1: 32px / Bold 700
- H2: 24px / SemiBold 600
- H3: 20px / SemiBold 600
- Body: 16px / Regular 400
- Button: 14px / SemiBold 600
- Small Text: 12px / Regular 400

## 3. Reusable UI Components

### Navbar
Purpose: Provides navigation across the application.
### Button
Purpose: Allows users to perform actions.

Types:
- Primary Button
- Secondary Button
- Danger Button

Actions:
- Donate Food
- Request Food
- Accept Pickup
- Submit
- Cancel
- Verify Collection

### Food Card
Purpose: Displays the details of available food donations.

Details:
- Food name
- Food image
- Food quantity
- Food category
- Donor name
- Location
- Pickup deadline

Actions:
- View Details
- Request Food

### NGO Request Card
Purpose: Displays food requests made by NGOs.

Details:
- NGO name
- Required food quantity
- Number of people to be served
- Required pickup location
- Request date

Actions:
- View Request
- Accept Request
- Cancel Request

### Volunteer Task Card
Purpose: Displays food pickup and delivery tasks for volunteers.

Details:
- Food name
- Pickup location
- Delivery location
- Food quantity
- Pickup deadline
- Task status

Actions:
- Accept Task
- View Task Details
- Mark as Delivered

### Search & Filter
Purpose: Helps users find suitable food donations.

Features:
- Search by food name
- Filter by food category
- Filter by location
- Filter by availability
- Clear Filters

### Status Badge
Purpose: Displays the current status of food donations and requests.

Status Types:
- Available
- Requested
- Accepted
- Collected
- Delivered
- Cancelled

### Impact Statistic Card
Purpose: Displays the impact of food donations.

Details:
- Total food donations
- Total food quantity shared
- Total meals served
- Total successful deliveries

### OTP Verification
Purpose: Verifies successful food collection.

Elements:
- OTP input field
- Verify button
- Resend OTP option
- Verification success message
- Verification error message

### Confirmation Modal
Purpose: Asks users to confirm an action before proceeding.

Elements:
- Modal title
- Confirmation message
- Confirm button
- Cancel button

Use Cases:
- Confirm food request
- Confirm donation cancellation
- Confirm task acceptance

### Input Field
Purpose: Allows users to enter information into forms.

Types:
- Text Input
- Number Input
- Email Input
- Password Input
- Date and Time Input
- Location Input

Elements:
- Field Label
- Placeholder Text
- Validation Message

### Dropdown
Purpose: Allows users to select an option from a predefined list.

Fields:
- Food Category
- Food Availability
- Donation Status
- Quantity Unit

Features:
- Dropdown Label
- Default Placeholder
- Selectable Options

### Image Upload
Purpose: Allows donors to upload images of surplus food.

Elements:
- Upload Image Button
- Image Preview
- Remove Image Option

Features:
- Support image formats (JPG, JPEG, PNG)
- Display uploaded image
- Show an error for unsupported file formats

### Loading State
Purpose: Shows users that the application is processing a request.

Elements:
- Loading Spinner
- Loading Message

Use Cases:
- Loading food listings
- Submitting a food donation
- Processing a food request
- Verifying OTP

### Empty State
Purpose: Displays a helpful message when no data is available.

Use Cases:
- No food donations available
- No requests found
- No volunteer tasks available
- No search results found

Elements:
- Empty State Illustration or Icon
- Informative Message
- Suggested Action Button

### Footer
Purpose: Provides additional information and navigation at the bottom of the application.

Elements:
- FoodtoGood Logo
- About Us
- Contact Information
- Quick Links
- Copyright Information

### Location Field
Purpose: Allows users to enter or select food pickup and delivery locations.

Elements:
- Location Label
- Address Input
- Area or City
- Location Placeholder
- Validation Message

### Location Field
Purpose: Allows users to enter or select food pickup and delivery locations.

Elements:
- Location Label
- Address Input
- Area or City
- Location Placeholder
- Validation Message

### Success & Error Messages
Purpose: Provides feedback after user actions.

Success Messages:
- Food listed successfully
- Food request submitted
- Pickup verified successfully

Error Messages:
- Required fields are missing
- Invalid input
- Image upload failed
- Something went wrong